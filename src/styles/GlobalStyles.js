import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		@import url("https://fonts.googleapis.com/css?family=Montserrat:300,500,700|PT+Sans&display=swap");
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scrollbar-width: thin;
		scrollbar-color: blue transparent;
		

		&::-webkit-scrollbar {
			width: 5px;
			height: 5px;
		}
		
		&::-webkit-scrollbar-track {
			background-color: blue;
			border-radius: 10px;
			margin-top: 2px;
			margin-bottom: 2px;
		}
		
		&::-webkit-scrollbar-thumb {
			background-color: blue;
			border-radius: 10px;
		}
	}

	body {
		font-family: 'Inter', sans-serif;
		color: blue;

		background: linear-gradient(
			323.48deg,
			#0e1825 63.28%,
			#11243d 83.63%,
			#0e1825 102.95%
		);

		font-family: "Open Sans", sans-serif;
		font-weight: 400;
		line-height: 1.65;
		color: white;
		overflow: hidden;

		p {
			margin-bottom: 1.15rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5 {
			margin: 2.75rem 0 1.05rem;
			font-family: "Montserrat", sans-serif;
			font-weight: 700;
			line-height: 1.15;
		}

		h1 {
			margin-top: 0;
			font-size: 5.653em;
		}

		h2 {
			font-size: 3.998em;
		}

		h3 {
			font-size: 2.827em;
		}

		h4 {
			font-size: 1.999em;
		}

		h5 {
			font-size: 1.414em;
		}

		small,
		.text_small {
			font-size: 0.707em;
		}
	}
`;

export default GlobalStyles;
