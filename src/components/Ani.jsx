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