import React from 'react';
import {Formik, Field, Form} from 'formik';


interface State {
    checked: Array<string>;
}

const FilterByStops = () => {

    const initialValues: State = {checked: []};

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values.checked)}
            >
                {({values}) => (
                    <Form
                        className={' border-solid border-2 drop-shadow-lg flex items-center justify-center rounded-md bg-white w-[232px] h-[177px]'}>

                        <div className={'flex flex-col justify-center h-[100%] '} role="group"
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
                            <button type="submit">Submit</button>
                        </div>


                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default FilterByStops;
