import { AnimatePresence } from 'framer-motion';
import { FC, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { GigStatus } from '../../../models/gig';
import { IGigProps } from './gig.model';
import { useGigsService } from '../../../shared/services/gigs.service';
import { useGigHelpers } from './gig.helpers';
import { useUserService } from '../../../shared/services/user.service';
import { GigHeader } from './gig-header/gig-header';
import { GigBody } from './gig-body/gig-body';

import './gig.scss';

export const Gig: FC<IGigProps> = ({ gig, selectedId, delayMultiplier }) => {
    const { currentUser } = useUserService();
    const { isLocked } = useGigsService();
    const { buttonColor, gigClassname } = useGigHelpers();
    const isMine = useMemo(() => {
        return gig.authorId === currentUser?.id;
    }, [gig, currentUser]);

    const wrapperClasses = classNames({
        gig__wrapper: true,
        'gig__wrapper--locked': isLocked(gig),
        'gig__wrapper--small-margin': gig.status !== GigStatus.AVAILABLE,
        'gig__wrapper--no-margin': selectedId !== undefined
    });

    const statusClasses = classNames({
        gig__status: true,
        [`gig__status--${buttonColor(gig.status, isMine)}`]: true,
        'gig__status--shown': !selectedId
    });

    const showGigStatus = gig.status !== GigStatus.AVAILABLE || isMine;

    return (
        <li className={wrapperClasses}>
            <span
                className={`gig__from ${
                    gig.id === selectedId ? 'gig__from--shown' : ''
                }`}
            >
                <FormattedMessage id={'FROM'} />:{' '}
                {gig.isAnonymizedAuthor ? (
                    <FormattedMessage id="ANONYMOUS" />
                ) : (
                    gig.authorName
                )}
            </span>
            <div className={gigClassname(gig)}>
                <AnimatePresence>
                    <GigHeader gig={gig} delayMultiplier={delayMultiplier} />
                </AnimatePresence>

                <AnimatePresence>
                    {selectedId === gig.id && (
                        <GigBody gig={gig} isMine={isMine} />
                    )}
                </AnimatePresence>
            </div>
            {showGigStatus && (
                <div className={statusClasses}>
                    {gig.status !== GigStatus.AVAILABLE &&
                        gig.status.replace('_', ' ')}{' '}
                    {isMine && <FormattedMessage id="MY_GIG" />}
                </div>
            )}
        </li>
    );
};
