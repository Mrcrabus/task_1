import React from 'react';
import {Formik, Field, Form} from 'formik';


interface State {
    picked: "All" | "S7 Airlines" | "XiamenAir";
}


const FilterByCompany = () => {

    const initialValues: State = {picked: 'All'};

    return (
        <div className={'mt-[20px]'}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values)}>
                {({values}) => (
                    <Form
                        className={' border-solid border-2 drop-shadow-lg flex items-center justify-center rounded-md bg-white w-[232px] h-[177px]'}>

                        <div className={'flex flex-col justify-start w-[70%] h-[100%] '} role="group"
                             aria-labelledby="my-radio-group">
                            <div className={'flex flex-col items-start justify-evenly h-[100%]  '}>
                                <div>Компании</div>
                                <label>
                                    <Field type="radio" name="picked" value="All"/>
                                    Все
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="S7 Airlines"/>
                                    S7 Airlines
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="XiamenAir"/>
                                    XiamenAir
                                </label>
                                <button className={'border-solid border-2 rounded-md p-1 bg-blue-500 text-white'}
                                        type="submit">Применить
                                </button>
                            </div>
                            {/*<div>Picked: {values.picked}</div>*/}
                        </div>


                    </Form>
                )}

            </Formik>
        </div>

    )
        ;
};

export default FilterByCompany;
