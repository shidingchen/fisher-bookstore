import React, { Component} from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id:2,
                    title: "Accelerate",
                    author:"Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id:3,
                    title: "Kobe:Forever",
                    author:"Los Angeles Daily News",
                    isbn: "978-1629378503"
                },
                {
                    id:4,
                    title: "Lost",
                    author:"James Patterson",
                    isbn: "978-0316420327"
                },
                {
                    id:5,
                    title: "Before I Met You:A Novel",
                    author:"Lisa Jewell",
                    isbn: "978-1476702940"
                },
                {
                    id:6,
                    title: "Fatal:A Novel",
                    author:"John Lescroart",
                    isbn: "978-1501115684"
                },
                {
                    id:7,
                    title: "Dead Letters",
                    author:"Caite Dolan-Leach",
                    isbn: "978-0399588877"
                },
                {
                    id:8,
                    title: "Magnolia City",
                    author:"Duncan W.Alderson",
                    isbn: "978-0758292759"
                }
            ]
        }
    };

render(){
    return(
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
}
}