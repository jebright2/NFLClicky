import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    score: 0,
    highscore: 0
  };

 gameOver = () => {
   if (this.state.score > this.state.highscore) {
     this.setState({highscore: this.state.score}, function() {
       console.log(this.state.highscore);
     });
   }
   this.state.friends.forEach(card => {
     card.count = 0;
   });
   alert(`Game Over! Select team logo to start the game. \nscore: ${this.state.score}`);
   this.setState({score: 0});
   return true;
 }

 clickCount = id => {
   this.state.friends.find((f, i) => {
     if (f.id === id) {
       if (friends[i].count === 0) {
         friends[i].count = friends[i].count + 1;
         this.setState({score: this.state.score + 1}, function() {
           console.log(this.state.score);
         });
         this.state.friends.sort (() => Math.random() - 0.5)
         return true;
       } else {
         this.gameOver();
       }
     }
   });
 }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game: Select each team once!</Header>
        {this.state.friends.map(card => (
          <FriendCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
