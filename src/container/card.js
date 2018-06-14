import React from 'react'

class Square extends React.Component{
	render() {
		let squareStyle = {
			height: 150,
			backgroundColor: this.props.color
		};
		return (
			<div style={squareStyle}></div>
		)
	}
};

class Label extends React.Component{
	render() {
		let labelStyle = {
			margin: 0,
			padding: 13,
			fontWeight: "bold",
			fontFamily: "sans-serif"
		};
		return (
			<div style={labelStyle}>{this.props.color}</div>
		)
	}
};


export default class Card extends React.Component {
	constructor () {
		super()
	};
	static defaultProps = {
		color: '#E637'
	};
	render () {
		let cardStyle = {
			height: 200,
			width: 150,
			padding: 0,
			backgroundColor: "#FFF",
			filter: "drop-shadow(0px 0px 5px #666)",
			WebkitFilter: "drop-shadow(0px 0px 5px #666)"   //指定厂商第一个字母也要大写
		};
		return (
			<div style={cardStyle}>
				<Square color={this.props.color} />
				<Label color={this.props.color} />
			</div>
		)
	}
}