import React from 'react';
import Item from "./Item/Item";

import {useTypedSelector} from "../hooks/useTypedSelector";

const Items = () => {

    const tickets = useTypedSelector(state => state.tickets);


    return (
        <div>
            {tickets.map((el) => (

                <Item
                    key={el.id}
                    id={el.id}
                    price={el.price}
                    companyId={el.companyId}
                    segments={el.segments}
                />
                // <Item
                //     dateEnd={el.dateEnd.toString()}
                //     id={el.id}
                //     dateStart={el.dateStart.toString()}
                //     destination={el.destination as CityCodes}
                //     duration={el.duration}
                //     stops={el.stops as CityCodes[]}
                //     origin={el.origin as CityCodes}
                //     key={el.id}
                //
                // />
            ))}


        </div>
    );
};

export default Items;
