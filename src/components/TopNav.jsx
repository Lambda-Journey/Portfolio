import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin-sm.svg';

const TopNav = () => {
	return (
		<StyledTopNav>
			<Logo to="/" className="logo">
				G
			</Logo>
			<Socials>
				<a href="https://github.com/SebastianGarces" target="_blank">
					<GithubIcon />
				</a>
				<a href="https://linkedin.com/in/gsebastiangarces" target="_blank">
					<LinkedInIcon />
				</a>
			</Socials>
		</StyledTopNav>
	);
};

const StyledTopNav = styled.nav`
	height: 100%;
	width: 100%;
	grid-area: topnav;
	display: grid;
	grid-template-columns: 50px 0.75fr 2fr 2fr 0.75fr 50px;
	grid-template-rows: 100%;
    width: 100%;
    
    @media only screen and (max-width: 1000px) {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        padding: 0 0 0 1rem;
}
`;

const Logo = styled(NavLink)`
	display: inline-block;
	height: 35px;
	width: 35px;
	line-height: 35px;
	font-size: 22px;
	text-align: center;
	text-decoration: none;
	color: #f0f0f0;
	border-width: 3px;
	border-style: solid;
	border-image: linear-gradient(104.27deg, #0057ff 0.44%, #00ff85 100%);
	border-image-slice: 1;
	transform: none;
	box-sizing: content-box;
	grid-column: 2/3;
	place-self: center;
	font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    
    @media only screen and (max-width: 1000px) {
		grid-column: 1/2;
	}
`;

const Socials = styled.div`
	grid-column: 5/6;
	place-self: center;

	svg {
		opacity: 0.5;
		margin: 0 1rem;
    }
    
    @media only screen and (max-width: 1000px) {
        grid-column: 3/4;
        padding: 0;
        margin: 0;
        place-self: center;
	}
`;

export default TopNav;
