import React from 'react'
import Rolex from '../images/rolex.png'
import Sns1 from '../images/icon_facebook.png'
import Sns2 from '../images/icon_twitter.png'
import Sns3 from '../images/icon_insta.png'
import Sns4 from '../images/icon_naver.png'

const content = () => {
  return (
    <main>
        <section class="cf">
            <article class="keyvisual">
                <h2>
                    <img src={Rolex} alt="롤렉스 서브마리너"/>
                </h2>
            </article>
            <article class="info">
                <h2>KIM GYURAE</h2>
                <div class="title">
                    <p>
                        webadd
                    </p>
                    <p>
                        http://webadd.kr
                    </p>
                </div>
                <div class="tel_mail">
                    <p>
                        <span class="telmail_c">TEL</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010.4070.67**
                    </p><p>
                        <span class="telmail_c">MAIL</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;njjekr98@naver.com
                    </p>    
                </div>
                <div class="sns">
                    <img src={Sns1} alt="페이스북 아이콘"/>
                    <img src={Sns2} alt="트위터 아이콘"/>
                    <img src={Sns3} alt="인스타그램 아이콘"/>
                    <img src={Sns4} alt="네이버 아이콘"/>
                </div>
                <div class="skill">
                    <p>
                        <span>FRONT-END</span>&nbsp;:&nbsp;&nbsp;&nbsp;
                        HTML&nbsp;&nbsp;|
                        &nbsp;&nbsp;CSS&nbsp;&nbsp;|
                        &nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;|
                        &nbsp;&nbsp;JQUERY&nbsp;&nbsp;|
                        &nbsp;&nbsp;REACT
                    </p>
                    <p>
                        <span>BACK-END</span>&nbsp;:&nbsp;&nbsp;&nbsp;
                        JAVA&nbsp;&nbsp;|
                        &nbsp;&nbsp;SERVLET&nbsp;&nbsp;|
                        &nbsp;&nbsp;JSP&nbsp;&nbsp;|
                        &nbsp;&nbsp;ORACLE&nbsp;&nbsp;  
                    </p>
                </div>
            </article>
        </section>
    </main>
  )
}

export default content