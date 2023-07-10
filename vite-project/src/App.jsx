import './reset.css';
import './Fonts/fontface.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavHead from './Components/NavHead/NavHead';
import ProjectsGrid from './Components/ProjectsGrid/ProjectsGrid';
import BrandId from './Components/BrandId/BrandId';
import MainContext from './Context/MainContext';
import {useEffect, useState} from 'react';
import Contact from './Components/Contact/Contact';
import Info from './Components/Info/Info';

function App() {
	const [project, setProject] = useState(null);
	const [home, setHome] = useState(true);
	const [offset, setOffset] = useState(0);
	const states = {project, setProject, offset, setOffset, home, setHome};

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, {passive: true});
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<MainContext.Provider value={states}>
			<BrowserRouter>
				<NavHead />
				<Routes>
					<Route
						path='/info'
						element={<Info />}
					/>
					<Route
						path='/'
						element={<ProjectsGrid />}
					/>
					<Route
						path={`/project/${project}`}
						element={<BrandId />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
				</Routes>
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
