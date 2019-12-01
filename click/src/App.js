import React, {Component}from 'react';
import './App.css';
// import characters from "./characters.json";
import Title from "./component/Title";
import Wrapper from "./component/Wrapper"
import CharacterCard from "./component/CharacterCard"

class App extends Component {
  state = {
    CharacterCard
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {/* {this.state.CharacterCard.map(CharacterCard => ( */}
          <CharacterCard
            // id={characters.id}
            // name={characters.name}
            // image={this.state.CharacterCard.image}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;