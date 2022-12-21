import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import hoverEffect from "hover-effect";

import "./styles.css";

function App() {
  const container = useRef();

  useEffect(() => {
    console.log(container.current);

    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "https://picsum.photos/400/600",
      image2: "https://picsum.photos/420/620",

      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
    });
  }, [container]);

  return (
    <div className="App">
      <h1>React Distortion Effect</h1>
      <h2>Hover over the image to see some magic happen!</h2>
      <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 400,
          height: 600
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
