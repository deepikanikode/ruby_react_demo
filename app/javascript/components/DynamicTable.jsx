import React, { Component } from "react";
import Up from 'images/sort-up.png'
import UpDown from 'images/sort-up-down.png'
import Down from 'images/sort-down.png'

class DynamicTable extends Component {
  state = {
    data: null,
    isSortAsc: null,
    previousKey: null
  };

  componentDidMount() {
    this.setState({ data: this.props.tableData });
  }

  sortData(currentKey) {
    const { previousKey, isSortAsc } = this.state;
    const { tableData } = this.props;

    const items = [...tableData];
    let updatedSortDirection = null;
    let updatedKey = null;

    if (previousKey !== currentKey) {
      items.sort((next, prev) =>
        next[currentKey].localeCompare(prev[currentKey])
      );
      updatedSortDirection = true;
      updatedKey = currentKey;
    } else if (previousKey === currentKey && isSortAsc === true) {
      items.sort((next, prev) =>
        prev[currentKey].localeCompare(next[currentKey])
      );
      updatedSortDirection = false;
      updatedKey = currentKey;
    }

    this.setState({
      isSortAsc: updatedSortDirection,
      data: items,
      previousKey: updatedKey
    });
  }

  getKeys() {
    const { data } = this.state;
    return Object.keys(data[0]);
  }

  renderHeaderRow() {
    const { isSortAsc, previousKey } = this.state;
    const keys = this.getKeys();

    return keys.map((key, index) => {
      const iconClass = previousKey !== key ? "upDown-arrow" : null;
      const iconSrc =
        previousKey === key ? (isSortAsc === true ? Up : Down) : UpDown;

      return (
        <th
          onClick={() => this.sortData(key)}
          key={index}
          className="table-header"
        >
          {key.toUpperCase()}
          <img className={iconClass} src={iconSrc} alt="" />
        </th>
      );
    });
  }

  renderTableBody() {
    const { data } = this.state;
    const keys = this.getKeys();

    return data.map((row, index) => (
      <tr key={index}>
        {keys.map((key, index) => (
          <td key={index}>{row[key]}</td>
        ))}
      </tr>
    ));
  }

  render() {
    return (
      this.state.data && (
        <>
          <table className="d-table">
            <thead>
              <tr>{this.renderHeaderRow()}</tr>
            </thead>
            <tbody>{this.renderTableBody()}</tbody>
          </table>
        </>
      )
    );
  }
}

export default DynamicTable;
