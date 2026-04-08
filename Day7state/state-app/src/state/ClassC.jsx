import { Component } from "react";

class ClassC extends Component{
    state = {
        count : 0
    }

    Inc = ()=>{this.setState({count:this.state.count+1})}
    Dec = ()=>{this.setState({count:this.state.count-1})}
    
    render(){
        return(
            <div>
            <center>
                <h1>Class Components-Counter App</h1>
                <h2>Counter: {this.state.count}</h2>
                <button className="btn btn-secondary" onClick={this.Inc}>Increment</button>
                <button className="btn btn-warning" onClick={this.Dec}>Decrement</button>

            </center>
            
            </div>
        )
    }
}

export default ClassC