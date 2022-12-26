import { Link } from "react-router-dom";

function Card(props){
  return(
    <div className='col-md-4'>
            <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width='80%' alt='p1'/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            <Link to={`/detail/${props.i}`} style={{textDecoration: 'none', backgroundColor: 'green', color: 'white', borderRadius: '10px'}}>상세</Link>
          </div>
  )
}

export default Card;