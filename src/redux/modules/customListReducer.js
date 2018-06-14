import customItemReducer from './customItemReducer'

export default function customListReducer (state = [], action) {
	switch(action.type) {
		case 'ADD_CUSTOM_ITEM_ACTION':
			// 返回一个新对象
			let newCustomItem = {
				id: action.id,  // id
				text: action.text,  // 文本内容
				completed: false    // 是否完成
			};
			// 复制一份state的副本，永远不要修改state，而是返回state的一份副本
			let newState = [...state];
			// console.log('newState', newState);
			newState.push(newCustomItem);   // 把新的习惯项添加到副本中
			return newState;    // 返回
		/**
		 * 修改习惯项完成状态Action
		 */
		case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
			// 遍历state(这里得到的state是customList，是一个数组)，返回一个新数组
			return state.map((customItem) => {
				// 对每一项再调用customItemReducer
				return customItemReducer(customItem, action);
			});
		default:
			return state;
	}
}