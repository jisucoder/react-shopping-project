import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import TabContent from '.././component/TabContent'
import { addItem } from "./../store";
import { useDispatch } from "react-redux";

let Btn =styled.button`
  background:${props => props.bg};
  color: black;
  padding: 10px
`

function Detail(props){

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setalert(false)
    },3000)

    setFade('end')

    return ()=>{
      clearTimeout(timer)
      setFade('')
    }
  },[])

  let {id} = useParams();
  let find = props.shoes.find(x=>x.id === props.shoes[id].id)
  let [alert, setalert] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade, setFade]= useState('')
  let dispatch = useDispatch()

  return(
  <div className={`container start ${fade}`}>
    {
      alert === true
      ? <div className="alert alert-warning">
      3초안에 사면 더더 할인!
    </div> : null
    }
    
    <Btn bg='yellow'>할인쿠폰 받으러 가기</Btn>
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${(find.id)+1}.jpg`} width="100%" alt='img' />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{find.title}</h4>
      <p>{find.content}</p>
      <p>{find.price}원</p>
      <button className="btn btn-danger" onClick={()=>{
        dispatch(addItem({id: find.id , name: `${find.title}`, count: 1}))
      }}>주문하기</button> 
    </div>
  </div>

  <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(0)}} eventKey="link-0">더 자세히보기</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(1)}} eventKey="link-1">리뷰</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(2)}} eventKey="link-2">배송시 주의사항</Nav.Link>
      </Nav.Item>
    </Nav>

    <TabContent tab={tab}/>
</div> 
  )
}

export default Detail;