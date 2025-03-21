### 1. **Toggle 컴포넌트 (햄버거 메뉴)**

이 코드는 햄버거 메뉴처럼 보이는 버튼을 클릭하면 애니메이션을 통해 메뉴의 상태가 바뀌는 기능을 구현합니다. 클릭 시 버튼 모양이 변하고, `hello react`라는 문구가 나타납니다.

### 코드 설명

```jsx
jsx
복사
import React, { useState } from 'react';
import './Toggle.scss';  // 스타일을 위한 외부 CSS 파일

const Toggle = () => {
  const [open, setOpen] = useState(false);  // open 상태를 저장하는 변수 (초기값은 false)

  console.log(open);  // open 상태가 바뀔 때마다 콘솔에 로그를 출력

  return (
    <divonClick={() => setOpen(!open)}  // 클릭 시 open 상태를 반전시킴
      className={`hamburger ${open ? 'open' : ''}`}  // open 상태에 따라 클래스 추가
    >
      <div className="link">
        <span>1</span>  {/* 메뉴 아이템 1 */}
        <span>2</span>  {/* 메뉴 아이템 2 */}
        <span>3</span>  {/* 메뉴 아이템 3 */}
      </div>
      <div className="content-box">
        hello react  {/* 메뉴가 열렸을 때 보이는 텍스트 */}
      </div>
    </div>
  );
};

export default Toggle;

```

### 작동 방식:

1. `useState`를 사용하여 `open`이라는 상태 변수로 메뉴가 열린 상태인지, 닫힌 상태인지를 관리합니다.
2. `onClick` 이벤트가 발생하면 `setOpen(!open)`을 사용하여 `open` 값을 반전시킵니다.
3. `open`이 `true`일 때, `hamburger open`이라는 클래스가 적용되어 스타일을 다르게 변경합니다.
4. 메뉴 아이템(`1`, `2`, `3`)이 있는 `link` div와 `hello react`라는 텍스트를 가진 `content-box`가 표시됩니다.

### **Ani 컴포넌트 (애니메이션 박스 이동)**

버튼을 클릭하면 박스가 좌우로 이동하면서 색깔도 바뀌는 애니메이션을 구현합니다. 
애니메이션은 `gsap`이라는 라이브러리를 사용하여 부드럽고 동적인 효과를 만듭니다.

### 코드 설명

```jsx
jsx
복사
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';  // gsap 애니메이션 라이브러리
import './Ani.scss';  // 스타일을 위한 외부 CSS 파일

const Ani = () => {
  const boxRef = useRef(null);  // box 요소를 참조하기 위한 useRef
  const [moved, setMoved] = useState(false);  // 박스가 이동했는지 여부

  // 박스를 애니메이션으로 이동시키는 함수
  const animateBox = () => {
    if (!moved) {
      // moved가 false일 때 (박스가 처음 상태)
      gsap.to(boxRef.current, {
        x: 200,  // 박스를 200px 오른쪽으로 이동
        backgroundColor: '#4dabf7',  // 배경 색을 파란색으로 변경
        duration: 1,  // 애니메이션 시간 1초
        ease: 'power2.out',  // 애니메이션의 끝을 부드럽게
      });
    } else {
      // moved가 true일 때 (박스가 이미 이동한 상태)
      gsap.to(boxRef.current, {
        x: 0,  // 박스를 원위치로 이동
        backgroundColor: 'salmon',  // 배경 색을 살몬색으로 변경
        duration: 1,
        ease: 'power2.out',
      });
    }
    setMoved(!moved);  // 상태를 반전시켜 박스가 이동한 상태를 기록
  };

  return (
    <div className="gsap-container">
      <div className="box" ref={boxRef}></div>  {/* 애니메이션이 적용될 박스 */}
      <button onClick={animateBox}>실행</button>  {/* 버튼을 클릭하면 애니메이션 실행 */}
    </div>
  );
};

export default Ani;

```

