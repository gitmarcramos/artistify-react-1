import React, { Component } from 'react'
import handler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "release", "rates"];

export default class ArtistsAdmin extends Component {
    state = {
        artists: []
      };
    
      async componentDidMount() {
        console.log(handler);
        const x = await handler.get("/api/artists");
        console.log(x);
        this.setState({
          artists: x.data
        })
      }
    
      render() {
        return (
          <div className="artists-list-wrap">
            <h1>Admin artists+</h1>
            <Table data={this.state.artists} columns={columns}></Table>
          </div>
        );
      }
}
