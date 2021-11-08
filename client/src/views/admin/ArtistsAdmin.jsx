import React, { Component } from "react";
import APIHandler from "../../api/handler";
import Table from "../../components/Table";

const columns = ["name", "release", "rates"];

export default class ArtistsAdmin extends Component {
  state = {
    artists: [],
  };

  fetchArtists = async () => {
    APIHandler.get("/api/artists")
      .then(({ data }) => {
        this.setState({
          artists: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handler = async (id, option) => {
    try {
      if (option === "delete") {
        await APIHandler.delete(`api/artists/${id}`);
        this.fetchArtists();
      }
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchArtists();
  }

  render() {
    return (
      <div className="artists-list-wrap">
        <h1>Admin artists+</h1>
        <Table
          data={this.state.artists}
          columns={columns}
          handler={this.handler}
        ></Table>
      </div>
    );
  }
}
