import React from 'react';
import {findField} from "../controllers/Mouse";
import {findCenter} from "../helpers/board";
import {checkFinal} from "../helpers/logic";

export default function Board() {
    const refBoard = React.useRef(null);

    const [crosses, setCrosses] = React.useState([]);
    const [noughts, setNoughts] = React.useState([]);
    const [move, setMove] = React.useState('cross');

    const revertMove = () => {
        if (move === 'cross') {
            setMove('nought')
        } else {
            setMove('cross')
        }
    };

    const isFieldOccupied = (move) => {
        return !!(crosses.find((cross) => cross === move)
            || noughts.find((nought) => nought === move));

    };

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
    };

    const drawMoves = (context) => {
        crosses.forEach((cross) => {
            const center = findCenter(cross);
            drawCross(context, center);
        });
        noughts.forEach((nought) => {
            const center = findCenter(nought);
            drawNought(context, center);
        })
    };

    const drawNought = (context, center) => {
        context.moveTo(center.x + 40, center.y);
        context.arc(center.x, center.y, 40, 0, 2*Math.PI, false);
    };

    const drawCross = (context, center) => {
        drawLine(context, {x: center.x - 40, y: center.y - 40}, {x: center.x + 40, y: center.y + 40});
        drawLine(context, {x: center.x + 40, y: center.y - 40}, {x: center.x - 40, y: center.y + 40});
    };

    const drawFinal = (context, combination) => {
        const fCenter = findCenter(combination[0]);
        const sCenter = findCenter(combination[2]);
        drawLine(context, fCenter, sCenter);
        context.stroke();
    };

    React.useEffect(() => {
        const context = refBoard.current.getContext('2d');
        context.beginPath();
        context.clearRect(0, 0, 300, 300);
        drawBoard(context);
        drawMoves(context);
        context.strokeStyle = 'gray';
        context.stroke();
        const final = checkFinal(crosses, noughts);
        if (final) {
            drawFinal(context, final.combination);
        }
        if (final) {
            alert(final.winner);
            setNoughts([]);
            setCrosses([]);
        }
    });

    const setField = (field) => {
        if (move === 'cross') {
            crosses.push(field);
            setCrosses(crosses);
        } else {
            noughts.push(field);
            setNoughts(noughts);
        }
    };

    const mouseControl = (e) => {
        const field = findField({x: e.clientX - window.innerWidth/2 + 150, y: e.clientY});
        if (isFieldOccupied(field)) {
            return;
        }
        setField(field);
        revertMove();
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
