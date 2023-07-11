import './projectsgrid.css';
import projectsArr from '../../Data/projectsArr';
import {useContext, useEffect, useState} from 'react';
import MainContext from '../../Context/MainContext';
import {useNavigate} from 'react-router-dom';

function ProjectsGrid() {
	const {setProject, setHome} = useContext(MainContext);
	const nav = useNavigate();

	const [currentHover, setCurrentHover] = useState(null);
	const [cursorPosition, setCursorPosition] = useState({x: null, y: null});

	useEffect(() => {
		function handleCursorPosition(e) {
			setCursorPosition({
				x: e.pageX,
				y: e.pageY,
			});
		}
		document.addEventListener('mousemove', handleCursorPosition);
		return () => document.removeEventListener('mousemove', handleCursorPosition);
	}, []);

	return (
		<div
			className='projects-grid'
			onScroll={() => setCursorPosition({x: null, y: null})}
		>
			{projectsArr.map((project, id) => (
				<div
					className='single-project'
					key={id}
					onClick={() => {
						setHome(false);
						setProject(id);
						nav(`/project/${id}`);
					}}
					onMouseEnter={() => setCurrentHover(id)}
					onMouseOut={() => setCurrentHover(null)}
				>
					<img
						src={project.image}
						alt={`${project.name} image`}
					/>
				</div>
			))}
			{currentHover !== null && (
				<div
					className='cursor'
					style={{top: cursorPosition.y - 300, left: cursorPosition.x - 65}}
				>
					aaa
				</div>
			)}
		</div>
	);
}

export default ProjectsGrid;
