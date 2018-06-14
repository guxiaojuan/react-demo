import React from 'react';
import AppBar from '../common/appBar/appBar'
import CustomItem from './custom-item/CustomItem'
import {addCustomItemAction} from "../../redux/modules/actions";
import {connect} from 'react-redux';

class CustomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}
	render () {
		return (
			<section className="custom">
				<AppBar title="习惯"/>

				<ul>
					{this.props.customList && this.props.customList.map(item => {
						console.log('==========================');
						console.log(item.id);
						console.log(item.text);
						<CustomItem key={item.id} id={item.id} completed={item.completed} text={item.text}/>
					})}
				</ul>

				<div>
					<input type="text" value={this.state.text} onChange={(e) => {
						this.setState({
							text: e.target.value
						});
					}} />
					<button onClick={() => {
						console.log("add click");
						console.log(this.props);

						this.props.dispatch(addCustomItemAction(this.state.text));
						this.setState({
							text: ''
						})
					}}>添加</button>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log("----------store中的数据-------")
	// console.log(state)
	return {
		customList: state.customListReducer
	}
}

CustomList = connect(mapStateToProps)(CustomList)
export default CustomList