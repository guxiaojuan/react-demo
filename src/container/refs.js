import React from 'react';
require("../style/refs.css");

export default class Refs extends React.Component{
	constructor () {
		super();
		this.state = {
			color: "",
			bgColor: ""
		}
		this.colorValue = this.colorValue.bind(this)
		this.setNewColor = this.setNewColor.bind(this)
	}

	colorValue (e) {
		// console.log(e)
		this.setState({
			color: e.target.value
		})
	}
	setNewColor (e) {
		console.log(e)
		console.log('============================')
		if(this.inputValue.value === '') {
			alert("未输入颜色");
			return;
		}
		this.setState({
			bgColor: this.state.color
		})
		console.log(this.inputValue.value)

		this.inputValue.value = "";
		this.inputValue.focus();
		e.preventDefault();
	}
	render () {
		const squareStyle = {
			backgroundColor: this.state.bgColor
		}

		return(
			<div className="colorArea">
				<div style={squareStyle} className="colorSquare"></div>
				<form onSubmit={this.setNewColor}>
					<input placeholder="Enter a color value" onChange={this.colorValue} ref={(el) =>this.inputValue = el} />
					<button type="submit" onSubmit={this.setNewColor}>go</button>
				</form>
			</div>
		)
	}
}