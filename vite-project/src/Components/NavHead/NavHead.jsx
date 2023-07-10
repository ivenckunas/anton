import {useContext} from 'react';
import './navhead.css';
import MainContext from '../../Context/MainContext';
import {Link} from 'react-router-dom';

function NavHead() {
	const {project, setProject, offset, home, setHome} = useContext(MainContext);

	const reset = () => {
		setProject(null);
		setHome(false);
	};

	return (
		<div className='navhead'>
			<div className='name'>
				<h1 style={home ? {marginBottom: 0} : {marginBottom: '25px'}}>Antón Polujanov</h1>
				{project === null && home && offset === 0 ? (
					<h2>
						Freelance creative developer <span>&amp;&amp;</span>
						<br /> graphic designer
					</h2>
				) : (
					''
				)}
			</div>
			<nav>
				<ul>
					<li
						onClick={() => {
							setProject(null);
							setHome(true);
						}}
					>
						<Link to='/'>Work</Link>
					</li>
					<li onClick={reset}>
						<Link to='/info'>Info</Link>
					</li>
					<li onClick={reset}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavHead;
