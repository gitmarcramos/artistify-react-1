import React, { Component } from 'react'

import APIHandler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "color"];

export default class StylesAdmin extends Component {
    state = {
        styles: []
      };
    
      handler = async (id, option) => {
        try {
          if (option === "delete") {
            await APIHandler.delete(`api/styles/${id}`);
            this.fetchStyles();
          }
        } catch (err) {
          console.error(err);
        }
      };
    
      fetchStyles = async () => {
        APIHandler.get("/api/styles")
          .then(({ data }) => {
            this.setState({
              styles: data,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      };
    
      componentDidMount() {
        this.fetchStyles();
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
