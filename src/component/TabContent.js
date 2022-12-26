import { useEffect, useState } from "react";

function TabContent({tab}){

  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') },100)

    return ()=>{
      setFade('')
    }
  },[tab])

  return(
  <div className={`start ${fade}`}>
    {[<div>더 자세한 정보 made in ~~</div>, <div>물건이 너무 좋아요</div>, <div>제주도 요금 추가, 비대면 택배가능</div>][tab]}
  </div>
  )
}

export default TabContent;