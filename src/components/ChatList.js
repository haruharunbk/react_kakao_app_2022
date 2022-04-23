import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChatList({ id, name, email, img }) {
	return (
		<>
			<li>
				<Link to={'/chatting'}
						state={{ id, name, img }}>
				<span className="chats-img">
					<img src={img} alt={name} />
				</span>
				<span className="chats-cont">
					<span className="chats-name">{name}</span>
					<span className="chats-latest">{email}</span>
				</span>
				<span className="chats-time"><span>17</span>:<span>33</span></span>
				</Link>
			</li>
		</>
	);
}

ChatList.propTypes = {
	id : PropTypes.number.isRequired,
	name : PropTypes.string.isRequired,
	email : PropTypes.string.isRequired,
	img : PropTypes.string.isRequired
}

export default ChatList;