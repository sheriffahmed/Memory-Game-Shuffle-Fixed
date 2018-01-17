import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.chosen = [
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/apple.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/clover.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/star.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/key.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/apple.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/clover.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/star.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/key.png"
    ];
    this.matchPic = [
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/apple.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/clover.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/star.png",
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/key.png"
    ];
    this.boxID = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight"
    ];
    this.src =
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/back.png";
    this.state = {
      one: this.src,
      two: this.src,
      three: this.src,
      four: this.src,
      five: this.src,
      six: this.src,
      seven: this.src,
      eight: this.src,
      match: false
    };
  }

  randomPic = () => {
    document.querySelectorAll(`img`).forEach(ele =>
      this.setState({
        [ele.id]: this.src
      })
    );
    const shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    shuffle(this.chosen);
  };

  handleFlip = click => {
    document
      .querySelectorAll(`img`)
      .forEach(ele => (ele.src = this.state[ele.id]));

    if (
      click.target.src ===
      "https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/back.png"
    ) {
      this.setState({
        [click.target.id]: this.chosen[parseInt(click.target.name)]
      });
    } else {
      this.setState({
        [click.target.id]: this.src
      });
    }
  };


  render() {
    const { one, two, three, four, five, six, seven, eight } = this.state;


    return (
      <div>
        <h1>Memory Game</h1>

        <br />

        <div>
          <img
            id="one"
            src={one}
            name={0}
            onClick={this.handleFlip}
            alt={this.chosen[0]}
          />
          <img
            id="two"
            src={two}
            name={1}
            onClick={this.handleFlip}
            alt={this.chosen[1]}
          />
          <img
            id="three"
            src={three}
            name={2}
            onClick={this.handleFlip}
            alt={this.chosen[2]}
          />
          <img
            id="four"
            src={four}
            name={3}
            onClick={this.handleFlip}
            alt={this.chosen[3]}
          />
          <img
            id="five"
            src={five}
            name={4}
            onClick={this.handleFlip}
            alt={this.chosen[4]}
          />
          <img
            id="six"
            src={six}
            name={5}
            onClick={this.handleFlip}
            alt={this.chosen[5]}
          />
          <img
            id="seven"
            src={seven}
            name={6}
            onClick={this.handleFlip}
            alt={this.chosen[6]}
          />
          <img
            id="eight"
            src={eight}
            name={7}
            onClick={this.handleFlip}
            alt={this.chosen[7]}
          />
        </div>

        <button onClick={this.randomPic}>Start/Reset</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
