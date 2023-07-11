import './reset.css';
import './Fonts/fontface.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavHead from './Components/NavHead/NavHead';
import ProjectsGrid from './Components/ProjectsGrid/ProjectsGrid';
import BrandId from './Components/BrandId/BrandId';
import MainContext from './Context/MainContext';
import {useState} from 'react';
import Contact from './Components/Contact/Contact';
import Info from './Components/Info/Info';

function App() {
	const [project, setProject] = useState(null);
	const [home, setHome] = useState(true);

	const states = {project, setProject, home, setHome};

	return (
		<MainContext.Provider value={states}>
			<Router>
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
			</Router>
		</MainContext.Provider>
	);
}

export default App;
