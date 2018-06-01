import React from 'react';
import Board from './board';

export default () => (
    <div>
        <div id='title'>
            <title>~~~ | Trollo | ~~~</title>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lobster" />
            <link rel="stylesheet" href="styles.css" />
        </div>
        <div className='main'>

            <div className="header">
                <h1>Trollo</h1>
            </div>

            <Board />

        </div>
        <style jsx>{`
       .header {
        background-color: rgb(80, 227, 194);
        font-family: "Lobster";
        color: RGB(255,0,90);
        text-align: center;
        font-size: 100px;
        text-shadow: 8px 4px rgb(16,0,102);
        }
        * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
      }
    `}
        </style>
    </div>
);
