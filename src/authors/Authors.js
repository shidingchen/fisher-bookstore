import React, { useEffect, useState } from "react";
import { AuthorDisplay } from "./AuthorDisplay";
import "./Authors.css"

export default function Authors (props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5001/api/authors/")
      .then(response => response.json())
      .then(data => setData(data));
    }, []);

    return (
      <div className="Authors">
        <div className="lander">
          <AuthorDisplay Authors={data} />
        </div>
      </div>
    ); 
}