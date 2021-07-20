const defaultState = {
    inputValue : '',
    list:[
        '啥也没有',
    ],
    completeList:[]
}
 //eslint-disable-next-line
export default (state = defaultState,action) => {
    if(action.type === 'complete') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.completeList.push(newState.list[action.index])
        newState.list.splice(action.index, 1)
        return newState
    }else if(action.type === 'await') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.completeList[action.index])
        newState.completeList.splice(action.index, 1)
        return newState
    } else if(action.type === 'deleteAwait') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }else if(action.type === 'deleteComplete') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.completeList.splice(action.index, 1)
        return newState
    }else if(action.type === 'add') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }else if(action.type === 'change') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}
