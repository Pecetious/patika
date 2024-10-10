import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import {
  addFrameworks,
  flipCard,
  resetFlippedCards,
  markMatched,
  frameworkSelectors,
  reshuffleFrameworks,
} from "../redux/frameworksSlice";
import { decreaseScore, increaseScore, resetScore } from "../redux/scoreSlice";
const frameworksData = [
  {
    id: 1,
    name: "React",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpObpNtJKyVexJ3KCGVXbTzilWCQiGDyXbeQ&s",
    flipped: false,
    matched: false,
  },
  {
    id: 2,
    name: "Vue",
    imageUrl:
      "https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png",
    flipped: false,
    matched: false,
  },
  {
    id: 3,
    name: "Angular",
    imageUrl: "https://banner2.cleanpng.com/20180420/sxw/avfx2yube.webp",
    flipped: false,
    matched: false,
  },
  {
    id: 4,
    name: "Svelte",
    imageUrl: "https://logosandtypes.com/wp-content/uploads/2020/11/Svelte.png",
    flipped: false,
    matched: false,
  },
  {
    id: 5,
    name: "Ember",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjukD9VOR-RDu4LQEXzDbjC6m5RPiHdeh4w&s",
    flipped: false,
    matched: false,
  },
  {
    id: 6,
    name: "Backbone",
    imageUrl:
      "https://seeklogo.com/images/B/backbone-logo-837E2F8868-seeklogo.com.png",
    flipped: false,
    matched: false,
  },
  {
    id: 7,
    name: "Next.js",
    imageUrl:
      "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp",
    flipped: false,
    matched: false,
  },
  {
    id: 8,
    name: "Gatsby",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png",
    flipped: false,
    matched: false,
  },
  {
    id: 9,
    name: "Nuxt.js",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ494s97h7aVykAjvgNeKOGnjjgUPqCAP_BA&s",
    flipped: false,
    matched: false,
  },
  {
    id: 10,
    name: "Express",
    imageUrl:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    flipped: false,
    matched: false,
  },
  {
    id: 11,
    name: "Django",
    imageUrl:
      "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
    flipped: false,
    matched: false,
  },
  {
    id: 12,
    name: "Flask",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s",
    flipped: false,
    matched: false,
  },
  {
    id: 13,
    name: "Meteor",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Meteor-logo.png/800px-Meteor-logo.png",
    flipped: false,
    matched: false,
  },
  {
    id: 14,
    name: "Laravel",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    flipped: false,
    matched: false,
  },
  {
    id: 15,
    name: "Symfony",
    imageUrl:
      "https://e7.pngegg.com/pngimages/941/1012/png-clipart-symfony-php-software-framework-others-miscellaneous-text.png",
    flipped: false,
    matched: false,
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Contents() {
  const dispatch = useDispatch();
  const frameworks = useSelector(frameworkSelectors.selectAll);
  const flippedCards = useSelector((state) => state.frameworks.flippedCards);
  const [rerender, setRerender] = useState(false);
  // Create shuffled frameworks once
  const shuffledFrameworks = React.useMemo(() => {
    return shuffle(
      frameworksData.concat(
        frameworksData.map((framework) => ({
          ...framework,
          id: framework.id + frameworksData.length,
        }))
      )
    );
  }, []);

  // Load initial frameworks if none exist in the store
  useEffect(() => {
    if (frameworks.length === 0) {
      dispatch(addFrameworks(shuffledFrameworks)); // Load initial state
    }
  }, [dispatch, frameworks, shuffledFrameworks, rerender]);
  const reset = () => {
    // Reset the score
    setRerender((prev) => !prev);
    dispatch(resetScore());
    dispatch(reshuffleFrameworks());
    dispatch(resetFlippedCards()); // Reset any flipped cards
  };
  // Handle the card flip and check for a match
  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !card.flipped && !card.matched) {
      dispatch(flipCard(card.id));
    }

    if (flippedCards.length === 1) {
      const [firstCardId] = flippedCards;
      const firstCard = frameworks.find((c) => c.id === firstCardId);

      if (firstCard.name === card.name) {
        dispatch(markMatched([firstCard.id, card.id]));
        dispatch(increaseScore());
      } else {
        dispatch(decreaseScore());
      }

      // Reset flipped cards after a delay
      setTimeout(() => {
        dispatch(resetFlippedCards());
      }, 1000);
    }
  };

  return (
    <>
      <button
        onClick={reset}
        style={{
          position: "absolute",
          top: "150px",
          right: "150px",
          border: "none",
          color: "grey",
          borderColor: "transparent",
        }}
      >
        Reset Game
      </button>
      <div className="contents grid grid-cols-5 gap-4">
        {frameworks.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
    </>
  );
}

export default Contents;
