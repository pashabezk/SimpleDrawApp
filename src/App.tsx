import React from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "antd";
import AppHeader from "./Components/Layout/Header/Header";
import {Content, Footer} from "antd/es/layout/layout";
import AppFooter from "./Components/Layout/Footer/Footer";
import LoaderFullSpace from "./Components/Layout/LoaderFullSpace/LoaderFullSpace";

const LoginPage = React.lazy(() => import ("./Components/LoginPage/LoginPage"));
const RegistrationPage = React.lazy(() => import ("./Components/RegistrationPage/Registration"));
const PageNotFound = React.lazy(() => import ("./Components/PageNotFound/PageNotFound"));
const MainPage = React.lazy(() => import ("./Components/MainPage/MainPage"));

/**
 * Main component
 * @component
 */
const App = () => {
	// HashRouter only for GitHub pages
	// in real project use BrowserRouter
	// <BrowserRouter basename={process.env.PUBLIC_URL}>
	return (
		<HashRouter>
			<Layout className="main-wrapper">
				<AppHeader/>
				<Content>
					<React.Suspense fallback={<LoaderFullSpace/>}>
						<Routes>
							<Route path="/" element={<Navigate to="/canvas"/>}/>
							<Route path="/login" element={<LoginPage/>}/>
							<Route path="/canvas" element={<MainPage/>}/>
							<Route path="/registration" element={<RegistrationPage/>}/>
							<Route path="*" element={<PageNotFound/>}/>
						</Routes>
					</React.Suspense>
				</Content>
				<Footer>
					<div className="center1000px">
						<AppFooter/>
					</div>
				</Footer>
			</Layout>
		</HashRouter>
	);
};

export default App;
