import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import About from '../container/about';
import Custom from './custom/CustomList';


export default class App extends React.Component{
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={About}/>
					<Route path="/custom" component={Custom}/>
				</div>
			</Router>
		)
	}
}