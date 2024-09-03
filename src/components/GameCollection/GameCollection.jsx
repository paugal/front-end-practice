import React from "react";
import "./GameCollection.css";

export default function GameCollection() {
  return (
    <div className="game-collection-container">
      <div className="game-collection-text">
        <h1>Experience using Figma</h1>
        <span>
          This is one of the prototypes I am creating to learn in more depth how
          to use Figma. It details an application oriented to register all the
          games you own as well as the ones you want to buy. Similar to
          Letterboxd but for games.
        </span>
      </div>
      <iframe
        title="GameCollection"
        width="300"
        height="670"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm9OxX9Sf1NcivWxwP1kyhX%2FGame-Collection%3Fnode-id%3D6-2%26node-type%3DCANVAS%26t%3DlJX5bSAcjfCla5U7-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D6%253A2%26hide-ui%3D1"
        allowfullscreen
      ></iframe>
    </div>
  );
}
