const Card = ({ data }) => {
  return (
    <div className="apod-card">
      <img className="apod-image" src={data.url} alt={data.title} />
      <p>&copy; {data.copyright}</p>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p className="apod-explanation">{data.explanation}</p>
    </div>
  );
};

export default Card;
