import React, {useState} from 'react';


const Buttons = () => {
    const [value, setValue] = useState('1');


    return (

        <div className={'ml-[20px]'}>
            <button
                type={"button"}
                className={'border-solid border-2 border-gray-400 rounded-l-lg bg-white hover:bg-blue-50 w-[168px] h-[50px]'}
            >
                Самый дешевый
            </button>
            <button
                type={"button"}
                className={'border-solid border-2 border-gray-400 bg-white hover:bg-blue-50 w-[168px] h-[50px]'}
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

        // <div>
        //     {radios.map((radio, idx) => (
        //         <button
        //             key={idx}
        //             id={`radio-${idx}`}
        //             value={radio.value}
        //             onChange={(e: { currentTarget: { value: React.SetStateAction<string>; }; }) => setRadioValue(e.currentTarget.value)}
        //         >
        //             {radio.name}
        //         </button>
        //     ))}
        // </div>

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
