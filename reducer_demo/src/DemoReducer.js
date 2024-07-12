function DemoReducer(state, action ) {
    switch(action.type){

        case 'ADD':
            return [{id:Math.random().toString(), name : action.payload.name, age:action.payload.age}, ...state]

        default:
            return state
    }

}

export default DemoReducer;