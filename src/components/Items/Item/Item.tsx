import React, {FC} from 'react';
import {Segment} from '../../../types/interfaces'


const Item: FC<Segment> = ({id, origin, destination, dateStart, dateEnd, stops, duration}) => {

    let time = new Date(parseInt(dateStart))
    let echo = time.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    // let echo = time.toLocaleString('ru-RU', { timeZone: 'UTC' })
    return (
        <div
            className={'border-solid border-2 drop-shadow-lg flex flex-col items-center justify-evenly rounded-md bg-white w-[502px] h-[184px]'}>
            <div className={'flex justify-between items-center w-[90%] h-[40%]'}>
                <div>Price</div>
                <div>Company</div>
            </div>
            <div className={'flex justify-between w-[90%] h-[60%]'}>
                <div>
                    <div>
                        <div>{origin + '-' + destination}</div>
                        <div>{echo}</div>
                    </div>
                    <div>
                        <div>В пути</div>
                        <div>2233</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>В пути</div>
                        <div>{(duration / 60000) / 60 + "ч " + (duration / 60000) % 60 + "мин"}</div>
                    </div>
                    <div>
                        <div>В пути</div>
                        <div>2233</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Пересадки</div>
                        <div>{[...stops].join(',')}</div>
                    </div>
                    <div>
                        <div>Пересадки</div>
                        <div>2233</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
