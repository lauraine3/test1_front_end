// ACTION
const BUY_B = 'BUY_B';
const BUY_T = 'BUY_T';
const BUY_D = 'BUY_D';

function buyb(){
  return{
     type: BUY_B 
  }
}
function buyT() {
    return{
        type: BUY_T
    }
}
function buyd() {
    return{
        type: BUY_D
    }
}
// REDUCER

const inititialStatetalon = {
    b:5,
    T:9
}
const inititialStatetenis = {
    d:15
}

const talonreducer=(state =inititialStatetalon, action) => {
    switch (action.type) {
        case BUY_B:
            return{
                ...state,
                b:state.b - 1

            }
            break;
        case BUY_T:
        return{
                ...state,
                T:state.T - 1

        }
        default: return state
    }
}

const tenisreducer=(state =inititialStatetenis, action) => {
    switch (action.type) {
        case BUY_D:
            return{
                ...state,
                d:state.d - 1

            }
        
        default: return state
    }
}
const rootReducer = Redux.combineReducers({
  talon: talonreducer,
  tenis: tenisreducer
})
//creer le store
const store = Redux.createStore(rootReducer);

//recuperer les donnee du store
const availableb = document.getElementById('count');
const availableT = document.getElementById('count-T');
const availabled = document.getElementById('count-d');
availableb.innerHTML = store.getState().talon.b;
availableT.innerHTML = store.getState().talon.T;
availabled.innerHTML = store.getState().tenis.d;

document.getElementById('buy-b').addEventListener('click', function(){
    store.dispatch(buyb())

})

document.getElementById('buy-T').addEventListener('click', function(){
    store.dispatch(buyT())

})
document.getElementById('buy-d').addEventListener('click', function(){
    store.dispatch(buyd())

})
store.subscribe(() => {
    availableb.innerHTML = store.getState().talon.b;
    availableT.innerHTML = store.getState().talon.T;
    availabled.innerHTML = store.getState().tenis.d;
})
