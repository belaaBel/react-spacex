import React from 'react';

import './footer.css';
import logo from '../../logo.svg';

const Footer = ({link}) => (
    <footer className="footer">
		<img src={logo} alt="logo Space X" className="logo"/>
		<nav className="footer-nav">
			<ul className="list">
                <li className="item"><a href={link.elon_twitter} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk Twitter</a></li>
				<li className="item"><a href={link.twitter} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a></li>
				<li className="item"><a href={link.flickr} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a></li>
				<li className="item"><a href={link.website} rel="noopener noreferrer" target='_blank' className="item-link">Website</a></li>
			</ul>
		</nav>
		<p className="footer-text">
			For additional questions, contact
			<a className="footer-link" href="mailto:rideshare@spacex.com">
                rideshare@spacex.com
            </a>
		</p>
	</footer>
);

export default Footer;