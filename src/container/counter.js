import React from 'react'

export default class Counter extends React.Component{
	constructor() {
		super()
		this.state = {
			strikes: 0
		}
	};

	timerTick () {
		this.setState({
			strikes: this.state.strikes + 100
		})
	};

	/*
	*   react Can't call setState (or forceUpdate) on an unmounted component
	*   如果不在componentWillUnmount中销毁定时器，切换页面会报上述警告
	*
	* */

	componentWillUnmount () {
		clearInterval(this.timer)
	}
	componentDidMount () {
		this.timer = setInterval( () => {
			this.timerTick()
		}, 1000)

	};
	render () {
		return (
			<h1>{this.state.strikes}</h1>
		)
	}
}

