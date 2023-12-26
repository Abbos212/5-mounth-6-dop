import React, { useEffect } from 'react';
import { setCurrent, setHistory } from '../../store/slices/historySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Main = () => {
    const dispatch = useDispatch()
    const { current, history } = useSelector((state) => state.history)

    const location = useLocation();

 


    useEffect(() => {
        
        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('Main'))
                console.log(current);
                console.log('change!');
            }
        };
    }, []);
    return (
        <div>
            <h1>Main</h1>
            <p>From: {current}</p>
        </div>
    );
}

export default Main;
