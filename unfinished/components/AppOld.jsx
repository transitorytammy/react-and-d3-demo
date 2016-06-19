import React from 'react';

export default class App extends React.Component {
  render() {
    return <div>
      <AnimalShelter />
    </div>
  }
}

// class Cats extends React.Component {
//   state = {count: 0};
//
//   handleChange = () => {
//     const count = this.state.count + 1 ;
//     this.setState({count: count});
//   }
//
//   render() {
//     return <div>
//       <p>{this.state.count}</p>
//       <button onClick={this.handleChange}>More Cats </button>
//     </div>
//   }
// }


class AnimalShelter extends React.Component {
  state = {
    catCount: 0,
    dogCount: 0
  };

  handleChange = () => {
    const catCount = this.state.catCount + 1 ;
    const dogCount = this.state.dogCount + 1;
    this.setState({catCount: catCount, dogCount: dogCount});
  }

  render() {
    return <div>
      <AnimalShelterListing name="cats" count={this.state.catCount} />
      <AnimalShelterListing name="dog" count={this.state.dogCount} />
      <button onClick={this.handleChange}>More Animals </button>
    </div>
  }
}

class AnimalShelterListing extends React.Component {
  render() {
    return <p>Number of {this.props.name}: {this.props.count}</p>
  }
}
