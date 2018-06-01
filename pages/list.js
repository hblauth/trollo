import React from 'react';
import Todo from './todo';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;
        const todosList = list.todos.map((todo, i) => <li><Todo todoIndex={i} listIndex={this.props.listIndex} todo={todo} deleteTodo={this.props.deleteTodo} editingTodo={this.props.editingTodo} toggleComplete={this.props.toggleComplete} /></li>); // Ok to pass whole todo as prop vs. constituents?
        return (
            <div className="list" >
                <div className="listTitle">
                    <img
                        alt="[blank]"
                        // What is the $ for?
                        src={(this.props.list.allComplete ? 'https://images-na.ssl-images-amazon.com/images/I/61p7b5APtzL._SL1500_.jpg' : 'https://pbs.twimg.com/profile_images/875413706061922304/4P9CtJI2_400x400.jpg')}
                        onClick={e => this.props.toggleAllComplete(this.props.listIndex)}
                        height="30px"
                    />
                    <h2>{list.title}</h2>
                    <button className="deleteListButton" onClick={e => this.props.deleteList(this.props.listIndex)}>X</button>
                </div>
                <div className="listBody">
                    <ul>{todosList}</ul>
                </div>
                <style jsx>{`
                .list {
                    background-color: RGB(16,0,102);
                    color: white;
                    display: inline;
                    max-width: 25%;
                    flex-grow: 1;
                }
                
                .listTitle{
                    text-align: center;
                    font-weight: bold;
                    font-size: 15px;
                    border-style: solid;
                    border-color: rgb(255, 255, 255);
                    border-width: 2px;  
                    justify-content: space-between;
                    display: flex;
                    align-items: center;
                    padding: 0 4px 0 4px;
                    flex-grow: 1;
                }
                
                .listBody{
                    list-style-type: none;
                    justify-content: space-between;
                    display: flex;
                    align-items: center;
                    padding: 0 4px 0 4px;
                    flex-grow: 1;
                    flex-wrap: nowrap;
                    width: 100%;
                    flex-direction: column;
                }
                
                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    list-style-type: none;
                    width: 100%;
                }
                ul{
                    padding-left: 0px;
                }
                li {
                    display: flex;
                }
                .deleteListButton{
                    color: white;
                    background-color: RGB(16,0,102);
                    text-align: right;
                    font-weight: bold;
                    border: none;
                }   
                    }
                `}
                </style>
            </div>
        );
    }
}

export default List;

// const isOnList = todos.i ncludes(newTodo); update to look at todoText
// if (isOnList) {
//     this.setState({
//         message: 'Too keen - already on this list... Maybe just go do it?',
//     });
// } else {

// deleteTodo() { }
// this.deleteTodo = function (index) {
//     this.todos.splice(index, 1);
// };

// editTodo() { }
// this.editTodo = function (index, newTodoText) {
//     this.todos[index].todoText = newTodoText;
// };

// toggleCompleted() { }
//     this.toggleCompleted = function (index) {
//         var todo = this.todos[index];
//         todo.completed = !todo.completed;
//         this.checkAllComplete();
//     };

//    toggleAll() { }
//     this.toggleAll = function () {
//         this.todos.forEach(function (todo) {
//             if (this.allCompleted === true) {
//                 todo.completed = false;
//             } else {
//                 todo.completed = true;
//             };
//         }, this);
//         this.checkAllComplete();
//     };

// checkAllCompleted() { }

//     this.checkAllComplete = function () {
//         var totalTodos = this.todos.length;
//         var completedTodos = 0;
//         this.todos.forEach(function (todo) {
//             if (todo.completed === true) {
//                 completedTodos++;
//             };
//         });
//         if (completedTodos === totalTodos) {
//             this.allCompleted = true;
//         } else {
//             this.allCompleted = false
//         };
//     };


// const MyContainer = () => <Intermediate text="where is my son?" />
// const Intermediate = ({ text }) => <Child text={text} />
// const Child = ({ text }) => <span>{text}</span>

// const Board = () => <List text="where is my son?" />
// const Intermediate = ({ text }) => <Child text={text} />
// const Child = ({ text }) => <span>{text}</span>
