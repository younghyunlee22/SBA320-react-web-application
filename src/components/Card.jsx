const Card = ({ data }) => {
  return (
    <div className="apod-card">
      <img className="apod-image" src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.date}</p>
    </div>
  );
};

export default Card;
