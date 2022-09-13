import "./ImageCarousel.css";

export const ImageCarousel = () => {
  return (
    <div>
      <div>
        <div className="carousel">
          <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
              <div className="slide-image">
                <img src={images[0].url} alt={images[0].img} />
              </div>
              <div className="carousel-controls">
                <label className="next-slide">
                  <span>&rsaquo; </span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />

            <li className="slide-container">
              <div className="slide-image">
                <img src={images[1].url} alt={images[1].img} />
              </div>
              <div className="carousel-controls">
                <label className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <input type="radio" name="radio-buttons" id="img-3" />
            <li className="slide-container">
              <div className="slide-image">
                <img src={images[2].url} alt={images[2].img} />
              </div>
              <div className="carousel-controls">
                <label className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div className="carousel-dots">
              <label className="carousel-dot" id="img-dot-1"></label>
              <label className="carousel-dot" id="img-dot-2"></label>
              <label className="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

const images: Array<{ url: string; img: string }> = [
  {
    url: "https://images2.imgbox.com/a4/7c/HUhnxOvX_o.png",
    img: "1",
  },
  {
    url: "https://images2.imgbox.com/0e/1e/wxyT1i1U_o.png",
    img: "2",
  },
  {
    url: "https://images2.imgbox.com/ab/3e/XMeI532Z_o.png",
    img: "3",
  },
];

/*



<img src="https://images2.imgbox.com/a4/7c/HUhnxOvX_o.png" alt="image host"/>


<img src="https://images2.imgbox.com/0e/1e/wxyT1i1U_o.png" alt="image host"/>

<img src="https://images2.imgbox.com/ab/3e/XMeI532Z_o.png" alt="image host"/>


https://imgbox.com/HUhnxOvX
https://imgbox.com/wxyT1i1U
https://imgbox.com/XMeI532Z
*/
