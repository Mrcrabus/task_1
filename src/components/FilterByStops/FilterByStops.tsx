import React from 'react';
import {Container, Card, Form} from "react-bootstrap";

const FilterByStops = () => {
    return (
        <Card
            className={'d-flex flex-column justify-content-center align-items-center '}
            style={{width: 232, height: 227}}

        >
            Количество пересадок
            <Form>

                <div key={`default-checkbox`} className="mb-3">
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
