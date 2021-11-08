import React, { Component } from 'react'
import handler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "country", "city"];

export default class LabelsAdmin extends Component {
    state = {
        labels: []
      };
    
      async componentDidMount() {
        console.log(handler);
        const x = await handler.get("/api/labels");
        console.log(x);
        this.setState({
          labels: x.data
        })
      }
    
      render() {
        return (
          <div className="labels-list-wrap">
            <h1>Admin labels+</h1>
            <Table data={this.state.labels} columns={columns}></Table>
          </div>
        );
      }
}
