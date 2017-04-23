//Reducer
function creducer(currentState , action){
  var nextState = {
    count : currentState.count
  }
  switch (action.type) {
    case 'ADD':
      nextState.count = currentState.count +1
      return nextState
      break;
    case 'DEL':
      nextState.count = currentState.count -1
      return nextState
      break;
    case 'RES':
      nextState.count = 0
      return nextState
      break;
    default:
      console.log("default")
      return currentState
  }
}
//Initial State
var state = {
  count : 0
}

var store = Redux.createStore(creducer,state)
var counter = document.getElementById('counter')

function render(){
  console.log('rendering')
  console.log(store.getState())
  state = store.getState()
  counter.innerHTML = state.count.toString()
}


store.subscribe(render)

//Actions
document.getElementById('add').addEventListener('click' , ()=> {
  store.dispatch({
    type : 'ADD'
  })
})
document.getElementById('minus').addEventListener('click' , () => {
  store.dispatch({
    type : 'DEL'
  })
})
document.getElementById('reset').addEventListener('click' , () => {
  store.dispatch({
    type : 'RES'
  })
})
