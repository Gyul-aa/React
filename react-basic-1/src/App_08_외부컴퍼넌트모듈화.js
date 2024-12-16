import Content from "./include/Content.js";
import Footer from "./include/Footer.js";
import Header from "./include/Header.js"

function App(){
    return(    
        <div>
            <Header menu = {['MENU01','MENU02','MENU03','MENU04']}></Header>
            <Content content = {{text : 'Content 제목' , section : 'Content 왼쪽' , section2:'Content 오른쪽'}}></Content>
            <Footer footer={'footer 영역'}></Footer>
        </div>
    );  
}
export default App;

