import React, { Component } from 'react'


export default class Todo extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.task}</h4>
            </div>
        )
    }
}