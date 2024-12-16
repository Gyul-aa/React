/*
    클래스형 컴포넌트
    : state 기능, 생명주기함수, 임의의 메서드를 정의해서 사용가능
    (코딩규칙) 클래스는 리턴이 없으므로 render() 함수를 이용 = 그려주는 형식의 함수
*/
import React, {Component} from "react";
class App extends Component {
    render(){
        return(
            <div>
                <h2>
                    클래스형 컴포넌트
                </h2>
            </div>
        )
    }
}
export default App;
