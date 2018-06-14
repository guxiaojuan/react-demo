import React from 'react';
import ReactDom from 'react-dom';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import indexReducer from './redux/index'

// import About from './container/about'
// import Custom from './components/custom/CustomList'
import App from './components/App'

const store = createStore(indexReducer)

ReactDom.render(
	<Provider store={store}>
		<App/>
		{/*<Router>*/}
			{/*<div>*/}
				{/*<Route exact path="/" component={About}/>*/}
				{/*<Route path="/custom" component={Custom}/>*/}
			{/*</div>*/}
		{/*</Router>*/}
	</Provider>,
	document.getElementById('app')
)