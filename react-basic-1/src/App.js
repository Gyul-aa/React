/* Hook 컴바인 컴포넌트 */
import React from 'react'
import UseHooksSample0 from './hook/UseHooksSample0'
import UseHooksSample1 from './hook/UseHooksSample1'
import UseHooksSample2 from './hook/UseHooksSample2'
import UseHooksSample3 from './hook/UseHooksSample3'

import UseEffectSample1 from './hook/UseEffectSample1'
import UseEffectSample2 from './hook/UseEffectSample2'
import UseEffectSample3 from './hook/UseEffectSample3'
import UseEffectSample4 from './hook/UseEffectSample4'

function App() {
  return (
    <div>
{/* #1. useState */}
        {/* <UseHooksSample0/>
        <UseHooksSample1/>
        <UseHooksSample2/>
        <UseHooksSample3/> */}
{/* #2. useEffect */}
        {/* <UseEffectSample1></UseEffectSample1> */}
        <UseEffectSample2></UseEffectSample2>
        <UseEffectSample3></UseEffectSample3>
        <UseEffectSample4></UseEffectSample4>
    </div>
  )
}
export default App