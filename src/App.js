import { useEffect, useState } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';
import bg from './img/shoes.webp'
import data from './data'
import Card from './component/Card'
import Detail from './routes/Detail'
import NotFound from './routes/NotFound';
import About from './routes/About'
import Loading from './component/Loading'
import Cart from './routes/Cart'
import { Routes, Route, useNavigate, json } from 'react-router-dom'
import axios from 'axios';

function App() {
  let [shoes,setShoes] = useState(data)
  let [count,setCount] = useState(0)
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JiSu's Shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg' style={{backgroundImage : `url(${bg})`}}></div>
          <div className='container'>
            <div className='row'>
              {/* <Card shoes={shoes[0]} i={1}></Card>
              <Card shoes={shoes[1]} i={2}></Card>
              <Card shoes={shoes[2]} i={3}></Card> */}
              {
                shoes.map((a,i)=>{
                  return(
                  <Card shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </div>
          </div>

          {
            loading===true?<Loading />: null
          }
          <button onClick={()=>{
            setCount(count+1)
            if(count===1){
            setLoading(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((res)=>{
              setLoading(false)
              console.log(res.data)
              let copy = [...shoes, ...res.data];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('fail')
              setLoading(false)
            })}
            else if(count===2){
              setLoading(true)
              axios.get('https://codingapple1.github.io/shop/data3.json')
              .then((res)=>{
                setLoading(false)
                let copy=[...shoes, ...res.data];
                setShoes(copy)
              })
              .catch(()=>{
                setLoading(false)
                console.log('fail')
              })
            }
            else if(count>=3){
              alert('더 이상 상품이 없습니다!')
            }
          }}>상품 더보기</button>
          </>
        }></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<NotFound />} />
    
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버</div>} />
          <Route path='location' element={<div>위치</div>} />
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
