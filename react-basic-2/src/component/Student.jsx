import React from 'react'

const Student = (props) => {
    const { name, age, addr, profile} = props.stu;
    const style1 = {width: 200 ,height : 200}
  return (
    <div className='student'>
        <img src={`/image/${profile}`} style={style1} alt="이미지" />
        <p>이름 : {name}</p>
        <p>나이 : {age}</p>
        <p>주소 : {addr}</p>
    </div>
  )
}
export default Student