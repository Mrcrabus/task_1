import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import {Segment} from '../../../types/interfaces'

const Item: FC<Segment> = ({id, origin, destination, dateStart, dateEnd, stops, duration}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{destination}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {dateStart}
                    {dateEnd}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Item;
