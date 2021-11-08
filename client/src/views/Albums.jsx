import React, { Component } from "react";
// custom tools
import handler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
import AlbumCard from "../components/AlbumCard";
import List from "../components/List";
// styles
import "../styles/card.css";
import "../styles/icon-favorite.css";

export default class Albums extends Component {
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
        <h1>All albums</h1>
        <List data={this.state.albums} Component={AlbumCard}></List>
        <LabPreview name="albums" />
      </div>
    );
  }
}
