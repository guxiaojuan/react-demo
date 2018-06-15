import React from 'react';
import AppBar from '../common/appBar/appBar'
import CustomItem from './custom-item/CustomItem'
import Circle from '../../container/circle'
import {addCustomItemAction} from "../../redux/modules/actions";
import {connect} from 'react-redux';

class CustomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	};
	componentWillReceiveProps () {
		// console.log("---------will--receive----")
		// console.log(this.props);
	};
	componentWillUpdate () {
		// console.log('-----will update=------');
		// console.log(this.props);
	};
	componentDidUpdate () {
		// console.log('-------did update----------');
		// console.log(this.props)
	};
	showList () {
		let data = [];
		this.props.customList.map(item => {
			data.push(<CustomItem key={item.id} id={item.id} completed={item.completed} text={item.text}/>)
		})
		console.log('======================')
		console.log(data)
		return data;
	};
	render () {
		return (
			<section className="custom">
				<AppBar title="习惯"/>

				<ul>
					{this.showList()}
				</ul>

				<div>
					<input type="text" value={this.state.text} onChange={(e) => {
						this.setState({
							text: e.target.value
						});
					}} />
					<button onClick={() => {
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