### 작동 방식:

1. `useRef`를 사용하여 박스(`boxRef`)에 대한 참조를 저장합니다.
2. `animateBox` 함수는 `gsap.to()`를 사용해 박스를 애니메이션으로 이동시키고 색깔을 변경합니다.
3. `moved` 상태가 `false`일 때는 박스가 이동하고 색상이 파란색으로 바뀌며, `true`일 때는 박스가 원위치로 돌아가고 색상이 살몬색으로 바뀝니다.
4. `setMoved(!moved)`를 사용하여 상태를 반전시키면서 애니메이션을 반복할 수 있게 만듭니다.

### 코드

- Toggle.jsx
    
    ```jsx
    import React ,{useState}from 'react'
    import './Toggle.scss'
    
    const Toggle = () => {
    
        const [open, setOpen]=useState(false)
    
        console.log(open);
        
      return (
        <div 
        onClick={()=>setOpen(!open)}
        className={`hamburger ${open? 'open':''} `}>
            <div className="link">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className="content-box">
                hello react
            </div>
        </div>
      )
    }
    
    export default Toggle
    ```
    
- Toggle.scss
    
    ```scss
    .hamburger{
        width: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
    
        .link {
            width: 30px;
            height: 20px;
            cursor: pointer;
            position: relative;
    
            span{
                font-size: 0;
                display: block;
                background-color: #000;
                border-radius: 2px;
                position: absolute;
                width: 100%;
                height: 2px;
                transition: all .3s ease-in-out;
    
                &:nth-child(1){
                    top: 0;
                }
                &:nth-child(2){
                    top: 48%;
                }
                &:nth-child(3){
                    top: 98%;
                }
            }
        }
        .content-box {
            width: 300px;
            height: 200px;
            background-color: salmon;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            transform: translateX(100%);
            opacity: 0;
            transition: all .3s;
        }
        &.open{
            .link{
                span:nth-child(1){
                    transform: rotate(45deg);
                    top: 48%;
                }
                span:nth-child(2){
                    transform: translateX(100%);
                    opacity: 0;
                }
                span:nth-child(3){
                    top: 48%;
                    transform: rotate(-45deg);
                }
            }
            .content-box {
                transform: translateX(0%);
                opacity: 1;
                
            }
    
        }
    
    }
    ```
    
- Ani.jsx
    
    ```jsx
        import React ,{useRef ,useState}from 'react'
        import {gsap} from 'gsap'
        import './Ani.scss'
    
        const Ani = () => {
    
        const boxRef = useRef(null)
        const [moved, setMoved]=useState(false)
    
        const animateBox=()=>{
            
            if(!moved){
                gsap.to(boxRef.current,{
                    x:200,
                    backgroundColor: '#4dabf7',
                    duration: 1,
                    ease: 'power2.out',
                })
                
            }else{
                gsap.to(boxRef.current,{
                    x:0,
                    backgroundColor: 'salmon',
                    duration: 1,
                    ease: 'power2.out',
                })
    
            }
            setMoved(!moved)
    
        }
    
        return (
        <div className='gsap-container'>
            <div className="box" ref={boxRef}></div>
            <button onClick={animateBox}>실행</button>
        </div>
        )
        }
    
        export default Ani
    ```
    
- Ani.scss
    
    ```scss
    .gsap-container{
        text-align: center;
        margin: 50px 0;
    
        .box {
            width: 100px;
            height: 100px;
            background-color: sandybrown;
            margin: 0 auto 20px;
            border-radius: 12px;
        }
        button{
            padding:10px 20px;
            cursor: pointer;
            font-size: 1rem;
    
        }
    }
    ```
    
- App.jsx
    
    ```jsx
    
    import './App.css'
    import Toggle from './components/Toggle'
    import Ani from './components/Ani'
    function App() {
    
      return (
        <div>
          <Ani/>
          <Toggle/>
        </div>
      )
    }
    
    export default App
    
    ```
