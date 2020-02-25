import React from "react";
import { Card } from "react-bootstrap";

export function Authorscard(props) {
    return(
        <Card style={{ width: "16em"}}>
        <Card.Body>
            <Card.Title>{props.author.name}</Card.Title>
            <Card.Text>Country: {props.author.country}</Card.Text>
        </Card.Body>
        </Card>
    );
}