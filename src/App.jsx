import './App.css';

import About from './components/About';
import Cart from "./components/Cart";
import Container from './components/Container';
import Header from './components/Header';
import HeaderCarrousel from './components/HeaderCarrousel';
import Login from './components/Login';
import SecondaryHeader from './components/SecondaryHeader';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Content = () => {
	return (
		<div>
			<Header />
			<SecondaryHeader />
			<HeaderCarrousel />
			<Container />
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<Content />} path="/"></Route>
					<Route element={<About />} path="/sobre-nos"></Route>
					<Route element={<Cart />} path="/cart"></Route>
					<Route element={<Login />} path="/login"></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
