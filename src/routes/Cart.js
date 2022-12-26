import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase, decrease, deleteItem } from "../store";

function Cart(){

  let state = useSelector((state)=>state)
  let dispatch = useDispatch()

  return(
    <>
    <div>{state.user}의 장바구니</div>
    <button onClick={()=>{
      dispatch(changeName())
    }}>유저네임 바꾸기</button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a,i)=>
          <tr key={i}>
            <td>{state.cart[i].id}</td>
            <td>{state.cart[i].name}</td>
            <td>{state.cart[i].count}</td>
            <td>
              <button onClick={()=>{
                dispatch(increase(state.cart[i].id))
              }}>+</button>
              <button onClick={()=>{
                dispatch(decrease(state.cart[i].id))
              }}>-</button>
            </td>
            <td>
              <button onClick={()=>{
                dispatch(deleteItem(state.cart[i].id))
              }}>삭제</button>
            </td>
          </tr>)
        }
        
      </tbody>
    </Table>
    </>
  )
}

export default Cart;