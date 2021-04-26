import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

function HooksPage() {
  const [number, setNumber] = useState(0); // 0 la gia tri cua phan tu number luc ban dau
  // dau ngoac nhon la rendering element

  const handleClick = () => {
    setNumber(number + 1);
  };

  // tham so thu 2 la 1 ham dai dien cho usereffect chi chay dung 1 lan
  useEffect(() => {
    console.log("use Effect tuong duong dismount ben class");
  }, []);

  useEffect(() => {
    console.log("use Effect tuong duong didupdate ben class");
  }, [number]);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 1000); // 1000 la 1s
    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNumber = () => {};

  const showNumberCallback = useCallback(showNumber, []); // de khong render lai

  const numberUp = () => {
    // không cần lặp lại hàm này
    let i = 0;
    while (i < 1000) {
      i++;
    }
    console.log(i);
    return i;
  };

  const numberUpMemo = useMemo( () => numberUp(), []);

  return (
    <div>
      <h3>HooksPage</h3>
      <h1>Number: {number}</h1>
      <button className="btn btn-success" onClick={handleClick}>
        click
      </button>
      <p>Number up: {numberUpMemo}</p>
      <hr />
      <Child showNumber={showNumberCallback} />
    </div>
  );
}

export default HooksPage;
