import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from "react-router-dom";

import theme from './styles/theme';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ResumePage from "./pages/resume";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout>

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/resume" component={ResumePage} />
				</Switch>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
