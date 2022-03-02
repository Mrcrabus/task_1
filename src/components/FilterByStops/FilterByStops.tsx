import React from 'react';
import { Formik, Field, Form } from 'formik';

const FilterByStops = () => {
    return (
        <Card
            className={' '}
            style={{width: 232, height: 227, borderRadius: 5}}
        >

            <Form>

                <div key={`default-checkbox`} className={'d-flex flex-column  justify-content-around'}
                     style={{width: 232, height: 177, padding: 30}}>
                    <h6 className={'text-nowrap'}>Количество пересадок</h6>
                    <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`Без пересадок`}
                    />
                    <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`1 пересадка`}
                    />
                    <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`2 пересадки`}
                    />
                    <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`3 пересадки`}
                    />

                </div>

            </Form>


        </Card>
    );
};

export default FilterByStops;
