// DatePickerComponent.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onDateChange, disabled }) => { //, start
  const [startDate, setStartDate] = useState(new Date()); //start
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date) => {
    setStartDate(date);
    setIsOpen(false); // Close the calendar after selecting a date
    onDateChange(date); // Pass the selected date back to the parent
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior of button
    setIsOpen(!isOpen); // Toggle the DatePicker visibility
  };

  return (
    <>
      <button className="example-custom-input" onClick={handleClick} disabled={disabled}>
        {disabled ? "DD-MM-YYYY" : format(startDate, "dd-MM-yyyy")}
      </button>

      {isOpen && (
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          inline
        />
      )}

      {/* Display the selected date */}
      {/* <p>Currently selected date: {format(startDate, "dd-MM-yyyy")}</p> */}
    </>
  );
};

export default DatePickerComponent;
