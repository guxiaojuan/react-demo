import React from 'react';
require('./Custom-item.css');

import CheckBox from '../../common/checkBox/checkBox';
import {changeCustomItemCompletionStatusAction} from "../../../redux/modules/actions";
import {connect} from 'react-redux';

class CustomItem extends React.Component {
	render () {
		return(
			<div>
				<p>11111</p>
				<p>{this.props}</p>
			</div>
		)
		// return (
		// 	<li className="custom-item" style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
		// 		onClick={ () => {this.props.dispatch(changeCustomItemCompletionStatusAction(this.props.id))}}>
		// 		<span>{this.props.text} {''+this.props.completed}</span>
		// 		<CheckBox checked={this.props.completed}/>
		//
		// 		<p>1111</p>
		// 	</li>
		// )
	}
}

CustomItem = connect()(CustomItem);
export default CustomItem;