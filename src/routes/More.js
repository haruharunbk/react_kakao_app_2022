import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import profileImage from '../data/profileImg.json';
//import plusFriends from '../data/plusFriends.json';
//import PlusFriends from '../components/PlusFriends';
import '../styles/More.scss';

function More() {
	const myProfile = profileImage[0];
	return (
		<>
			<Header tab_name = "More"  right_btn = "fas fa-cog" />
			<main className="more">
				<section className="user-info">
					<h2 className="blind">사용자 정보</h2>
					<span className="profile-img">
						<img src={myProfile.image} alt="My name" />
					</span>
					<span className="profile-info">
						<span className="profile-name">{myProfile.name}</span>
						<span className="profile-email">{myProfile.email}</span>
					</span>
					<span className="chat-img"><Link to="#none"><i className="far fa-comment"></i></Link></span>
				</section>
				<section className="user-menu">
					<h2 className="blind">사용자 메뉴</h2>
					<ul>
						<li><Link to="#none"><i className="far fa-smile"></i>Emoticons</Link></li>
						<li><Link to="#none"><i className="fas fa-paint-brush"></i>Themes</Link></li>
						<li><Link to="#none"><i className="far fa-hand-peace"></i>Plus Friends</Link></li>
						<li><Link to="#none"><i className="far fa-user-circle"></i>Account</Link></li>
					</ul>
				</section>
				<section className="plus-friends">
					<header>
						<h2>Plus Friends</h2>
						<span><i className="fas fa-info-circle"></i> Learn More</span>
					</header>
					<ul className="plus-list">
						<li><Link to="#none"><i className="fas fa-utensils"></i>Order</Link></li>
						<li><Link to="#none"><i className="fas fa-home"></i>Store</Link></li>
						<li><Link to="#none"><i className="fas fa-tv"></i>TV Channel/Radio</Link></li>
						<li><Link to="#none"><i className="fas fa-pencil-alt"></i>Creation</Link></li>
						<li><Link to="#none"><i className="fas fa-graduation-cap"></i>Education</Link></li>
						<li><Link to="#none"><i className="fas fa-university"></i>Politics/Society</Link></li>
						<li><Link to="#none"><i className="fas fa-won-sign"></i>Finance</Link></li>
						<li><Link to="#none"><i className="fas fa-video"></i>Movies/Music</Link></li>
					</ul>
				</section>
				<section className="more-app">
					<h2 className="blind">앱 더보기</h2>
					<ul>
						<li><Link to="#none"><span className="app-icon"></span>Kakao Story</Link></li>
						<li><Link to="#none"><span className="app-icon"></span>Path</Link></li>
						<li><Link to="#none"><span className="app-icon"></span>Kakao Friends</Link></li>
					</ul>
				</section>
			</main>
			<Nav />
		</>
	);
}

export default More;