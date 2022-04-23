import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
import profileImage from '../data/profileImg.json';
import '../styles/Friends.scss';

function Friends() {
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const friendsImg = profileImage;
	const myProfile = friendsImg[0];

	useEffect(() => {
		const fetchUsers = async () => {
		try {
			// 요청이 시작 할 때에는 error 와 users 를 초기화하고
			setError(null);
			setProfile(null);
			// loading 상태를 true 로 바꿉니다.
			setLoading(true);
			const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
			);
			setProfile(response.data); // 데이터는 response.data 안에 들어있습니다.
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
			<Header tab_name = "Friends" friend_num = "1" left_btn = "Manage" right_btn = "fas fa-cog" />
			<main className="friends">
				<form className="search-box">
					<fieldset className="search-inner">
						<legend className="blind">검색창</legend>
						<i className="fas fa-search"></i>
						<input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Friends" />
					</fieldset>
				</form>
				<section className="main-section">
					<header><h2>My Profile</h2></header>
					<ul>
						<li>
						<Link to="/profile">
							<span className="profile-img">
							<img src={myProfile.image} alt={myProfile.name} />
							</span>
							<span className="profile-name">{myProfile.name}</span>
							<span className="profile-messages">{myProfile.profileMsg}</span>
						</Link>
						</li>
					</ul>
				</section>
				<section className="main-section">
					<header><h2>Friends</h2></header>
					<ul>
						{profile.map((profileInfo, idx) => {
						if (profileInfo.id > 0) {
							return (
								<MemberList
									key = {profileInfo.id}
									id = {profileInfo.id}
									name = {profileInfo.name}
									username = {profileInfo.username}
									img = {friendsImg[idx + 1].image}
								/>
							)
						}
						return false;
						})}
					</ul>
				</section>
			</main>
			<Nav />
		</>
	);
}

export default Friends;