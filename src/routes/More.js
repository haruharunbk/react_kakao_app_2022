import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import profileImage from '../data/profileImg.json';
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
					<span className="chat-img"><a href="#none"><i className="far fa-comment"></i></a></span>
				</section>
				<section className="user-menu">
					<h2 className="blind">사용자 메뉴</h2>
					<ul>
						<li><a href="#none"><i className="far fa-smile"></i>Emoticons</a></li>
						<li><a href="#none"><i className="fas fa-paint-brush"></i>Themes</a></li>
						<li><a href="#none"><i className="far fa-hand-peace"></i>Plus Friends</a></li>
						<li><a href="#none"><i className="far fa-user-circle"></i>Account</a></li>
					</ul>
				</section>
				<section className="plus-friends">
					<header>
						<h2>Plus Friends</h2>
						<span><i className="fas fa-info-circle"></i> Learn More</span>
					</header>
					<ul className="plus-list">
						<li><a href="#none"><i className="fas fa-utensils"></i>Order</a></li>
						<li><a href="#none"><i className="fas fa-home"></i>Store</a></li>
						<li><a href="#none"><i className="fas fa-tv"></i>TV Channel/Radio</a></li>
						<li><a href="#none"><i className="fas fa-pencil-alt"></i>Creation</a></li>
						<li><a href="#none"><i className="fas fa-graduation-cap"></i>Education</a></li>
						<li><a href="#none"><i className="fas fa-university"></i>Politics/Society</a></li>
						<li><a href="#none"><i className="fas fa-won-sign"></i>Finance</a></li>
						<li><a href="#none"><i className="fas fa-video"></i>Movies/Music</a></li>
					</ul>
				</section>
				<section className="more-app">
					<h2 className="blind">앱 더보기</h2>
					<ul>
						<li><a href="#none"><span className="app-icon"></span>Kakao Story</a></li>
						<li><a href="#none"><span className="app-icon"></span>Path</a></li>
						<li><a href="#none"><span className="app-icon"></span>Kakao Friends</a></li>
					</ul>
				</section>
			</main>
			<Nav />
		</>
	);
}

export default More;