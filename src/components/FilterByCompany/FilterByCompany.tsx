import React from 'react';
import {Formik, Field, Form} from 'formik';


const FilterByCompany = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    picked: 'All',
                }}
                // onSubmit={async (values) => {
                //     await new Promise((r) => setTimeout(r, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }}
                onSubmit={values => console.log(values)}>
                {({values }) => (
                    <Form className={' border-solid border-2 drop-shadow-lg rounded bg-white w-[232px] h-[177px]'}>
                        <div id="my-radio-group">Компании</div>
                        <div className={'flex flex-col'} role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="picked" value="All" />
                                Все
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="First"/>
                                S7 Airlines
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="Second"/>
                                XiamenAir
                            </label>
                            <div>Picked: {values.picked}</div>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}

            </Formik>
        </div>
        // <div
        //     className={'d-flex flex-column justify-content-center align-items-start '}
        //     style={{width: 232, height: 177, borderRadius: 5}}
        //
        // >
        //
        //     <div>
        //
        //         <div className={'d-flex flex-column  justify-content-around'}
        //              style={{width: 232, height: 177, padding: 30}}
        //
        //              key={`inline-radio`}
        //
        //         >
        //             Компания
        //             <Form.Check
        //                 inline
        //                 label="Все"
        //                 name="group1"
        //                 type={'radio'}
        //                 id={`inline-radio-1`}
        //             />
        //             <Form.Check
        //                 inline
        //                 label="S7 Airlines"
        //                 name="group1"
        //                 type={'radio'}
        //                 id={`inline-radio-2`}
        //             />
        //             <Form.Check
        //                 inline
        //                 name="group1"
        //                 label="XiamenAir"
        //                 type={'radio'}
        //                 id={`inline-radio-3`}
        //             />
        //         </div>
        //
        //     </div>
        //
        //
        // </div>
    )
        ;
};

export default FilterByCompany;
