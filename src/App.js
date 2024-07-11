import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'MARIEM jEMMALI',
        bio: 'A software Developer from Tunisia.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer'
      },
      shows: false,
      mountedAt: new Date()
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, mountedAt } = this.state;
    const timeElapsed = Math.floor((new Date() - mountedAt) / 1000);

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;