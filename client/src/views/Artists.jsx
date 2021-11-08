import React, { Component } from "react";
// custom tools
import APIHandler from "../api/handler";
import LabPreview from "../components/preview/LabPreview";
import ArtistCard from "../components/ArtistCard";
import List from "../components/List";
// styles
import "../styles/card.css";

export default class Artists extends Component {
  state = {
    artists: []
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

  componentDidMount() {
    this.fetchArtists();
  };

  render() {
    const {artists} = this.state;
    return (
      <div className="artists-list-wrap">
        <h1>All artists</h1>
        <List data={artists} Component={ArtistCard}/>
        <LabPreview name="artists"/>

      </div>
    );
  }
}
