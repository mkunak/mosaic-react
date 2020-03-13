import React, {Component} from 'react';
import uuid from 'react-uuid';

import THeadCell from './THeadCell';
import TBodyRows from "./TBodyRows";

import {getArrayFromObjectKeys} from '../../utils/getArrayFromObjectKeys';
import s from './Table.module.scss';

class Table extends Component {
  state = {
    birthdaySortType: '3',
    sortFn: undefined,
    sortType: '',
    colName: ''
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    const {colName, sortType, birthdaySortType} = this.state;
    if (prevState.birthdaySortType !== birthdaySortType) {
      this.onSortChange(colName, sortType);
    }
  }
  
  onSortChange = (colName, sortType) => {
    const {birthdaySortType} = this.state;
    let sortFn;
    
    if (colName.toLowerCase() === 'birthday_contact') {
      if (birthdaySortType === '1') {
        sortFn = (a, b) => {
          const dateA = Number(a[colName].split('-')[2]);
          const dateB = Number(b[colName].split('-')[2]);
          
          if (sortType === "sortAZ") return dateA - dateB;
          if (sortType === "sortZA") return dateB - dateA;
          return 0;
        };
      }
      
      if (birthdaySortType === '2') {
        sortFn = (a, b) => {
          const dateA = Number(a[colName].split('-')[1]);
          const dateB = Number(b[colName].split('-')[1]);
          
          if (sortType === "sortAZ") return dateA - dateB;
          if (sortType === "sortZA") return dateB - dateA;
          return 0;
        };
      }
      
      if (birthdaySortType === '3') {
        sortFn = (a, b) => {
          const dateA = Date.parse(a[colName]);
          const dateB = Date.parse(b[colName]);
          
          if (sortType === "sortAZ") return dateA - dateB;
          if (sortType === "sortZA") return dateB - dateA;
          return 0;
        };
      }
    } else if (colName.toLowerCase() === 'phonenumber') {
      sortFn = (a, b) => {
        if (sortType === "sortAZ") return +a[colName] - +b[colName];
        if (sortType === "sortZA") return +b[colName] - +a[colName];
      };
    } else {
      sortFn = (a, b) => {
        if (sortType === "sortAZ") {
          if (a[colName] > b[colName]) return 1;
          if (a[colName] < b[colName]) return -1;
          return 0;
        }
        
        if (sortType === "sortZA") {
          if (b[colName] > a[colName]) return 1;
          if (b[colName] < a[colName]) return -1;
          return 0;
        }
      }
    }
    
    this.setState({sortFn, colName, sortType});
  };
  
  onSelectChange = (e) => {
    this.setState({birthdaySortType: e.target.value});
  };
  
  render() {
    const data = this.props.data.map((item) => {
      delete item._id;
      return item;
    });
    
    const {sortFn, birthdaySortType} = this.state;
    
    const tHeadContent = getArrayFromObjectKeys(data[0]);
    const tableHead = tHeadContent.map((item) => {
      return (
        <THeadCell
          key={uuid()}
          styles={s}
          item={item}
          value={birthdaySortType}
          onSortChange={this.onSortChange}
          onSelectChange={this.onSelectChange}/>
      );
    });
    
    const tableFoot = tHeadContent.map((item) => {
      return (
        <THeadCell key={uuid()} styles={s} item={item} tfoot/>
      );
    });
    
    return (
      <>
        <table className="highlight">
          <thead>
          <tr className={s.textCapitalize}>
            {tableHead}
          </tr>
          </thead>
          
          <tfoot>
          <tr className={s.textCapitalize}>
            {tableFoot}
          </tr>
          </tfoot>
          
          <tbody>
          <TBodyRows data={data.sort(sortFn)}/>
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
