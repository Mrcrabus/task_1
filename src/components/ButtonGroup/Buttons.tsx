import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {sortTickets, sortTicketsRevert} from "../../store/reducers/ticketsReducer";


const Buttons = () => {

    let dispatch = useDispatch()

    return (

        <div className={'ml-[20px]'}>
            <button
                type={"button"}
                className={'border-solid border-2 border-gray-400 rounded-l-lg bg-white hover:bg-blue-50 w-[168px] h-[50px]'}
                onClick={() => dispatch(sortTickets())}
            >
                Самый дешевый
            </button>
            <button
                type={"button"}
                className={'border-solid border-2 border-gray-400 bg-white  hover:bg-blue-50 w-[168px] h-[50px]'}
                onClick={() => dispatch(sortTicketsRevert())}
            >
                Самый быстрый
            </button>
            <button
                type={"button"}
                className={'border-solid border-2 border-gray-400 rounded-r-lg bg-white hover:bg-blue-50 w-[168px] h-[50px]'}
            >
                Оптимальный
            </button>
        </div>


    );
};

export default Buttons;
