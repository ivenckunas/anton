import './reset.css';
import './Fonts/fontface.css';
import './App.css';
import NavHead from './Components/NavHead/NavHead';
import ProjectsGrid from './Components/ProjectsGrid/ProjectsGrid';
import BrandId from './Components/BrandId/BrandId';
import MainContext from './Context/MainContext';
import {useEffect, useState} from 'react';

function App() {
	const [project, setProject] = useState(null);
	const [offset, setOffset] = useState(0);
	const states = {project, setProject, offset, setOffset};

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		// clean up code
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, {passive: true});
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<MainContext.Provider value={states}>
			<NavHead />
			{project !== null && <BrandId />}
			{project === null && <ProjectsGrid />}
		</MainContext.Provider>
	);
}

export default App;
