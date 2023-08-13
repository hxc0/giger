import { FC, useState } from 'react';
import { AnimatePresence, cubicBezier, motion } from 'framer-motion';
import { IGigListProps } from './gigList.model';
import { Gig } from '../gig/gig';
import { GigStatus, IGig } from '../../../models/gig';

import './gigList.scss';

export const GigList: FC<IGigListProps> = ({ gigs, toggleMenuState }) => {
    const [selectedGig, setSelectedGig] = useState<IGig | null>(null);

    const sortedGigs = gigs.sort((a, b) => {
        const statusesRank = {
            [GigStatus.IN_PROGRESS]: 1,
            [GigStatus.AVAILABLE]: 2,
            [GigStatus.COMPLETED]: 3
        };
        return statusesRank[a.status] - statusesRank[b.status];
    });
    const selectGig = (gig: IGig) => {
        selectedGig?.id === gig.id ? setSelectedGig(null) : setSelectedGig(gig);
    };

    return (
        <section className="gig-list">
            <header className="gig-list__controls">
                <AnimatePresence>
                    {!selectedGig && (
                        <motion.span
                            className="gig-list__count"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                ease: cubicBezier(0.16, 1, 0.3, 1)
                            }}
                        >
                            {gigs.length} {gigs.length > 1 ? 'GIGS' : 'GIG'}
                        </motion.span>
                    )}
                    {selectedGig && (
                        <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="gig-list__back"
                            onClick={() => setSelectedGig(null)}
                        >
                            BACK
                        </motion.span>
                    )}
                </AnimatePresence>
                <span className="gig-list__filters" onClick={toggleMenuState}>
                    FILTERS
                </span>
            </header>
            <motion.ul className="gig-list__list">
                <AnimatePresence>
                    {sortedGigs.map((gig, i) => (
                        <Gig
                            gig={gig}
                            key={gig.id}
                            selectedId={selectedGig?.id}
                            setSelected={selectGig}
                            delayMultiplier={i}
                        />
                    ))}
                </AnimatePresence>
            </motion.ul>
        </section>
    );
};
