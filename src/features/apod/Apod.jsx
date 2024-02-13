import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "./apodSlice";

const ApodItem = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    dispatch(fetchApodData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <img className="apod-image" src={data.url} alt={data.title} />
      <p> &copy; {data.copyright}</p>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p className="apod-explanation">{data.explanation}</p>
      
    </div>
  );
};

export default ApodItem;
