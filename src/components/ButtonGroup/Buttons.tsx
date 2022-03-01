import React, {useState} from 'react';
import {ButtonGroup, ToggleButton, Button} from "react-bootstrap";


const Buttons = () => {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        {name: 'Самый дешевый', value: '1'},
        {name: 'Самый быстрый', value: '2'},
        {name: 'Оптимальный', value: '3'},
    ];


    return (

        <ButtonGroup>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'outline-primary'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>

        // <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        //     <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
        //     <label className="btn btn-outline-primary" htmlFor="btnradio1">Самый дешевый</label>
        //
        //     <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
        //     <label className="btn btn-outline-primary" htmlFor="btnradio2">Самый быстрый</label>
        //
        //     <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
        //     <label className="btn btn-outline-primary" htmlFor="btnradio3">Оптимальный</label>
        //
        // </div>
    );
};

export default Buttons;
