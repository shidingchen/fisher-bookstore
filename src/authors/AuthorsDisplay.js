import React from "react";
import { Authorscard } from "./Authorscard";
import { CardColumns } from "react-bootstrap";

export function AuthorsDisplay(props){
    return(
        <div className="display">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(b => (
                    <Authorscard author={b} key={b.id} />
                ))}
            </CardColumns>
        </div>
    );
}