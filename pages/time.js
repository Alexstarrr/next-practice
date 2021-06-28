import React, { useState } from 'react';
import StepBar from '../components/stepBar';

const Time = () => {
    const [curTime,setTime] = useState(Date.now());
    const changeFormat = async() => {
        const moment = await import('moment');
        setTime(moment.default(Date.now()).format('MMMM Do YYYY, h:mm:ss a'))
    }
    return (
        <>
            <div>Display Time: {curTime} </div>
            <button onClick={changeFormat}>Change Format</button>
            <StepBar />
        </>

    )
}

export default Time;