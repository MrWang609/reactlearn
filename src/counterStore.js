import React,{Component,createContext} from 'react'

const{
    Provider,
    Consumer:CounterConsumer
}=createContext()

class CounterProvider extends Component{
    constructor(){
        super()
        this.state={
            count:100
        }
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrementCount=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <Provider value={{
                count:this.state.count,
                onIncrement:this.incrementCount,
                onDecrement:this.decrementCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
export {
    CounterConsumer,
    CounterProvider
}