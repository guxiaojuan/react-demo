export const changeCustomItemCompletionStatusAction = (customItemId) => {
	return {
		type: 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION',
		id: customItemId
	};
};


let nextId = 0;
export const addCustomItemAction = (customItemText) => {
	console.log('---------action--------')
	console.log(customItemText)
	return {
		type: 'ADD_CUSTOM_ITEM_ACTION',
		text: customItemText,
		id: nextId++
	};
};