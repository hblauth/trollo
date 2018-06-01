import React from 'react';

export default ({ todo, todoIndex, listIndex, toggleComplete, deleteTodo, editingTodo }) => (
    < div className="todoDiv" >
        <img
            alt={todo.todoText}
            height="30px"
            onClick={e => toggleComplete(listIndex, todoIndex)}
            // What is the $ for?
            src={` ${todo.complete ? 'https://images-na.ssl-images-amazon.com/images/I/61p7b5APtzL._SL1500_.jpg' : 'https://pbs.twimg.com/profile_images/875413706061922304/4P9CtJI2_400x400.jpg'}`}
        />
        {todo.complete && <p><strike>{todo.todoText}</strike></p> || <p onClick={e => editingTodo(listIndex, todoIndex)}>{todo.todoText}</p>}
        <button className="deleteTodoButton" onClick={e => deleteTodo(listIndex, todoIndex)}>X</button>
        <style jsx>{`
            .todoDiv{
                text-align: left;
                justify-content: space-between;
                display: flex;
                align-items: center;
                padding: 0 4px 0 4px;
                flex-grow: 1;
                flex-wrap: nowrap;
                width: 100%;
            }
            .deleteTodoButton{
                color: white;
                background-color: RGB(16,0,102);
                text-align: right;
                font-weight: bold;
                border: none;
                }
            p{
                cursor: default;
            }
            `}
        </style>
    </div >
);
