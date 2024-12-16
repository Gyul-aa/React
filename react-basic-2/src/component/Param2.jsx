import React from 'react'
import {useSearchParams} from 'react-router-dom'

const Param2 = () => {
    const [params] = useSearchParams();
    const search = [...params];
    console.log(search);
  return (
    <div className='comp'>
        {search.map(s=>(
            <p>{s[0]} : {s[1]}</p>
        ))}
    </div>
  )
}
export default Param2

