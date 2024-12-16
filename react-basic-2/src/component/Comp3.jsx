import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { students } from '../data/data'

const Comp3 = () => {
    const[id,setId] = useState();
    const[page,setPage] = useState();
  return (
    <div className='comp'>
        {/* a. path varialbe 형태로 고정값 보냄 */}
        <Link to={{pathname : "/param/10"}}>Path Variable</Link>
        <p>---------------------------------------------------</p>
        {/* b. path variable 형태로 객체 넘기기 */}
        {students.map(s => (<Link to={{pathname:`/param/${s.name}`}}>{s.name}</Link>))}
        <p>---------------------------------------------------</p>
        {/* c. 쿼리 스트링 형태 */}
        <Link to="/param?id=6&page=2">param 전송</Link>
        <Link to={{
            pathname : "/param",
            search : "?id=6&page=20&name=ezen",
        }}>param 전송(QueryString)</Link>
    </div>
  )
}

export default Comp3