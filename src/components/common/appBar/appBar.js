import React from 'react'
require('./appBar.css')

export default class AppBar extends React.Component {
	render () {
		return (
			<section className="app-bar">
				<div className="title">{this.props.title}</div>
			</section>
		)
	}
}