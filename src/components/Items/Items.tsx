import React from 'react';
import Item from "./Item/Item";
import segments from '../../constants/segments.json'
import {CityCodes} from "../../types/interfaces";

const Items = () => {
    console.log(segments[0])
    return (
        <div>
            {segments.map((el) => (
                <Item
                    dateEnd={el.dateEnd.toString()}
                    id={el.id}
                    dateStart={el.dateStart.toString()}
                    destination={el.destination as CityCodes}
                    duration={el.duration}
                    stops={el.stops as CityCodes[]}
                    origin={el.origin as CityCodes}
                    key={el.id}

                />
            ))}


        </div>
    );
};

export default Items;
