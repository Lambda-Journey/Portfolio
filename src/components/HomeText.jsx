import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const HomeText = () => {
	return (
		<StyledHomeText className="home-page_text">
			<h1>Sebastian</h1>
			<h1>Garces</h1>
			<h4>
				Front End Developer <span>|</span> UI / UX Designer
			</h4>
			<p>"bridging the gap between developer and designer"</p>
			<button>Hire Me</button>
		</StyledHomeText>
	);
};

const StyledHomeText = styled.div`
	h1:first-child {
		margin: 0;
	}

	h1 {
		width: fit-content;
		font-family: Montserrat;
		font-style: normal;
		font-weight: bold;
		font-size: 80px;
		line-height: 98px;
		letter-spacing: 10px;
		text-transform: uppercase;
		color: transparent;
		background: linear-gradient(107.9deg, #0057ff 0.44%, #00ff85 100%);
		-webkit-text-fill-color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
	}
	h4 {
		font-size: 26px;
		line-height: 32px;
		font-size: 32px;
		letter-spacing: -1px;
		font-weight: 300;
		margin-bottom: 0.2rem;
		margin-top: 3.5rem;

		span {
			margin: 0 1rem;
		}
	}

	p {
		font-family: PT Sans;
		font-style: italic;
		font-weight: normal;
		font-size: 20px;
		line-height: 26px;
		margin: 0;
		opacity: 0.4;
	}

	button {
		width: 151px;
		height: 50px;
		border: none;
		background: linear-gradient(106.8deg, #0057ff 0.44%, #00ff85 100%);
		color: #fff;
		border-radius: 100px;
		font-family: Montserrat;
		font-weight: 500;
		font-size: 18px;
		margin: 5vh 0;
		cursor: pointer;
		transition: background 150ms ease-in-out;

		&:hover {
			background: linear-gradient(106.8deg, #0057ff 0.44%, #00ff85 100%);
			transition: background 150ms ease-in-out;
		}
	}

	@media only screen and (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			text-align: center;
			font-size: 9vw;
			line-height: 10vw;
		}

		h4 {
			text-align: center;
			font-size: 5vw;
			line-height: 6vw;
		}

		p {
			margin-top: 1rem;
			text-align: center;
			font-size: 1rem;
			line-height: 1.2rem;
		}
	}
`;

export default HomeText;
