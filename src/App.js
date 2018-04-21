import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {

  state = {
    friends,
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
};

  render() {
    return (
      <Wrapper>
        <Counter
          count={this.state.count} 
          handleIncrement={this.handleIncrement}
        />
        <Title>Basketball Players</Title>
        {this.state.friends.map(friend => (
          <PlayerCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
