import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
	return (
		<>
			<Header tab_name = "Find" left_btn = "Edit" />
			<main className="find">
				<ul className="find-method">
				<li>
					<Link to="#none"><i className="fas fa-address-book"></i>Find</Link>
				</li>
				<li>
					<Link to="#none"><i className="fas fa-qrcode"></i>QR Code</Link>
				</li>
				<li>
					<Link to="#none"><i className="fas fa-mobile-alt"></i>Shake</Link>
				</li>
				<li>
					<Link to="#none"><i className="fas fa-envelope"></i>Invite via SNS</Link>
				</li>
				</ul>
				<section className="recommend-section">
					<header><h2>Recommended Friends</h2></header>
					<ul>
						<li>You Have no Recommended friends.</li>
					</ul>
				</section>
			</main>
			<Nav />
		</>
	);
}

export default Find;