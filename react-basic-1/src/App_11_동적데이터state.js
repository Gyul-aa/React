/* 
    state 
    : 객체 형태의 데이터를 사용하는 영역. 클래스 컴포넌트 안에서 사용. 반드시 소문자 사용
    초기값 설정을 반드시 해줘야 함
    state값을 변경할 때는 직접 state를 조작하면 안되고, setState()함수를 사용해야 함
*/

import { Component } from "react";

class App extends Component{
    /* state Data 영역 */
    state = {
        count : 0,
    }
    /* 이벤트 리스너 */
    add = () => {
        this.setState({count:(this.state.count)+1})
    }
    minus = () => {
        this.setState({count:(this.state.count)-1})
    }

    render(){
        return(
            <div>
                <h2>이벤트 연결 동적데이터 state 활용</h2>
                <p>동적 state : {this.state.count}번</p>
                <button onClick={this.add}>PLUS</button>
                <button onClick={this.minus}>MINUS</button>
            </div>
        );
    }
}

export default App;
