const Thunk=store=>next=>action=>{
    if(typeof action==='function'){
        return action(store.dispatch)
    }else{
        return next(action)
    }
}
export default Thunk