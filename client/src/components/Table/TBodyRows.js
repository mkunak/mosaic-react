import React from 'react';
import uuid from "react-uuid";

const TBodyRows = ({ data }) => {
  return data.map((item) => {
    const tds = [];
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        tds.push(<td key={uuid()}>{item[key]}</td>)
      }
    }

    return <tr key={uuid()}>{tds}</tr>;
  });
};

export default TBodyRows;
