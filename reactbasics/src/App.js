import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilders from "./Containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  // So I will first make layout in simple react and then embedd nodejs and express js as backend;
  // Sounds pretty cool though;
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilders />
        </Layout>
      </div>
    );
  }
}

export default App;
