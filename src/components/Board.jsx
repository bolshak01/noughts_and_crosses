import React from 'react';
import {findField} from "../controllers/Mouse";

export default function Board(props) {
    const refBoard = React.useRef(null);
    const drawLine = (context, start, end) => {
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
    };

    const drawBoard = (context) => {
        context.rect(0, 0, 300, 300);
        drawLine(context, {x: 100, y: 0}, {x: 100, y: 300});
        drawLine(context, {x: 200, y: 0}, {x: 200, y: 300});
        drawLine(context, {x: 0, y: 100}, {x: 300, y: 100});
        drawLine(context, {x: 0, y: 200}, {x: 300, y: 200});
        context.strokeStyle = 'gray';
        context.stroke();
    };

    React.useEffect(() => {
        const context = refBoard.current.getContext('2d');
        context.beginPath();
        drawBoard(context);
    });

    const mouseControl = (e) => {
        const field = findField({x: e.clientX - window.innerWidth/2 + 150, y: e.clientY});
        alert(field);
    };

    return <canvas
        ref={refBoard}
        width='300px'
        height='300px'
        onClick={mouseControl}
        >
        Your browser does not support canvas
    </canvas>
}
