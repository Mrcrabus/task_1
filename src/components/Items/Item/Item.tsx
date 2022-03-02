import React, {FC} from 'react';
import {Segment} from '../../../types/interfaces'

const Item: FC<Segment> = ({id, origin, destination, dateStart, dateEnd, stops, duration}) => {
    return (
        <div style={{width: '18rem'}}>
            <div>
                <div>{destination}</div>
                <div className="mb-2 text-muted">Card Subtitle</div>
                <div>
                    {dateStart}
                    {dateEnd}
                </div>
                <div>Card Link</div>
                <div>Another Link</div>
            </div>
        </div>
    );
};

export default Item;
