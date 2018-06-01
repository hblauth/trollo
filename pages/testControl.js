import React from 'react';

class TestControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '',
        };
        this.addList.bind(this);
    }

    addList(e) {
        e.preventDefault();
        console.log(this.state.listName);
        this.listNameInput.value = '';
        this.props.addNewList(this.state.listName);
    }

    render() {
        const lists = this.props.lists;
        return (
            <div>
                <form >
                    <label>
                        <button type='submit' onClick={(e) => this.addList(e)}>Add List</button>
                    </label>
                    <input ref={input => this.listNameInput = input} type='text' onChange={(e) => this.setState({ listName: e.target.value })}></input>
                </form>
                <div>
                    <p>{lists}</p>
                </div>
            </div >
        )
    }

}

export default TestControl;