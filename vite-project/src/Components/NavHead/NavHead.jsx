import {useContext, useEffect, useState} from 'react';
import './navhead.css';
import MainContext from '../../Context/MainContext';
import {Link, useNavigate} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

function NavHead() {
	const {project, setProject, home, setHome} = useContext(MainContext);

	const [pos, setPos] = useState(0);

	const position = () => {
		setPos(window.scrollY);
	};

	useEffect(() => {
		document.addEventListener('wheel', position);
		return () => {
			document.removeEventListener('wheel', position);
		};
	}, []);

	const nav = useNavigate();

	const navToPage = () => {
		setProject(null);
		setHome(false);
	};

	const navToHome = () => {
		setProject(null);
		setHome(true);
		setPos(0);
		nav('/');
	};

	return (
		<div className={`${pos > 0 || !home ? 'scrolled-navhead' : 'navhead'}`}>
			<div
				className='name'
				onClick={navToHome}
			>
				<h1>Antón Polujanov</h1>
				{project === null && home ? (
					<h2 className={`${pos > 0 ? 'fade-out-top' : 'fade-in-top'}`}>
						Freelance creative developer <span>&amp;&amp;</span>
						<br /> graphic designer
					</h2>
				) : (
					''
				)}
			</div>

			<nav>
				<ul>
					<li onClick={navToHome}>
						<Link to='/'>Work</Link>
					</li>
					<li onClick={navToPage}>
						<Link to='/info'>Info</Link>
					</li>
					<li onClick={navToPage}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
			<div className='burger'>
				<GiHamburgerMenu />
			</div>
		</div>
	);
}

export default NavHead;
