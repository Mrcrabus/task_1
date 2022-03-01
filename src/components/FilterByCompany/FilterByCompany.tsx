import React from 'react';
import {Card, Form} from "react-bootstrap";

const FilterByCompany = () => {
    return (
        <Card
            className={'d-flex flex-column justify-content-center align-items-start '}
            style={{width: 232, height: 177, borderRadius: 5}}

        >

            <Form>

                <div className={'d-flex flex-column  justify-content-around'}
                     style={{width: 232, height: 177, padding: 30}}

                     key={`inline-radio`}

                >
                    Компания
                    <Form.Check
                        inline
                        label="Все"
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        inline
                        label="S7 Airlines"
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-2`}
                    />
                    <Form.Check
                        inline
                        name="group1"
                        label="XiamenAir"
                        type={'radio'}
                        id={`inline-radio-3`}
                    />
                </div>

            </Form>


        </Card>
    );
};

export default FilterByCompany;
