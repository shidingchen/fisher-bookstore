import React, { Component} from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay";


export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    firstname: "Domain Driven Design",
                    lastname: "Eric Evans",
                },
                {
                    id:8,
                    firstname: "Magnolia City",
                    lastname:"Duncan W.Alderson",
                }
            ]
        }
    };

render(){
    return(
        <div className="Authors">
            <div className="lander">
                <AuthorsDisplay authors={this.state.authors} />
            </div>
        </div>
    );
}
}