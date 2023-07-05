import {useContext} from 'react';
import './navhead.css';
import MainContext from '../../Context/MainContext';

function NavHead() {
	const {project, offset} = useContext(MainContext);

	return (
		<div className='navhead'>
			<div className='name'>
				<h1 style={project !== null ? {marginBottom: 0} : {marginBottom: '25px'}}>Antón Polujanov</h1>
				{project === null ? (
					<h2 style={offset > 0 ? {marginBottom: 0} : {}}>
						Freelance creative developer <span>&amp;&amp;</span>
						<br /> graphic designer
					</h2>
				) : (
					''
				)}
			</div>
			<nav>
				<ul>
					<li>Work</li>
					<li>Info</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavHead;
