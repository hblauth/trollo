import React from 'react';
import TestControl from './testControl';

class TestBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['one', 'two'],
        }
        this.handleAddList = this.handleAddList.bind(this);
    }

    handleAddList(title) {
        // e.preventDefault();
        this.setState({ lists: [...this.state.lists, title] });
        console.log(this.state.lists);
    }

    render() {
        return (
            <div>
                <h1> Test Board </h1>
                <TestControl lists={this.state.lists} addNewList={this.handleAddList} />
                <p>{this.state.lists}</p>
            </div>
        )
    }

}

export default TestBoard;
