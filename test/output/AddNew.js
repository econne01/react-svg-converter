import { Component } from 'react';

export default class AddNewIcon extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={this.props.style}><path d="M17 9h-2v6H9v2h6v6h2v-6h6v-2h-6"/><path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm0 26C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z"/></svg>
    );
  }
}