import React, { Component } from 'react';
import axios from 'axios';
import Gif from '../../components/gif/Gif';

export default class SearchBar extends Component {
  state = { text: '', giphys: [] };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  getGiphy = async () => {
    await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.text}$limit=12`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ giphys: res.data.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { giphys } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={() => this.getGiphy()}>Search</button>
        {giphys.map((giphy) => {
          return <Gif title={giphy.title} url={giphy.images.fixed_width.url} />;
        })}
      </div>
    );
  }
}
