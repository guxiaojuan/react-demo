import React from "react";

export default class Circle extends React.Component {
	showCircle () {
		let colors = ["#393E41", "#E94F37", "#1C89BF",  "#FF8552", "#A1D363", "#A40E4C"];
		let renderData = []

		for (let i=0; i<colors.length; i++) {
			renderData.push(<TemplateCircle bgColor={colors[i]} key={i}></TemplateCircle>)
		}
		return renderData
	}

	render () {
		return(
			<div>
				{this.showCircle()}
			</div>
		)
	}
}

class TemplateCircle extends React.Component {
	render () {
		let circleStyle = {
			padding: 10,
			margin: 20,
			display: "inline-block",
			backgroundColor: this.props.bgColor,
			borderRadius: "50%",
			width: 100,
			height: 100
		}

		return (
			<div style={circleStyle}></div>
		)
	}
}