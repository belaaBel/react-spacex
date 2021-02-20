import React from 'react';
import ReactWrapper from 'react-rellax-wrapper';

import './features.css';

const img = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    other: 'starship',
}

const Features = ({rocketFeatures}) => {
    console.log(rocketFeatures);
    return (
    <section className="features">  
		<h2 className="features-title">
			{rocketFeatures?.name}<br/>Overview
		</h2>
		<div className="overview">
			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{rocketFeatures?.height.meters} m / {rocketFeatures?.height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{rocketFeatures?.diameter.meters} m / {rocketFeatures?.diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{rocketFeatures?.mass.kg} kg / {rocketFeatures?.mass.lb} lb</td>
					</tr>
					
                        {rocketFeatures?.payload_weights.map((item) => ( 
                            <tr key={item.id}>
                                <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>                
                                <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                            </tr>
                        ))}						
					
				</thead>
			</table>
            <ReactWrapper speed={14}>
                <img
                    src={`img/${img.hasOwnProperty(rocketFeatures?.name) ? img[rocketFeatures?.name] : img.other}.png`}
                    alt="rocket"
                    className="rocket"
                    data-rellax-speed="14"
                />
            </ReactWrapper>			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{rocketFeatures?.description}
				</p>
			</article>
		</div>
	</section>
)};

export default Features;