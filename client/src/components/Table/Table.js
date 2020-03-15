import React, {Component} from "react";
import uuid from "react-uuid";

import THeadCell from "./THeadCell";
import TBodyRows from "./TBodyRows";

import {sortToolbox} from "../../utils/sortToolbox";
import {getArrayFromObjectKeys} from "../../utils/getArrayFromObjectKeys";

import s from "./Table.module.scss";

class Table extends Component {
  state = {
    btnBg: "",
    indx: null,
    colName: "",
    sortType: "",
    birthdaySortType: "0",
    currentSort: "default",
    sortFn: sortToolbox.sort.strings
  };
  
  componentDidUpdate(prevProps, prevState) {
    const {colName, sortType, birthdaySortType, indx} = this.state;
    if (prevState.birthdaySortType !== birthdaySortType) {
      this.onSortChange(colName, sortType);
    }
    
    if (prevState.indx !== indx) {
      this.onSortChange(colName, indx, "default");
    }
  }
  
  onSortChange = (colName, indx, sortType) => {
    const currentSort = sortType || this.state.currentSort;
    const {birthdaySortType} = this.state;
    let nextSort;
    
    const btns = document.querySelectorAll(".btn-sort");
    btns.forEach((elem, index) => {
      if (index === indx) {
        elem.classList.remove("red");
        elem.classList.add("red");
        this.setState({btnBg: "red", indx});
      }
    });
    
    if (currentSort === "ZA") nextSort = "AZ";
    else if (currentSort === "AZ") nextSort = "default";
    else if (currentSort === "default") nextSort = "ZA";
    
    this.setState({currentSort: nextSort});
    
    if (colName.toLowerCase() === "birthday_contact") {
      if (birthdaySortType === "1") {
        this.setState({sortFn: sortToolbox.sort.byDay, colName});
      } else if (birthdaySortType === "2") {
        this.setState({sortFn: sortToolbox.sort.byMonth, colName});
      } else {
        this.setState({sortFn: sortToolbox.sort.byDate, colName});
      }
    } else if (colName.toLowerCase() === "phonenumber") {
      this.setState({sortFn: sortToolbox.sort.numbers, colName});
    } else {
      this.setState({sortFn: sortToolbox.sort.strings, colName});
    }
  };
  
  onSelectChange = e => {
    this.setState({birthdaySortType: e.target.value});
  };
  
  render() {
    const data = this.props.allPersonnel.map(item => {
      delete item._id;
      return item;
    });
    
    const {
      indx,
      btnBg,
      sortFn,
      colName,
      currentSort,
      birthdaySortType
    } = this.state;
    
    const tHeadContent = getArrayFromObjectKeys(data[0]);
    const tableHead = tHeadContent.map((item, index) => {
      return (
        <THeadCell
          styles={s}
          item={item}
          key={uuid()}
          index={index}
          btnBg={index === indx ? btnBg : ""}
          icon={
            index === indx
              ? sortToolbox[currentSort].icon
              : sortToolbox["default"].icon
          }
          value={birthdaySortType}
          currentSort={currentSort}
          onSortChange={this.onSortChange}
          onSelectChange={this.onSelectChange}
        />
      );
    });
    
    const tableFoot = tHeadContent.map(item => {
      return <THeadCell key={uuid()} styles={s} item={item} tfoot/>;
    });
    
    return (
      <>
        <table className="highlight">
          <thead>
          <tr className={s.textCapitalize}>{tableHead}</tr>
          </thead>
          
          <tfoot>
          <tr className={s.textCapitalize}>{tableFoot}</tr>
          </tfoot>
          
          <tbody>
          <TBodyRows data={data.sort(sortFn(colName, currentSort))}/>
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
