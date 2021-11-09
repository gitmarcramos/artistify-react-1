import React from "react";
import APIHandler from "./../../api/handler";
import AlbumsAdmin from "./AlbumsAdmin";
import ArtistsAdmin from "./ArtistsAdmin";
import LabelsAdmin from "./LabelsAdmin";
import StylesAdmin from "./StylesAdmin";


export default class GeneralAdmin extends React.Component {
  state = {
    data: [],
    isLoading: false
  };

  fetchData = async () => {
    APIHandler.get("/api/" + this.props.match.params.type)
      .then(({ data }) => {
        this.setState({
          data: data,
          isLoading: false
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  deleteHandler = async (id) => {
    try {
        await APIHandler.delete(`/api/${this.props.match.params.type}/${id}`);
        this.fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.type !== prevProps.match.params.type) {
      this.setState({
        isLoading: true
      })
       this.fetchData();
    }
  }

  render() {
    console.log(this.state.data)
    console.log(this.state.isLoading)
    if (this.state.isLoading) return (<div>Sorry, no data yet ...</div>)
    return (
      <div>
        {
          {
            'albums': <AlbumsAdmin data={this.state.data} deleteHandler={this.deleteHandler} />,
            'artists': <ArtistsAdmin data={this.state.data} deleteHandler={this.deleteHandler} />,
            'labels': <LabelsAdmin data={this.state.data} deleteHandler={this.deleteHandler} />,
            'styles': <StylesAdmin data={this.state.data} deleteHandler={this.deleteHandler} />,
          }[this.props.match.params.type]
        }
      </div>
    );
  }
}
