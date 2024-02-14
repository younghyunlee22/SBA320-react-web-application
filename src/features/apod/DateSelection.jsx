import { useState } from 'react';

const DateSelection = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

   // toISOString() => YYYY-MM-DDTHH:mm:ss.sssZ
  const today = new Date().toISOString().slice(0, 10);
  const minDate = '1995-06-16';

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === 'startDate' || name === 'endDate') {
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
        min={minDate}
        max={today}
      />
      {" "}
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={endDate}
        onChange={handleDateChange}
        min={minDate}
        max={today}
      />
    </div>
  );
};

export default DateSelection;