import { useState } from "react";
import "animate.css";
import "boxicons/dist/boxicons";
function Card({ card, onCardClick }) {
  const [animationClass, setAnimationClass] = useState("");
  const handleFlip = () => {
    setAnimationClass(card.flipped ? "animate__flipOutY" : "animate__flipInY");
    setTimeout(() => {
      setAnimationClass("");
    }, 600);
    onCardClick(card);
  };

  return (
    <div
      className={`card animate__animated ${animationClass}`}
      onClick={handleFlip}
      disabled={card.flipped || card.matched}
    >
      <div
        className={`card_img_container ${card.flipped ? "flipped" : ""}${
          card.matched ? "flipped" : ""
        }`}
      >
        {card.flipped ? (
          <img src={card.imageUrl} alt={card.name} />
        ) : (
          <box-icon name="question-mark" size="lg" color="grey" />
        )}
      </div>
    </div>
  );
}

export default Card;
