import React from 'react';
require('./Custom-item.css');

import CheckBox from '../../common/checkBox/checkBox';
import {changeCustomItemCompletionStatusAction} from "../../../redux/modules/actions";
import {connect} from 'react-redux';

class CustomItem extends React.Component {
	render () {
		return (
			<li className="custom-item" style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
				onClick={ () => {this.props.dispatch(changeCustomItemCompletionStatusAction(this.props.id))}}>
				<span>{this.props.text}</span>
				<span>{''+this.props.completed}</span>
				<CheckBox checked={this.props.completed}/>
			</li>
		)
	}
}

CustomItem = connect()(CustomItem);
export default CustomItem;