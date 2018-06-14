import React from 'react';
require('./checkBox.css');

export default class CheckBox extends React.Component{
	render () {
		let className = '';
		if(this.props.checked) {
			className = 'check-box checked';
		}else {
			className = 'check-box unchecked';
		}

		return(
			<section className={className}>
				<i className="material-icons">done</i>
			</section>
		)
	}
}