import {useContext, useEffect, useState} from 'react';
import './navhead.css';
import MainContext from '../../Context/MainContext';
import {Link, useNavigate} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

function NavHead() {
	const {project, setProject, home, setHome} = useContext(MainContext);

	const [pos, setPos] = useState(0);
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const desktopWidthThreshold = 1024;

	useEffect(() => {
		document.addEventListener('wheel', position);
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
			document.removeEventListener('wheel', position);
		};
	}, []);

	useEffect(() => {
		if (windowWidth >= desktopWidthThreshold) {
			setBurgerOpen(false);
		}
	}, [windowWidth, desktopWidthThreshold]);

	const handleWindowSizeChange = () => {
		setWindowWidth(window.innerWidth);
	};

	const position = () => {
		setPos(window.scrollY);
	};

	const nav = useNavigate();

	const navToPage = () => {
		setProject(null);
		setHome(false);
		setBurgerOpen(false);
	};

	const navToHome = () => {
		setProject(null);
		setHome(true);
		setPos(0);
		nav('/');
		setBurgerOpen(false);
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

			<nav className={burgerOpen ? 'mobile-nav' : 'desktop-nav'}>
				<ul>
					<li onClick={navToHome}>
						<Link to='/'>Work</Link>
					</li>
					{/* <li onClick={navToPage}>
						<Link to='/info'>Info</Link>
					</li> */}
					<li onClick={navToPage}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
			<div className='burger'>
				<GiHamburgerMenu onClick={() => setBurgerOpen(!burgerOpen)} />
			</div>
		</div>
	);
}

export default NavHead;
