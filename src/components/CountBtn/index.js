import React, { Component } from 'react'
import {CounterConsumer} from '../../counterStore'

export default class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    ({onIncrement,onDecrement})=>{
                    const handle=this.props.type==='increment'?onIncrement:onDecrement
                    return <button  onClick={handle}>{this.props.children}</button>
                    }
                }
            </CounterConsumer>
        )
    }
}
