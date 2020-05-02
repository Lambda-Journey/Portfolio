import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const SideNav = () => {
	return (
		<StyledSideNav className="nav">
			<NavLink to="/projects" activeClassName="selected" className="link-container" exact>
				<p>Projects</p>
			</NavLink>

			<NavLink to="/about" activeClassName="selected" className="link-container" exact>
				<p>About</p>
			</NavLink>

			<NavLink to="/resume" activeClassName="selected" className="link-container" exact>
				<p>Resume</p>
			</NavLink>
		</StyledSideNav>
	);
};

const StyledSideNav = styled.nav`
	display: grid;
	grid-area: sidenav;
	width: 100%;
	height: 100%;
	grid-template-columns: 50px;
	grid-template-rows: 1fr 2fr 2fr 2fr 1fr;
	font-family: 'Montserrat', sans-serif;

	.link-container:nth-child(1) {
		background-color: #132031;
		grid-row: 2/3;
	}
	.link-container:nth-child(2) {
		background-color: #132640;
		grid-row: 3/4;
	}
	.link-container:nth-child(3) {
		background-color: #0e1825;
		grid-row: 4/5;
	}

	@media only screen and (max-width: 1000px) {
		grid-template-rows: 50px;
		grid-template-columns: 2fr 2fr 2fr;

		.link-container:nth-child(1) {
			grid-column: 1/2;
			grid-row: 1/2;
		}
		.link-container:nth-child(2) {
			grid-column: 2/3;
			grid-row: 1/2;
		}
		.link-container:nth-child(3) {
			grid-column: 3/4;
			grid-row: 1/2;
		}
	}

	.link-container {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		position: relative;

		&::after {
			content: '';
			width: 3px;
			background: linear-gradient(106.8deg, #0057ff 0.44%, #00ff85 100%);
			height: 100%;
			position: absolute;
			right: 0;
			transition: all 300ms ease-in-out;
			opacity: 0;
		}

		&:hover::after {
			opacity: 0.8;
			transition: all 300ms ease-in-out;
		}
	}

	p {
		transform: rotate(-90deg);
		color: #f0f0f0;
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 300;

		@media only screen and (max-width: 1000px) {
			transform: rotate(0);
			margin-bottom: 0;
		}
	}

	.selected::after {
		content: '';
		width: 3px;
		background: linear-gradient(106.8deg, #0057ff 0.44%, #00ff85 100%);
		height: 100%;
		position: absolute;
		right: 0;
		transition: all 300ms ease-in-out;
		opacity: 0.8;
	}
`;

export default SideNav;
