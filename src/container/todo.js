import React from 'react';
require('../style/todo.css')

export default class Todo extends React.Component {
	constructor () {
		super();
		this.state = {
			items: []
		}
		this.addItem = this.addItem.bind(this)    //不加这一句无法访问state
	}

	addItem (e) {
		console.log('===============')
		console.log(this.state)
		let itemArr = this.state.items;
		if (this.textInput.value === "") {
			alert("输入不能为空")
			return
		}
		itemArr.push({
			text: this.textInput.value,
			key: Date.now()
		})

		this.setState({
			items: itemArr
		})

		this.textInput.value = ""
		e.preventDefault();
	};

	render () {
		return(
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input placeholder="enter task" ref={(a) => this.textInput = a} />
						<button type="submit">add</button>
					</form>
				</div>

				<TodoItems entries={this.state.items}></TodoItems>
			</div>
		)
	}
}


class TodoItems extends React.Component{
	render () {
		let todoEntries = this.props.entries;

		function createItem (item) {
			return <li key={item.key}>{item.text}</li>
		}
		let listItems = todoEntries.map(createItem)

		return (
			<ul className="theList">
				{listItems}
			</ul>
		)
	}
}