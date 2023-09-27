import './App.css';

import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import Container from './components/Container';
import HeaderCarrousel from './components/HeaderCarrousel';
import About from './components/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
					<Route element={
						<Content />
					} path="/"></Route>
					<Route element={
						<About />
					} path="/sobre-nos"></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
