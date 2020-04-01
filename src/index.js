import React,{useState,useEffect} from 'react'
import {render} from 'react-dom'

const Counter=()=>{
    //console.log(useState(0))
    const [count,setCount]=useState(100)
    const increment=()=>setCount(count+1)
    const decrement=()=>setCount(count-1)
    useEffect(()=>{
        document.title=`计数：${count}`
    })
    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

render(
    <Counter/>,
    document.getElementById('root')
)