export default function customItemReducer (state, action) {
	switch (action.type) {
		case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
			// 因为上一层customReducer会传所有的customItem进来，所以要判断action里的id和传入的state的id是不是相同
			if (action.id !== state.id) {
				return state;   // 如果不相同，直接返回原state
			}
			return {
				...state,
				completed: !state.completed
			};
		// 别忘了返回一个默认的state
		default:
			return state;
	}
}