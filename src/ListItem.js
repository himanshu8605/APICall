import axios from "axios";
import React, { Component } from "react";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
   
        {data.length ? (
          data.map((res) => (
            <div key={res.id}>
              <h6>{res.title}</h6>
            </div>
          ))
        ) : (
          <h1>No Record Found</h1>
        )
        }
     
      </div>
    );
  }
}
