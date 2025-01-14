import { css } from '@rocket.chat/css-in-js';
import { Box, Bubble } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';

type UnreadMessagesIndicatorProps = {
	count: number;
	onJumpButtonClick: () => void;
	onMarkAsReadButtonClick: () => void;
};

const indicatorStyle = css`
	position: relative;
	display: flex;
	justify-content: center;
	z-index: 3;
`;

const UnreadMessagesIndicator = ({ count, onJumpButtonClick, onMarkAsReadButtonClick }: UnreadMessagesIndicatorProps): ReactElement => {
	const t = useTranslation();

	return (
		<Box className={indicatorStyle} mbs={8}>
			<Bubble
				onClick={onJumpButtonClick}
				onDismiss={onMarkAsReadButtonClick}
				icon='arrow-up'
				dismissProps={{ 'title': t('Mark_as_read'), 'aria-label': `${t('Mark_as_read')}` }}
			>
				{t('S_unread_messages', count)}
			</Bubble>
		</Box>
	);
};

export default UnreadMessagesIndicator;
