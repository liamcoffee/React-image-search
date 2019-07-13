import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // ARROW Function is needed so that $this works correctly, in legacy apps it was fixed by defining $this in the constructor function!
  //   An alternate way is to use (and invoke (); ) an arrow function with the onSubmit, make sure to pass the event!
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for image"
            className="field"
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
