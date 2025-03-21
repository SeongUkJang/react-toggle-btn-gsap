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