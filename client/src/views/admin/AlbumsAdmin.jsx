import React, { Component } from "react";
import APIHandler from "../../api/handler";
import Table from "../../components/Table";
// styles
import "../../styles/card.css";
import "../../styles/icon-favorite.css";

const columns = ["artist.name", "release", "rates"];

export default class AlbumsAdmin extends Component {
  state = {
    albums: [],
  };

  fetchAlbums = async () => {
    APIHandler.get("/api/albums")
      .then(({ data }) => {
        this.setState({
          albums: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handler = async (id, option) => {
    try {
      if (option === "delete") {
        await APIHandler.delete(`api/albums/${id}`);
        this.fetchAlbums();
      }
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchAlbums();
  }

  render() {
    return (
      <div className="albums-list-wrap">
        <h1>Admin albums+</h1>
        <Table
          data={this.state.albums}
          columns={columns}
          handler={this.handler}
        ></Table>
      </div>
    );
  }
}
