/* props로 보내주는 데이터를 받는 하위 컴포넌트 */

/* a. 함수형 컴포넌트 */
// import { Fragment } from "react";
// import React from "react";
// import Style from "./css/style.css"
// function PropsComponent({name,nickname}){
//     return(
//         <div>
//             <h1>부모 컴포넌트에서 전달받은 이름 : {name}</h1>
//              <p><b>부모 컴포넌트에서 전달받은 별명 : {nickname}</b></p>
//              <p className="font color_cyan">{name} : {nickname} </p>
//         </div>
//     )
// }
// export default PropsComponent;


/* b. 화살표 함수형 컴포넌트 */
// import React , {Fragment} from "react";
// const PropsComponent = (props) => {
//     // 구조분해 할당
//     const {name, nickname} = props;
//     return(
//         <Fragment>
//             <h1>부모에서 전달 받은 데이터 1 : {name} </h1>
//             <h2>부모에서 전달 받은 데이터 2 : {nickname} </h2>
//         </Fragment>
//     )
// }
// export default PropsComponent;

/* 클래스 컴포넌트 */
// import React, { Component } from "react";
// class PropsComponent extends Component{
//     render(){
//         const style = {fontSize:24, backgroundColor:'black', color:'white'}
//         return(
//             <div>
//                 <h1>부모 컴포넌트에서 전달받은 이름 : </h1>
//                 <p style={style}>{this.props.name}</p>
//                 <h2>부모 컴포넌트에서 전달받은 별명 : </h2>
//                 <p style={style}>{this.props.nickname}</p>
//             </div>
//         )
//     }
// }
// export default PropsComponent;