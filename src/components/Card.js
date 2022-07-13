const Card = ({ name, description, cardStyle, flickr_images, handleMouseDown }) => {

    return (
    <article className={cardStyle}>
      <div className="card" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}>
        <img src={flickr_images} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </article>
    );
  };
  
  export default Card;