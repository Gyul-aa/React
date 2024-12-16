/*
  함수형 컴포넌트
    : 선언이 간편, 메모리 자원도 덜 사용, 리액트 v16.8 Hooks 도입되면서 사용이 편리해 짐                              
    기존 state, 생명주기함수의 사용이 안되었으나. 리액트 v16.8 업데이트 이후 사용이 가능해짐
    (코딩규칙) => 반드시 return() 코딩을 하여 값을 반환해 줘야 함

  Hooks
    : 리액트 v16.8 에서 도입
    함수형 컴포넌트에서 data의 상태 관리를 할 수 있는 useState
    랜더링 직후의 작업을 설정하는 useEffect 등의 다수의 hooks를 제공함


  a. 기본 함수형 컴포넌트
*/
// import React from 'react';
// function App(){
//   return(
//     <div>
//         <h1>Hello React!</h1>                      
//     </div>
//   );
// }
// export default App;

/* b. 화살표 함수형 컴포넌트 */
// import React from 'react';
// const App = () => {
//     return(
//         <div>
//             <h1>hello react!</h1>
//         </div>
//     )
// }
// export default App;