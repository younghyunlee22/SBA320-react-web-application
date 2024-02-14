import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "./apodSlice";
import DateSelection from "./DateSelection";
import Card from "../../components/Card";
import SelectedCard from "../../components/SelectedCard";

const ApodItem = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apod);
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setSelectedCard(null); // Reset selectedCard when date changes
  };

  const handleCardClick = (apodData) => {
    setSelectedCard(apodData);
  };

  const handleGoBack = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApodData({ startDate, endDate }));
        setSelectedCard(null); // Reset selectedCard after fetching new data
      } catch (err) {
        console.log(err)
      }
    };

    fetchData(); // Call fetchData on every change
  }, [startDate, endDate, dispatch]);

  return (
    <>
      <DateSelection onDateChange={handleDateChange} /> <br />
      <p>Select a date or a date range to see the Astronomy Picture of the Day</p>
      <p>Click to see the picture in detail</p>
      <div className="apod-item">
      {selectedCard ? (
        <SelectedCard selectedCard={selectedCard} onGoBack={handleGoBack} />
      ) : (
        Array.isArray(data) ? (
          // If data is an array, map through it and render cards
          data.map((apodData) => (
            <div
              key={apodData.date}
              className="apod-card"
              onClick={() => handleCardClick(apodData)}
            >
              <Card data={apodData} />
            </div>
          ))
        ) : (
          // If data is not an array, render a single card
          <div
            className="apod-card"
            onClick={() => handleCardClick(data)}
          >
            <Card data={data} />
          </div>
        )
      )}
    </div>
    </>
  );
};


export default ApodItem;
