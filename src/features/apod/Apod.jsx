import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "./apodSlice";
import DateSelection from "./DateSelection";
import Card from "../../components/Card";

const ApodItem = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apod);
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApodData({ startDate, endDate }));
      } catch (err) {
        console.log(err)
      }
    };

    fetchData(); // Call fetchData on every change
  }, [startDate, endDate, dispatch]);

  return (
    <div>
      <DateSelection onDateChange={handleDateChange} /> <br />
      {/* <img className="apod-image" src={data.url} alt={data.title} />
      <p> &copy; {data.copyright}</p>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p className="apod-explanation">{data.explanation}</p> */}
        {Array.isArray(data) ? (
        // If data is an array, map through it and render cards
        data.map((apodData) => (
          <Card key={apodData.date} data={apodData} />
        ))
      ) : (
        // If data is not an array, render a single card
        <Card data={data} />
      )}
    </div>
  );
};

export default ApodItem;
