// ApodItem.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "./apodSlice";
import DateSelection from "./DateSelection"; // Import DateSelection component

const ApodItem = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apod);
  
  // State for startDate and endDate
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Function to handle date change
  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchApodData({ startDate, endDate }));
        // Handle successful data fetching
      } catch (err) {
        // Handle errors
      }
    };

    fetchData(); // Call fetchData on every change
  }, [startDate, endDate, dispatch]);

  return (
    <div>
      <DateSelection onDateChange={handleDateChange} /> <br />
      <img className="apod-image" src={data.url} alt={data.title} />
      <p> &copy; {data.copyright}</p>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p className="apod-explanation">{data.explanation}</p>
    </div>
  );
};

export default ApodItem;
