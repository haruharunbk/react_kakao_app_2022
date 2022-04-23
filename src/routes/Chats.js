import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ChatList from '../components/ChatList';
import profileImage from '../data/profileImg.json';
import '../styles/Chats.scss';

function Chats() {
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const friendsImg = profileImage;

	useEffect(() => {
		const fetchUsers = async () => {
		try {
			setError(null);
			setProfile(null);
			setLoading(true);
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			setProfile(response.data); 
		} catch (e) {
			setError(e);
		}
		setLoading(false);
		};

		fetchUsers();
	}, []);

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error has occurred!</div>;
	if (!profile) return null;

	return (
		<>
			<Header tab_name = "Chats" header_icon = "fas fa-caret-down" left_btn = "Edit" />
			<main className="chats">
				<form className="search-box">
					<fieldset className="search-inner">
						<legend className="blind">검색창</legend>
						<i className="fas fa-search"></i>
						<input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends" />
					</fieldset>
				</form>
				<section className="main-section">
					<header className="blind"><h2>Friends</h2></header>
					<ul>
						{profile.map((chat, idx) => (
							<ChatList
								key = {chat.id}
								id = {chat.id}
								name = {chat.name}
								email = {chat.email}
								img = {friendsImg[idx + 1].image}
							/>
						))}
					</ul>
				</section>
				<div className="chat-fa-btn">
					<Link to="#none"><i className="fas fa-comment"></i></Link>
				</div>
			</main>
			<Nav />
		</>
	);
}

export default Chats;