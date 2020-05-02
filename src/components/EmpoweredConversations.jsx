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
				<h1>
					Empowered <br />
					Conversations
				</h1>
				<span className="technologies">HTML | SCSS | JavaScript | GSAP</span>
				<strong class="role">UI Developer / Designer</strong>
				<p class="challenges">
					<strong>Description:</strong>
					<br />
					Empowered Conversations aims to re-envision the future of social support. With
					our text-based tool, the person you want to have a “hard conversation” with will
					be texted before the conversation with a heads-up so they can emotionally
					prepare themselves. From sexual assault disclosure to coming out, transitioning,
					grief and loss, we set the stage for relationships that are radically more
					supportive and meaningful than you ever imagined they could be.
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

	@media only screen and (max-width: 1280px) {
		padding: 0 10%;
	}

	.project-left {
		width: 100%;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		min-width: 450px;

		@media only screen and (max-width: 1280px) {
			font-size: 0.9rem;
			padding: 2rem;
		}

		h1 {
			font-size: 40px;
			letter-spacing: -2px;
			font-weight: 600;

			@media only screen and (max-width: 1280px) {
				font-size: 28px;
				letter-spacing: 0px;
			}
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
			margin-top: 1rem;

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
		width: 100%;

		@media only screen and (max-width: 1280px) {
			width: fit-content;
		}

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
