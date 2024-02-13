import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApodData } from "./apodSlice";

const ApodItem = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apod);

  useEffect(() => {
    try {
        dispatch(fetchApodData());
      } catch (err) {
      console.log(err)}
    }, [dispatch]
  )

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
