/* 생명주기함수 = 호출되는 순서가 있음 */
import React, { Component } from 'react'
class App extends Component {
    /* 1. state 영역 */
    state = {
        count : 0,
    }
    /* 2. 이벤트 리스너 */
    add = () => {
        this.setState({count:this.state.count+1})
    }
    minus = () => {
        this.setState({count:this.state.count-1})
    }

    /* #0. constructor(): 생성자 함수(생명주기함수는 아님) -> 컴포넌트가 실행될 때 호출 => render()보다 먼저 실행 */
    constructor(props){
        super(props);
        console.log('생성자 함수 실행');
    }

    /* #1. render() 실행 : 클래스형 컴포넌트에서 브라우저에 DOM을 그려주는 역할 */
    render() {
        console.log('render() 실행');
    return (
    <div>
        <h3>The Number is <strong>{this.state.count}</strong>번</h3>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
    </div>
    )
  }

  /* #2. 컴포넌트가 처음 화면에 그려주는 실행함수 => 무조건 render() 실행 후에 */
  componentDidMount(){
    console.log('componentDidMount() 실행');
  }

  // 여기까지 실행 순서 : 0. constructor() -> 1. render() -> 2. componentDidMount() 순으로 기본 실행

  /* #3. 화면이 새로 그려지면 실행되는 함수 */
  componentDidUpdate(){
    console.log('componentDidUpdate() 실행');
  }

  /* #4. 컴포넌트가 화면에서 떠날 때 실행되는 함수 */
  componentDidUnMount(){
    console.log('componentDidUnMount() 실행 bye bye');
  }

}
export default App;
