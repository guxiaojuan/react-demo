import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Card from './card'
import Counter from './counter'
import Circle from './circle'
import Todo from './todo'
import Refs from './refs'
import Swiper from './swiper'

const CustomLinkExample = () => (
	<Router>
		<div>
			<OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
			<OldSchoolMenuLink to="/card" label="Card" />
			<OldSchoolMenuLink to="/counter" label="Counter" />
			<OldSchoolMenuLink to="/circle" label="Circle" />
			<OldSchoolMenuLink to="/todo" label="Todo" />
			<OldSchoolMenuLink to="/refs" label="Refs" />
			<OldSchoolMenuLink to="/swiper" label="Swiper" />
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/card" component={Card} />
			<Route path="/counter" component={Counter} />
			<Route path="/circle" component={Circle} />
			<Route path="/todo" component={Todo} />
			<Route path="/refs" component={Refs} />
			<Route path="/swiper" component={Swiper} />
		</div>
	</Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route
		path={to}
		exact={activeOnlyWhenExact}
		children={({ match }) => (
			<div className={match ? "active" : ""}>
				{match ? "> " : ""}
				<Link to={to}>{label}</Link>
			</div>
		)}
	/>
);

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);


export default CustomLinkExample;