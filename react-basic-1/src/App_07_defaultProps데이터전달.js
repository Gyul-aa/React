// /* defaultProps : props 기본값 설정 사용 */
import React, { Fragment } from "react";
function App(){
    return(
        <div>
            <Head></Head>
        </div>
    )
}
export default App;

function Head({logo,gnb}){
    return(
        <Fragment>
            <header>{logo}</header>
            <nav>{gnb}</nav>
        </Fragment>
    )
}

// defaultProps 설정 //
Head.defaultProps = {
    logo : "로고" ,
    gnb : "GNB 메뉴",
}