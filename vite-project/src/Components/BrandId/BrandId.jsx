import './brandid.css';
import projectsArr from '../../Data/projectsArr';
import MainContext from '../../Context/MainContext';
import {useContext, useState} from 'react';

function BrandId() {
	const {project} = useContext(MainContext);
	const currentBrand = projectsArr[project];
	const [feature, setFeature] = useState();
	const activeFeature = currentBrand.features[feature];

	return (
		<div className='brand-container'>
			{!activeFeature && (
				<div className='brand-img'>
					<img
						src={currentBrand.image}
						alt=''
					/>
				</div>
			)}
			{activeFeature && (
				<div className='active-brand-img'>
					<img
						src={activeFeature.image}
						alt=''
					/>
				</div>
			)}
			<div className='brand-desc'>
				<h2 className='name'>{currentBrand.name}</h2>
				<p className='desc'>{currentBrand.desc}</p>
				<ul>
					{currentBrand.features.map((feature, id) => (
						<li
							key={id}
							onClick={() => setFeature(id)}
							className={`${feature === activeFeature && 'active'}`}
						>
							{feature.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default BrandId;
