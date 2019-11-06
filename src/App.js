import React, {Component} from 'react';
import Quote from "./components/quotes";
import './App.css';

class App extends Component {
  state = {
    category: "dev"
  };

  changeCategory = () => {
    this.setState({
      
    });
  }

  render() {
    const {category} = this.state;
  return (
    <div className="App">
          <Quote category="dev"/>
          <br />
          <select onChange={() => this.changeCategory()}>
          </select>
    </div>
  );
}
}
// response.forEach(function(category) {
//   const categoryOption = document.createElement("option");
//   categoryOption.text = category;
//   categoryOption.value = category;
//   categoryList.append(categoryOption);

export default App;
