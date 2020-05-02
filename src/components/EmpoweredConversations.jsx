import React from 'react';
import styled from 'styled-components';

import { ReactComponent as EC } from '../assets/icons/ec.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LiveIcon } from '../assets/icons/live.svg';

const EmpoweredConversations = () => {
	return (
		<Container className="project">
			<div className="project-left">
				<EC />
				<h3>
					Empowered <br />
					Conversations
				</h3>
				<span className="technologies">HTML | SCSS | JavaScript | GSAP</span>
				<strong class="role">UI Developer / Designer</strong>
				<p class="challenges">
					<strong>Challenges:</strong>
					<br />
					Empowered Conversation presented unique challenges. It needed to feel friendly,
					inviting, modern and interactive. This was achieved by selecting a color palatte
					with warm and opaque tones, a round typeface like Questrial and the
					incorporation of GSAP to bring smooth transitions to the page.
				</p>
				<div class="icon-container">
					<a
						href="https://github.com/BW-Empowered-Conversations-20191217/empowered-convos-marketing-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon />
					</a>

					<a
						href="https://empowered-conversations.netlify.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LiveIcon />
					</a>
				</div>
			</div>
			<div class="project-right">
				<img src="ec/EmpoweredConversations.png" alt="" class="ec-desktop" />
				<img src="ec/ec-mobile.png" alt="" class="ec-mobile" />
			</div>
		</Container>
	);
};

const Container = styled.section`
	height: 100%;
	display: flex;
	color: white;
	justify-content: space-around;
	align-items: center;
	max-width: 1440px;
	margin: 0 auto;

	.project-left {
		width: 20%;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		min-width: 550px;

		h1 {
			font-size: 40px;
			letter-spacing: -2px;
			font-weight: 600;
		}

		.technologies,
		.role {
			display: block;
		}

		.technologies {
			color: #a5a5a5;
		}

		.challenges {
			color: #a5a5a5;

			strong {
				color: white;
			}
		}

		.icon-container {
			display: flex;
			justify-content: space-between;
			width: 150px;
			margin-top: 1rem;
		}
	}

	.project-right {
		position: relative;

		.ec-mobile {
			position: absolute;
			left: 21%;
			bottom: -12%;
			box-shadow: 6px 8px 16px rgba(0, 0, 0, 0.3);
			border-radius: 27px;
		}
	}
`;

export default EmpoweredConversations;
