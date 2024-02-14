
const SelectedCard = ({ selectedCard, onGoBack }) => {
  return (
    <div className="apod-details">
      <img
        className="apod-image"
        src={selectedCard.url}
        alt={selectedCard.title}
      />
      {selectedCard.copyRight && <p>&copy; {selectedCard.copyRight}</p>}
      <h2>{selectedCard.title}</h2>
      <p>{selectedCard.date}</p>
      <p className="apod-explanation">{selectedCard.explanation}</p>
      <button className="go-back" onClick={onGoBack}>Go Back to List</button>
    </div>
  );
}

export default SelectedCard;