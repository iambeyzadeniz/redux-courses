import React from "react";
import { useSelector } from "react-redux";

function CourseValue(props) {


  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) =>
    // debugger; STATE İÇİNDE CURSES VE FORM VAR 
    data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, course) => acc + course.cost, 0)


  );

  return <div className="coursePrice">Toplam Tutar : {totalCost} TL</div>;
}

export default CourseValue;
