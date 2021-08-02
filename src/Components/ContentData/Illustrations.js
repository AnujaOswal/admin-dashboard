import React from "react";

export default function Illustrations() {
  return (
    <div className="contentsCard">
      <h6>Illustrations</h6>
      <div className="Post" style={{textAlign:"center"}}>
        <img
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
          alt="undraw_posting_photo"
          style={{width: "50%",padding:"1.5rem"}}
        />
      </div>
      <p>
        Add some quality, svg illustrations to your project courtesy of{" "}
        <span>
          <a href="/">unDraw</a>
        </span>
        , a constantly updated collection of beautiful svg images that you can
        use completely free and without attribution!
      </p>

      <div className="link">
        <a href="/">Browse Illustrations on unDraw →</a>
      </div>
    </div>
  );
}