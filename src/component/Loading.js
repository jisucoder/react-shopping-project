import { Spinner } from "react-bootstrap"

function Loading(){
  return(
    <Spinner animation="border" role="status">
    <span className="visually-hidden">로딩중... 잠시만 기다려주세요</span>
    </Spinner>
  )
}

export default Loading;