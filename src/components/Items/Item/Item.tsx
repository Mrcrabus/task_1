import React, {FC} from 'react';
import {Segment} from '../../../types/interfaces';
import companies from '../../../constants/companies.json';
import tickets from '../../../constants/tickets.json';


const Item: FC<Segment> = ({id, origin, destination, dateStart, dateEnd, stops, duration}) => {

    const findPrice = (id: string) => {
        return {...tickets.find(el => el.segments.includes(id))}.price
    }
    const findCompany = (id: string) => {
        return {
            ...companies.find(company =>
                company.id === {...tickets.find(el => el.segments.includes(id))}.companyId)
        }.name
    }

    console.log(findCompany(id))

    const timeOnTable = (time: string) => {
        let date = new Date(parseInt(time))
        return date.toLocaleString('ru-RU',
            {timeZone: 'UTC', hourCycle: 'h23', hour: "2-digit", minute: "2-digit"})
    }


    return (
        <div
            className={'border-solid border-2 drop-shadow-lg flex flex-col items-center justify-evenly rounded-md bg-white m-[20px] w-[502px] h-[184px]'}>
            <div className={'flex justify-between items-center w-[90%] h-[40%]'}>
                <div>{findPrice(id)}</div>
                <div>{findCompany(id)}</div>
            </div>
            <div className={'flex justify-between w-[90%] h-[60%]'}>
                <div>
                    <div>
                        <div>{origin + '-' + destination}</div>
                        <div>{timeOnTable(dateStart) + '-' + timeOnTable(dateEnd)}</div>
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
