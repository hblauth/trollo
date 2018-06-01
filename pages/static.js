import React from 'react';

export default () => (
    <div>

        <div id="header">
            <h1>Trollo</h1>
        </div>

        <div id="board" class="container" />

        <div id="control">
            <button onclick="handlers.addTodoButtonHandler()" id="addTodoButton">Add a Todo</button>
        </div>

        <div id="initButtonDiv">
            <button onclick="init()" id="initButton">Run init</button>
        </div>
    </div>
);