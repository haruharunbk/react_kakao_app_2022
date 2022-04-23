import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MemberList({ id, name, username, img }) {
	return (
		<>
			<li>
				<Link to={'/chatting'} state={{ name, username, img }}>
					<span className="profile-img">
						<img src={img} alt={name} />
					</span>
					<span className="profile-name">{name}</span>
					<span className="profile-messages">{username}</span>
				</Link>
			</li>
		</>
	);
}

MemberList.propTypes = {
	id : PropTypes.number.isRequired,
	name : PropTypes.string.isRequired,
	username : PropTypes.string.isRequired,
	img : PropTypes.string.isRequired
}

export default MemberList;