import React from 'react'
import { student , students } from '../data/data'
import Student from './Student'

const Comp1 = () => {
  return (
    <div className='comp'>
        {/* a. 객체값 가져오기 */}
        이름 :  {student.name} <br></br>
        나이 :  {student.age} <br></br>
        주소 :  {student.addr}
        <p>------------------------------------------------</p>
        {/* b. 하위 컴포넌트 Student로 전송 */}
        <Student stu = { student }></Student>
        <p>------------------------------------------------</p>
        {/* c. 하위 컴포넌트 Student로 객체 배열 데이터 전송 */}
        {students.map(s => (<Student stu = {s} /> ))}
    </div>
  )
}
export default Comp1