import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/Chatting.scss';

function Chatting() {
	const location = useLocation();
	const { name, img } = location.state;
	return (
		<>
			<header className="Chatting">
				<div className="status-bar">
					<div className="left-item">
						<i className="fas fa-plane"></i><i className="fas fa-wifi"></i>
					</div>
					<div className="center-item">
						<span>17</span> : <span>33</span>
					</div>
					<div className="right-item">
						<i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span>100%</span><i className="fas fa-battery-full"></i>
					</div>
				</div>
				<div className="title-bar">
					<h1>{name}</h1>
					<div className="left-item">
						<Link to="/chats"><i className="fas fa-angle-left"></i></Link>
					</div>
					<div className="right-item">
						<Link to="#none">
							<i class="fas fa-search"></i><i class="fas fa-bars"></i>
						</Link>
					</div>
				</div>
			</header>
			<main className="chatting">
				<span className="date-info">Monday, April 18, 2022</span>
				<div className="chat-box my">
					<span className="chat">Hello!</span>
					<span className="chat">Hello! This is a test message.</span>
					<span className="chat">This is a test message.</span>
					<span className="chat-time"><span>16</span>:<span>30</span></span>
				</div>
				<div className="chat-box other">
					<div className="other-info">
						<Link to="#none">
						<span className="profile-img"><img src={img} alt={name} /></span>
						</Link>
						<span className="profile-name">{name}</span>
					</div>
					<span className="chat">Add this is an answer</span>
					<span className="chat">Add this is an answer And this is an answer</span>
					<span className="chat">Add this is an answer</span>
					<span className="chat-time"><span>17</span>:<span>33</span></span>
				</div>
			</main>
			<footer className="footer">
				<span className="plus-btn"><a href="#none"><i className="fas fa-plus"></i></a></span>
				<form action="/" method="post">
					<fieldset className="text-box">
						<legend className="blind">채팅 입력창</legend>
						<label className="blind">채팅 입력</label>
						<input type="text" id="chatting" className="text-field" />
						<span className="emoticon-btn"><a href="#none"><i className="far fa-smile"></i></a></span>
						<span className="voice-btn"><a href="#none"><i className="fas fa-microphone"></i></a></span>
					</fieldset>
				</form>
			</footer>
		</>
	);
}

export default Chatting;