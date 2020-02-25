import React from "react";
import { Card } from "react-bootstrap";

export function Authorscard(props) {
    return(
        <Card style={{ width: "16em"}}>
        <Card.Body>
            <Card.Title>{props.author.firstname}</Card.Title>
            <Card.Text>Author: {props.author.lastname}</Card.Text>
        </Card.Body>
        </Card>
    );
}