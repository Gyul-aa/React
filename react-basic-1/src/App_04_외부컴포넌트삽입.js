/* 외부 컴포넌트 삽입 */
import React from "react";
import AddComponent from "./AddComponent";
import SecondComponet from "./SecondComponent";
function App(){
    return(
        <div>
            <h1>Component Added</h1>
            <AddComponent></AddComponent>
            <SecondComponet></SecondComponet>
        </div>
    )
}
export default App;