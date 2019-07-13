import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 6c273cebce0473d11dc06bcddf2175aeec32470e7d236072c878f7bd981a025c"
      }
    });
    // older way of call back, instead using async await!
    //   .then(response => {
    //     // callbacck
    //     console.log(response.data.results);
    //   });
    console.log(response.data.results);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
