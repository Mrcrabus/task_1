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
            ))}


        </div>
    );
};

export default Items;
