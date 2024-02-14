import { useState } from 'react';

const DateSelection = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = (event) => {
    const { target: { name, value } } = event;
    if (name === 'startDate' || name === 'endDate') {
      // Format date to YYYY-MM-DD
      const formattedDate = new Date(value).toISOString().slice(0, 10);
      if (name === 'startDate') {
        setStartDate(formattedDate);
      } else if (name === 'endDate') {
        setEndDate((prevEndDate) => {
          onDateChange({ startDate, endDate: formattedDate });
          return formattedDate;
        });
      }
    }
  }; 

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        onChange={handleDateChange}
      />
      {" "}
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={endDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateSelection;