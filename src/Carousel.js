import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state up by 1
  function goForward() {
    let index = currCardIdx + 1
    index == total ? setCurrCardIdx(0) : setCurrCardIdx(index);
  }

  //Increments currCardIdx state down by 1
  function goBackward() {
    currCardIdx == 0 ? setCurrCardIdx(total - 1) : setCurrCardIdx(currCardIdx - 1);
  }
const rightArrow = <i
className="bi bi-arrow-right-circle"
onClick={goForward}
/>
const leftArrow = <i
className="bi bi-arrow-left-circle"
onClick={goBackward}
/>


  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx != 0 ? leftArrow : <></>}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx == (total - 1) ? <></>:rightArrow}
      </div>
    </div>
  );
}

export default Carousel;
