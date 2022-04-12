import React, {FC} from 'react';
import {Ticket} from '../../../types/interfaces';
import companies from '../../../constants/companies.json';


import {Logo} from '../../../constants/logo'
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Item: FC<Ticket> = ({id, price, companyId, segments}) => {


    const Segments = useTypedSelector(state => state.segments);

    // const price = (id: string) => {
    //     return {...tickets.find(el => el.segments.includes(id))}.price
    // }

    const findSegment = () => {
        return segments.map(segment => Segments.find(el => el.id == segment))
    }
    let items = findSegment()

    console.log(items)

    const company = (id: string) => {
        return {
            ...companies.find(company =>
                company.id === companyId)
        }
    }


    const timeOnTable = (time: any) => {
        let date = new Date(time)
        return date.toLocaleString('ru-RU',
            {timeZone: 'UTC', hourCycle: 'h23', hour: "2-digit", minute: "2-digit"})
    }

    const durationTime = (time: any) => {
        return (time / 60000) / 60 + "ч " + (time / 60000) % 60 + "мин"
    }

    const stopsHandler = (stops: any) => {

        if (stops.length == 0) {
            return 'Без пересадок'
        } else if (stops.length == 1) {
            return '1 пересадка'
        } else return `${stops.length} пересадки`
    }


    return (
        <div
            className={'border-solid border-2 drop-shadow-lg flex flex-col items-center justify-evenly py-8 rounded-md bg-white m-[20px] w-[502px] min-h-[160px]'}>
            <div className={'flex justify-between items-center w-[90%] h-[40%]'}>
                <div className={'text-blue-600 text-2xl'}>{price} P</div>
                <div>{company(id).name}</div>
            </div>

            <div className={'w-[90%] h-[60%]'}>
                <div>
                    {items.map((segment, i) =>
                        <div key={i} className={'flex items-center justify-between w-full border-t-2 border-gray-300'}>
                            <div>
                                <div className={'text-neutral-400'}>{segment?.origin} - {segment?.destination}</div>
                                <div>{timeOnTable(segment?.dateStart)} - {timeOnTable(segment?.dateEnd)}</div>
                            </div>
                            <div>
                                <div className={'text-neutral-400'}>В пути</div>
                                <div>{durationTime(segment?.duration)}</div>
                            </div>
                            <div>
                                <div className={'text-neutral-400'}>{stopsHandler(segment?.stops)}</div>
                                <div>{segment?.stops.join(',')}</div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Item;
