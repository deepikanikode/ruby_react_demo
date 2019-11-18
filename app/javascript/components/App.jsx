import React, { Component } from "react";
import DynamicTable from "./DynamicTable";
import getData from "./Service";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await getData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        {data ? <DynamicTable tableData={data} /> : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;
