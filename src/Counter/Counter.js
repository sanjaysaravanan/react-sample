import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(false);

  // const counterInitiate = () => {
  //   interval = setInterval(() => {
  //     console.log(count);
  //     setCount(count + 1);
  //   }, 1000);
  // };

  let interval = null;

  // Mounting phase
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Outside If");
    if (!stop && interval) {
      console.log("Inside If");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        console.log(count);
        setCount(count + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      interval = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stop]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "32x",
        }}
      >
        <button style={{ width: 100, height: 100, fontSize: "32px" }}>
          {count}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "32px",
        }}
      >
        <button
          onClick={() => setStop(false)}
          style={{ fontSize: "32px", marginRight: "16px" }}
        >
          Start
        </button>
        <button onClick={() => setStop(true)} style={{ fontSize: "32px" }}>
          Stop
        </button>
      </div>
    </>
  );
};

export default Counter;
