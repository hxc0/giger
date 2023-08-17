import { FC } from 'react';
import { IConversation } from '../../../models/message';

import './convo-snippet.scss';
import MemoizedFormattedMessage from 'react-intl/src/components/message';
import { AnimatePresence, cubicBezier, motion } from 'framer-motion';

export const ConvoSnippet: FC<{
    convo: IConversation;
    delayMultiplier: number;
}> = ({ convo, delayMultiplier }) => {
    const lastMessage = convo.messages[convo.messages.length - 1];
    return (
        <AnimatePresence>
            <motion.article
                initial={{ opacity: 0, transform: 'scaleX(0)' }}
                animate={{ opacity: 1, transform: 'scaleX(1)' }}
                exit={{ opacity: 0, transform: 'scaleX(0)', height: 0 }}
                transition={{
                    delay: delayMultiplier * 0.06,
                    ease: cubicBezier(0.16, 1, 0.3, 1)
                }}
                className="convo-snippet"
            >
                <section className="convo-snippet__meta">
                    <span className="convo-snippet__sender">
                        @{lastMessage.sender.handle}
                    </span>
                    {' > '}
                    <span className="convo-snippet__date">
                        {new Date(lastMessage.date).toLocaleTimeString()}
                    </span>
                    {' > '}
                    <span className="convo-snippet__status">
                        <MemoizedFormattedMessage
                            id={lastMessage.status?.toUpperCase()}
                        />
                    </span>
                </section>
                <span className="convo-snippet__message">
                    {lastMessage.text}
                </span>
            </motion.article>
        </AnimatePresence>
    );
};
