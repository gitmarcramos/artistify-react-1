import React, { Component } from 'react'

import handler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "color"];

export default class StylesAdmin extends Component {
    state = {
        styles: []
      };
    
      async componentDidMount() {
        console.log(handler);
        const x = await handler.get("/api/styles");
        console.log(x);
        this.setState({
          styles: x.data
        })
      }
    
      render() {
        return (
          <div className="styles-list-wrap">
            <h1>Admin styles+</h1>
            <Table data={this.state.styles} columns={columns}></Table>
          </div>
        );
      }
}
