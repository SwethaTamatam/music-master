import React, { Component } from "react";

export class Search extends Component {
    state = {artistQuery: ''}

    updateArtistQuery = (e) => {
        this.setState({artistQuery:e.target.value})
      };

      handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.searchArtist();
        }
      }

      searchArtist = ()=>{
        this.props.searchArtist(this.state.artistQuery);
      }
  render() {
    return (
      <div>
        <input
          placeholder="Search for an artist"
          onChange={this.updateArtistQuery}
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
