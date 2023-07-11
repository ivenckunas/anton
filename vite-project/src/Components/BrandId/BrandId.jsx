import './brandid.css';
function BrandId() {
	return (
		<div className='brand-container'>
			<div className='brand-img'>
				<img
					src='https://images.pexels.com/photos/10874552/pexels-photo-10874552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
				/>
			</div>
			<div className='brand-desc'>
				<h2 className='name'>Hirundo farm</h2>
				<p className='desc'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
				<ul>
					<li className='active'>Logo</li>
					<li>Colors</li>
					<li>Typography</li>
					<li>Iconography</li>
					<li>Imagery</li>
					<li>Personality</li>
					<li>Voice</li>
					<li>Web</li>
				</ul>
			</div>
		</div>
	);
}

export default BrandId;
