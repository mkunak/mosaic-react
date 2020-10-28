import React from 'react';
import {Select} from 'react-materialize';

const THeadSelect = ({value, onChange}) => {
  return (
    <Select
      onChange={onChange}
      options={{
        classes: '',
        dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
        }
      }}
      value={value}>
      <option disabled value="0">Sort by</option>
      <option value="1">Day</option>
      <option value="2">Month</option>
    </Select>);
};

export default THeadSelect;
