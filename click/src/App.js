import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
// import Title from "./component/Title";
import Wrapper from "./component/Wrapper"
import Card from "./component/Card"

class App extends Component {
  state = {
    characters,
    score: 0,
    highscore: 0,
    chosenArray: [],
    alertMessage: "",
    shakeit: false
  };
  clickPic = id => {
    // this will rearrange card randomly
    const shuffledArray = this.shuffledArray(characters);
    this.setState({ characters: shuffledArray });
    if (this.state.chosenArray.includes(id)) {
      this.setState({ score: 0, chosenArray: [], alertMessage: "Incorrect Choice. Try Again.", shakeit: true })
    }
    else {
      this.setState({
        chosenArray: this.state.chosenArray.push([id]),
        score: this.state.score + 1,
        alertMessage: "Correct!",
        shakeit: false
      });
    }
    if(this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score})
      console.log({highscore: this.state.score})
    }
  }
  shuffledArray = (picArray) =>{
    for (let i= picArray.length -1; i > 0; i--){
      const k = Math.floor(Math.random()* (i+1));
    [picArray[i], picArray[k]] = [picArray[k], picArray[i]]
    }
    return picArray;
  }

  render() {
    return (
      <Wrapper>
        {this.state.characters.map(characters => (
          <Card
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;