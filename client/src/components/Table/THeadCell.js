import React from 'react';
import {Link} from "react-router-dom";
import THeadSelect from "./THeadSelect";


const THeadCell = ({styles, item, tfoot, value, onSortChange, onSelectChange}) => {
  return (
    <th>
      <div className={`${styles.flexBetween} ${styles.pr1}`}>
        <p className={`${styles.flexCenter}`}>{item}</p>
        {item !== 'birthday_contact' || tfoot
          ? null
          :
          <THeadSelect value={value} onChange={onSelectChange}/>
          // <div className={`${styles.px0} input-field`}>
          //   <select defaultValue="" onChange={onSelectChange}>
          //     <option value="" disabled>Sort by</option>
          //     <option value="1">Day</option>
          //     <option value="2">Month</option>
          //     <option value="3">Default</option>
          //   </select>
          // </div>
        }
        {tfoot
          ? null
          : <div className={`${styles.flexVertical}`}>
            <Link to="/" onClick={() => onSortChange(item, 'sortZA')}
                  className={`${styles.p0} ${styles.sortBtnHeight} waves-effect waves-light btn red lighten-3`}>
              <i className="material-icons">change_history</i>
            </Link>
            <Link to="/" onClick={() => onSortChange(item, 'sortAZ')}
                  className={`${styles.p0} ${styles.sortBtnHeight} waves-effect waves-light btn red lighten-3`}>
              <i className="material-icons">details</i>
            </Link>
          </div>}
      </div>
    </th>
  )
};

export default THeadCell;
