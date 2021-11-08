import React, { Component } from 'react'
import APIHandler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "country", "city"];

export default class LabelsAdmin extends Component {
    state = {
        labels: []
      };
      
      fetchLabels = async () => {
        APIHandler.get("/api/labels")
          .then(({ data }) => {
            this.setState({
              labels: data,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      };

      handler = async (id, option) => {
        try {
          if (option === "delete") {
            await APIHandler.delete(`api/labels/${id}`);
            this.fetchLabels();
          }
        } catch (err) {
          console.error(err);
        }
      };    
    
      componentDidMount() {
        this.fetchLabels();
      }
    
      render() {
        return (
          <div className="labels-list-wrap">
            <h1>Admin labels+</h1>
            <Table data={this.state.labels} columns={columns} handler={this.handler}></Table>
          </div>
        );
      }
}
