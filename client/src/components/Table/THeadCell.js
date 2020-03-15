import React from "react";
import { Link } from "react-router-dom";
import THeadSelect from "./THeadSelect";

const THeadCell = ({
  item,
  tfoot,
  value,
  icon,
  index,
  btnBg,
  styles,
  onSortChange,
  onSelectChange
}) => {
  return (
    <th>
      <div className={`${styles.flexBetween} ${styles.pr1}`}>
        <p className={`${styles.flexCenter}`}>{item}</p>
        {item !== "birthday_contact" || tfoot ? null : (
          <THeadSelect value={value} onChange={onSelectChange} />
        )}
        {tfoot ? null : (
          <div className={`${styles.flexVertical}`}>
            <Link
              to="/"
              onClick={() => onSortChange(item, index)}
              className={`${styles.p0} ${styles.sortBtnHeight} ${styles.flexVerticalCenter} ${btnBg} btn-sort waves-effect waves-light btn lighten-3`}
            >
              <i className="material-icons">{icon}</i>
            </Link>
            {/* <Link
              to="/"
              onClick={() => onSortChange(item, "sortZA", index)}
              className={`${styles.p0} ${styles.sortBtnHeight} btn-sortZA waves-effect waves-light red btn lighten-3`}
            >
              <i className="material-icons">details</i>
            </Link> */}
          </div>
        )}
      </div>
    </th>
  );
};

export default THeadCell;
