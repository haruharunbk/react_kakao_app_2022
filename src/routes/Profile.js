import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import profileImage from '../data/profileImg.json';
import '../styles/Profile.scss';

function Profile() {
	const myProfile = profileImage[0];
	return (
		<>
			<Header tab_name = "Profile" left_btn = "fas fa-times" right_btn = "fas fa-user" />
			<main className="main-profile">
				<section className="background"></section>
				<section className="profile">
					<div className="profile-img">
						<img src={myProfile.image} alt={myProfile.name} />
					</div>
					<div className="profile-cont">
						<span className="profile-name">{myProfile.name}</span>
						<input type="text" className="profile-email" placeholder={myProfile.email} />
						<ul className="profile-menu">
							<li><Link to="#none"><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</Link></li>
							<li><Link to="#none"><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</Link></li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}

export default Profile;