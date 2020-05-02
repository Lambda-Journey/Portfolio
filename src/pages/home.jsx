import React from 'react';
import styled from 'styled-components';

import HomeText from '../components/HomeText';

const HomePage = () => {
	return (
		<Container>
			<SubContainer>
				<HomeText />
				<div className="accent-line"></div>
			</SubContainer>
		</Container>
	);
};

const Container = styled.section`
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	.accent-line {
		width: 30%;
		height: 10px;
		position: absolute;
		bottom: 15%;
		right: 0;
		background: linear-gradient(106.8deg, #0057ff 0.44%, #00ff85 100%);
		grid-row: 4/5;
		grid-column: 4/7;
		align-self: end;
		justify-self: end;
	}
`;

const SubContainer = styled.div`
	width: 70%;
	height: 70%;
`;

export default HomePage;
