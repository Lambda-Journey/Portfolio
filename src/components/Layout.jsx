import React from 'react';
import styled from 'styled-components';

import TopNav from './TopNav';
import SideNav from './SideNav';

const Layout = ({ children }) => {
	return (
		<Container>
			<TopNav />
			<SideNav />
			{children}
		</Container>
	);
};

const Container = styled.div`
    width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 50px auto;
    grid-template-rows: 100px auto;
    
    grid-template-areas: 
     'sidenav topnav'
     'sidenav ......'
`;

export default Layout;
