import React from 'react';
const Card = (props) => {
	return (
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
				<img alt = 'robots' src={'https://robohash.org/${props.id}'} width ="100" height="100"/>
				<div>
					<h2>{ props.name }</h2>
					<h2>{ props.username }</h2>
					<h2>{ props.email }</h2>
				</div>
			</div>
		);
}
export default Card;