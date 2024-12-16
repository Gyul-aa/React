import React from "react";
function PropsCustom(props){
    const {name,age,hobby,message} = props;
    const style = {color : "skyblue"}
    return(
        <div>
            <p style={style}>나의 이름 : {name}</p>
            <p style={style}>나의 나이 : {age}</p>
            <p style={style}>나의 취미 : {hobby}</p>
            <p style={style}>나의 좌우명 : {message}</p>
        </div>
    )
}
export default PropsCustom;