import React, { useState, useEffect } from "react";

function AutoResizeText(props) {
  const [fontSize, setFontSize] = useState(props.initialFontSize || 16); // Set an initial font size

  useEffect(() => {
    const container = document.getElementById("container"); // Replace 'container' with your container's id
    const text = document.getElementById("text"); // Replace 'text' with your text element's id

    if (container && text) {
      const containerWidth = container.offsetWidth;
      const textWidth = text.offsetWidth;

      if (containerWidth < textWidth) {
        const newFontSize = (containerWidth / textWidth) * fontSize;
        setFontSize(newFontSize);
      }
    }
  }, [fontSize]);

  return (
    <div
      id="container"
      style={{ width: "300px", height: "100px", overflow: "hidden" }}
    >
      <p id="text" style={{ fontSize: `${fontSize}px`, whiteSpace: "nowrap" }}>
        {props.text}
      </p>
    </div>
  );
}

export default AutoResizeText;
