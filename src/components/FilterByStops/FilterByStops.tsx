import React from 'react';
import {Formik, Field, Form} from 'formik';
import {useDispatch} from "react-redux";
import {segmentsState} from "../../store/reducers/segmentsReducer";


interface State {
    checked: Array<string>;
}

const FilterByStops = () => {

    let dispatch = useDispatch()

    const initialValues: State = {checked: []};


    return (
        <div>
            <Formik
                initialValues={initialValues}
                // @ts-ignore
                onSubmit={() => dispatch(segmentsState(1))}
            >
                {({values}) => (
                    <Form
                        className={' border-solid border-2 drop-shadow-lg flex items-center justify-center rounded-md bg-white w-[232px] h-[177px]'}>

                        <div className={'flex flex-col items-start justify-evenly whitespace-nowrap w-[70%] h-[100%] '} role="group"
                             aria-labelledby="checkbox-group">
                            <div>Количество пересадок</div>
                            <label>
                                <Field type="checkbox" name="checked" value="Without"/>
                                Без пересадок
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="One"/>
                                1 пересадка
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Two"/>
                                2 пересадки
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Three"/>
                                3 пересадки
                            </label>
                            <button className={'border-solid border-2 rounded-md p-1 bg-blue-500 text-white'} type="submit">Применить</button>
                        </div>


                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default FilterByStops;
