import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage"
import AboutUs from './components/AboutUs';
import LoginPage from "./components/LoginPage"
import ChallengesPage from "./components/ChallengesPage"
import {AuthProvider} from "./scripts/auth"
import {Toaster} from 'react-hot-toast';
import AdminPage from './components/AdminPage';

function App() {
	return (
		<AuthProvider>
			<Toaster/>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<HomePage/>}></Route>
					<Route path="about" element={<AboutUs/>}></Route>
					<Route path="login" element={<LoginPage/>}></Route>
					<Route path="app" element={<ChallengesPage/>}></Route>
					<Route path="admin" element={<AdminPage/>}></Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
