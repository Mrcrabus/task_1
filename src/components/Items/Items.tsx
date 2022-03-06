import React from 'react';
import Item from "./Item/Item";

import {CityCodes} from "../../types/interfaces";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Items = () => {

    const segments = useTypedSelector(state => state.segments);



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
