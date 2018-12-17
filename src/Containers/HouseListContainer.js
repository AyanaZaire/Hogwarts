import React from "react";
import HouseList from "./HouseList";
class HouseListContainer extends React.Component {
  state = {
    houses: ["Slytherin", "Gryffindor", "HufflePuff", "Ravenclaw"]
  };

  createHouses = () => {
    return this.state.houses.map(house => (
      <HouseList
        characters={this.props.characters}
        house={house}
        handleCharacterClick={this.props.handleCharacterClick}
      />
    ));
  };

  render() {
    return <div className="houseListContainer"> {this.createHouses()} </div>;
  }
}

export default HouseListContainer;
