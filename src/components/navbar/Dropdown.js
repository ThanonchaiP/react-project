import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const studentMenuItem = [
  {
    title: "ข้อมูลนีกเรียน",
    path: "",
    cName: "dropdown-link",
  },
  {
    title: "ข้อมูลนีกเรียนรายบุคคล",
    path: "",
    cName: "dropdown-link",
  },
  {
    title: "เพิ่มข้อมูลนีกเรียน",
    path: "",
    cName: "dropdown-link",
  },
];

const Dropdown = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
      >
        {studentMenuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="sub-dropdown"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
