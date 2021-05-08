import { Message } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

import Body from '../../../../components/Message/Body';
import { IMessage } from '../../../../../definition/IMessage';
import Attachments from '../../../../components/Message/Attachments';
import Discussion from '../../../../components/Message/Metrics/Discussion';
import MessageBlock from '../../../blocks/MessageBlock';
import MessageLocation from '../../../location/MessageLocation';

export const SequentialMessage: FC<{ message: IMessage }> = ({ message }) => {
	return (
		<Message>
			<Message.LeftContainer></Message.LeftContainer>
			<Message.Container>
				<Message.Body>{!message.blocks && !message.md && message.msg}
					{!message.blocks && message.md && <Body mentions={message.mentions} tokens={message.md} />}</Message.Body>
				{message.blocks && (
					<MessageBlock mid={message.mid} blocks={message.blocks} appId rid={message.rid} />
				)}
				{message.attachments && (
					<Attachments attachments={message.attachments} file={message.file} />
				)}

				{message.drid && <Discussion count={message.dcount} drid={message.drid} lm={message.dlm} />}
				{message.location && <MessageLocation location={message.location} />}
			</Message.Container>
		</Message>
	);
};
