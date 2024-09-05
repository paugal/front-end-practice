import React from "react";
import "./WhatToWatch.css";

export default function WhatToWatch() {
  return (
    <div className="WhatToWatch-container">
      <h1>WhatToWatch</h1>
      <div className="WhatToWatch-description">
        <span>
          In this project I focused more on the use of APIS. Although it is only
          an unfinished prototype, I liked the experience of comparing different
          databases and defining what my needs were. Currently I have defined
          the following pages:
        </span>
        <ul>
          <li>Landing Page</li>
          <li>Popular Movies</li>
          <li>Movie description and data</li>
        </ul>
        <span>
          In the future I would love to research on recommendation algorithms
          and improve the landing page as well as implement login.
        </span>
      </div>

      <div className="link-to-watch">
        <a
          href="https://paugal.github.io/whattowatch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the project
        </a>
      </div>
    </div>
  );
}
