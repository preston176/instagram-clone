import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };
    
    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    render()
    {
        return(
            <div>
                <img src="{this.state.imageUrl}" alt="" />
                <span style={this.styles} className='badge badge-primary'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        )
    }

    formatCount()
    {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : this.state.count;
    }
}

export default Counter;