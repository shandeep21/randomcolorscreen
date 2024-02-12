import { useState } from "react";

export default function RandomColorScreen() {
  const [getColorType, setColorType] = useState("rgb");
  const [getColor, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
    console.log("random rgb color", rgbColor);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log("random hex color", hexColor, getColor);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vw",
        background: getColor,
      }}
    >
      <button onClick={() => setColorType("hex")}>HEXRandomColor</button>
      <button onClick={() => setColorType("rgb")}>RGBRandomColor</button>
      <button
        onClick={
          getColorType === "rgb"
            ? handleCreateRandomRgbColor
            : handleCreateRandomHexColor
        }
      >
        RandomColor
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h1>{`Color Type -> ${getColorType}`}</h1>
        <h3>{getColor}</h3>
      </div>
    </div>
  );
}
