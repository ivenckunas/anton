import './poster.css';

function Poster() {
	return (
		<div className='poster-container'>
			<img
				src='https://images.pexels.com/photos/7434596/pexels-photo-7434596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				alt='poster'
			/>
			<div className='poster-desc'>
				<h2>Poster Name</h2>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
			</div>
		</div>
	);
}

export default Poster;
