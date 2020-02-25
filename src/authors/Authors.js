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
                    name: "Eric Evans",
                    country: "United States",
                },
                {
                    id:2,
                    name: "Duncan W.Alderson",
                    country:"United States",
                },
                {
                    id:3,
                    name: "Xun LU",
                    country:"China",
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