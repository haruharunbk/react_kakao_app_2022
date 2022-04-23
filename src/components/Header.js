import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header({tab_name, left_btn, right_btn, friend_num, header_icon, link_to}){
	if(tab_name === undefined) {tab_name = ''}
	if(left_btn === undefined) {left_btn = ''}
	if(right_btn === undefined) {right_btn = ''}
	if(friend_num === undefined) {friend_num = ''}
	if(header_icon === undefined) {header_icon = ''}
	if(link_to === undefined) {link_to = '/'}
	return (
		<header className={tab_name}>
			<div className="status-bar">
				<div className="left-item">
					<i className="fas fa-plane"></i>
					<i className="fas fa-wifi"></i>
				</div>
				<div className="center-item">
					<span>17</span>:<span>33</span>
				</div>
				<div className="right-item">
					<i className="far fa-moon"></i>
					<i className="fab fa-bluetooth-b"></i>
					<span><span>100</span>%</span>
					<i className="fas fa-battery-full"></i>
				</div>
			</div>
			<div className="title-bar">
				<h1>
					{tab_name} <i className={header_icon}></i>
					<span>{friend_num}</span>
				</h1>
				<div className="left-item">
					<Link to={link_to}>
						{left_btn.indexOf("fa") === -1 ? (
							left_btn
						) : (
							<i className={left_btn}></i>
						)}
					</Link>
				</div>
				<div className="right-item">
					<Link to="#none">
						{right_btn.indexOf("fa") === -1 ? (
							right_btn
						) : (
							<i className={right_btn}></i>
						)}
					</Link>
				</div>
			</div>
		</header>
	);
}


export default Header;