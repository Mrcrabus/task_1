import React from 'react';
import {Container, Card, Form} from "react-bootstrap";

const FilterByStops = () => {
    return (
        <Card
            className={'d-flex flex-column justify-content-center align-items-center border'}
            style={{width: 232, height: 227}}

        >
            Количество пересадок
            <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        <Form.Check
                            disabled
                            type={type}
                            label={`disabled ${type}`}
                            id={`disabled-default-${type}`}
                        />
                    </div>
                ))}
            </Form>


        </Card>
    );
};

export default FilterByStops;
