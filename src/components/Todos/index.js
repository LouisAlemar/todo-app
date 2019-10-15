import React, { Component } from 'react';

class Todos extends Component {
    state = {  }
    render() { 
        const { todos } = this.props;
        const todoList = todos.length ? (
            todos.map(todo => {
                return(
                    <div className="collection-item" key={todo.id}>
                        <span>{todo.content}</span>
                    </div>
                )
            })
        ) : (
            <p className="center">You have no todos left!</p>
        );
        return ( 
            <div className="todos collection">
                {todoList}
            </div>
         );
    }
}
 
export default Todos;