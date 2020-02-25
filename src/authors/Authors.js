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
                    name: "Domain Driven Design",
                    country: "Eric Evans",
                },
                {
                    id:2,
                    name: "Magnolia City",
                    country:"Duncan W.Alderson",
                },
                {
                    id: 3,
                    name: "Domain Driven Design",
                    country: "Eric Evans",
                },
                {
                    id: 4,
                    name: "Domain Driven Design",
                    country: "Eric Evans",
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