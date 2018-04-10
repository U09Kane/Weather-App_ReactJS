import React from 'react';
import './Weather.css';
/*
There's probably a better way to do this. This looks really
nasty right now.
*/


const Weather = props => (	
	<div className="weather__info">
		{props.city && props.country ?
			<div>
				<p className="weather__key">Location:
					<span className="weather__value"> { props.city }, { props.country }</span>
				</p>
				<p className="weather__key">Temperature:
					<span className="weather__value"> { props.temperature }</span>
				</p>
				<p className="weather__key">Humidity:
					<span className="weather__value"> { props.humidity }</span>
				</p>
				<p className="weather__key">Conditions:
					<span className="weather__value"> { props.description }</span>
				</p>
			</div> : null
		} 

		{props.error ?
			<p className="weather__error">{ props.error }</p>
			: null
		}
	</div>
);
 
export default Weather;