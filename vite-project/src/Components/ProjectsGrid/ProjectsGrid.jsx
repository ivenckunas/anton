import './projectsgrid.css';
import projectsArr from '../../Data/projectsArr';
import {useContext} from 'react';
import MainContext from '../../Context/MainContext';

function ProjectsGrid() {
	const {setProject} = useContext(MainContext);

	return (
		<div className='projects-grid'>
			{projectsArr.map((project, id) => (
				<div
					key={id}
					onClick={() => setProject(id)}
				>
					<img
						src={project.image}
						alt={`${project.name} image`}
					/>
				</div>
			))}
		</div>
	);
}

export default ProjectsGrid;
