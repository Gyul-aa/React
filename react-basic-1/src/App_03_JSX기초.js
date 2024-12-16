/*
   기본 JSX 문법
   : HTML + 자바스크립트를 기본으로 한 리액트만의 문법
   자바스크립트 확장 문법으로, XML의 형식을 따름
   작성한 코드는 브라우저를 실행되기 전 => 코드가 바인딩되는 과정에서 일반 JS형태로 변환됨
   => 실제로는 자바스크립트 객체임
*/

// import react from "react";
// function App(){
//     return(
//         <div>
//             <h1>
//                 리액트 JSX 문법
//             </h1>
//             <ol>
//                 <li>
//                     가독성이 좋고, 코드가 익숙하며, HTML 태그를 사용할 수 있음
//                 </li>
//                 <li>
//                     XML 폼을 따르고 유사하지만, 실제로는 자바스크립트 객체임
//                 </li>
//                 <li>
//                     Virtual DOM에서 컴포넌트 변화를 감지해낼때 효율적으로 비교할 수 있도록
//                     컴포넌트 내부는 반드시 하나의 DOM 트리 구조로 이루어져야 함 (= 최상위 부모태그 1개 안에 JSX 코딩)
//                 </li>
//                 <li>
//                     JSX 모든 태그는 닫아줘야함 = 닫지 않으면 오류 발생
//                 </li>
//                 <li>
//                     브라우저 실행전 바인딩 과정에서 자바스크립트로 변환된 후 브라우저에서 해석
//                 </li>
//             </ol>
//         </div>
//     );
// }
// export default App;

/*
    1-1 최상위 부모태그 = Fragment 사용
    : 리액트 v16.8 이후에 사용가능
    Fragment = DOM에 별도의 노드를 추가하지 않고 여러 자식을 하나로 그룹화 해줌
*/

// import React, {Fragment} from "react";
// function App(){
//     return(
//         <Fragment>
//            <h1>
//                 리액트 JSX 문법
//             </h1>
//             <ol>
//                 <li>
//                     가독성이 좋고, 코드가 익숙하며, HTML 태그를 사용할 수 있음
//                 </li>
//                 <li>
//                     XML 폼을 따르고 유사하지만, 실제로는 자바스크립트 객체임
//                 </li>
//                 <li>
//                     Virtual DOM에서 컴포넌트 변화를 감지해낼때 효율적으로 비교할 수 있도록
//                     컴포넌트 내부는 반드시 하나의 DOM 트리 구조로 이루어져야 함 (= 최상위 부모태그 1개 안에 JSX 코딩)
//                 </li>
//                 <li>
//                     JSX 모든 캐그는 닫아줘야함 = 닫지 않으면 오류 발생
//                 </li>
//                 <li>
//                     브라우저 실행전 바인딩 과정에서 자바스크립트로 변환된 후 브라우저에서 해석
//                 </li>
//             </ol>
//         </Fragment>
//     )
// }
// export default App;

/* 1-2. (JSX)안에서 자바스크립트 사용 */
// import React from "react";
// const App = () => {
//     const name = 'mcssam';
//     const library = 'React';
//     return(
//         <div>
//             <h1>나의 이니셜은 {name}</h1>
//             <p>
//                 <strong>{library}</strong>는 현재 가장 많이 사용되고 있는<br/>
//                 자바스크립트 프레임워크, 라이브러리 입니다.
//             </p>
//         </div>
//     )
// }
// export default App;

/* 1-3. (JSX)에서 조건문 사용 = 삼항조건연산자를 대체하여 사용 */
// import React from "react";
// const App = () => {
//     const name = 'mcssam';
//     return(
//         <div>
//             <h1>JSX내에 삼항조건연산자 사용</h1>
//             <p>
//                 JSX 삼항조건연산자 형식 : <br/>
//                 { name == 'mcssam' ? '김샘의 닉네임은 : ' + name : '닉네임이 다름'}
//             </p>
//         </div>
//     )
// }
// export default App;

/* 2. 클래스형 */
/* 1-4 (JSX)안에서 조건문 사용 */
// import React, {Component} from "react";
// class App extends Component{
//     render(){
//         return(
//             <div>
//                 {/*삼항조건연산자*/}
//                 { 1+1 === 2 ? (<div>정답!</div>) : (<div>오답!</div>)}
//                 {/* 조건&&참 : 참인 경우만 실행 */}
//                 { 2+2 === 4 && (<div>&amp;&amp; 참인경우만 실행</div>)}
//                 {/* 조건| |거짓 : 거짓인 경우만 실행 */}
//                 { 2+2 === 5 || (<div>&amp;&amp; 거짓인경우만 실행</div>)}
//             </div>
//         )
//     }
// }
// export default App;

/* 1-5. DOM요소에 변수 사용하여 인라인 스타일 적용 */
// import React from "react";
// function App(){
//     const name = 'mc';
//     const jsxStyle = {backgroundColor:'#00f' , fontSize:24, padding:8, color:'#fff' }
//     return(
//         <div style={jsxStyle}>
//             변수사용 CSS 적용<br/>
//             이름 : {name}
//         </div>
//     )  
// }
// export default App; 

/* 1-6. DOM 요소 외부 스타일 적용 */
// import React from "react";
// import './css/style.css';
// function App(){
//     const str = "외부 스타일 적용";
//     return(
//         <div className='font color_red'>
//             { str }
//         </div>
//     )
// }
// export default App;