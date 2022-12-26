import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state){
      return 'park'
    }
  }
})

export let {changeName} = user.actions

let cart = createSlice({
  name: 'cart',
  initialState:[
    {id : 0, name : 'White and Black' , count : 2},
    {id : 2, name : 'Grey Yordan' , count : 1},
  ],
  reducers: {
    increase(state, action){
      let find= state.findIndex((a)=>{return a.id === action.payload })
      state[find].count++
    },
    decrease(state, action){
      let find= state.findIndex((a)=>{return a.id === action.payload })
      state[find].count--
    },
    addItem(state, action){
      let find = state.find((a)=>{return a.id === action.payload.id})
      if(find === undefined){
        state.push(action.payload)
      }else{
        find.count++
      }
    },
    deleteItem(state,action){
      let find= state.findIndex((a)=>{return a.id === action.payload })
      state.splice(find, 1)
    }
  }
})

export let {increase, decrease, addItem , deleteItem} = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    cart : cart.reducer
  }
})