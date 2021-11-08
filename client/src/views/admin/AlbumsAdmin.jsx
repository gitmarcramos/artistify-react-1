import React, { Component } from 'react'
import handler from "../../api/handler";
import Table from "../../components/Table";
// styles
import "../../styles/card.css";
import "../../styles/icon-favorite.css";

const columns = ["name", "style", "rates"];

export default class AlbumsAdmin extends Component {
    state = {
        albums: []
      };
    
      async componentDidMount() {
        console.log(handler);
        const x = await handler.get("/api/albums");
        console.log(x);
        this.setState({
          albums: x.data
        })
      }
    
      render() {
        return (
          <div className="albums-list-wrap">
            <h1>Admin albums+</h1>
            <Table data={this.state.albums} columns={columns}></Table>
          </div>
        );
      }
}
