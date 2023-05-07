import axios from "axios";
import { useEffect, useRef } from "react";

const useDragger = (table: ITable): void => {
  const isClicked = useRef<boolean>(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: table.coords.posX,
    lastY: table.coords.posY,
  });
  useEffect(() => {
    const roomTable = document.getElementById(table._id);
    if (!roomTable) throw new Error("No target selected");

    const roomArea = roomTable.parentElement;
    if (!roomArea) throw new Error("No room selected");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMouseDown = (e: any) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = roomTable.offsetLeft;
      coords.current.lastY = roomTable.offsetTop;
      axios
        .patch(
          `http://localhost:5050/table/${table._id}/coords?posX=${coords.current.lastX}&posY=${coords.current.lastY}`
        )
        .then((res) => console.log(res.data.message))
        .catch((err) => console.log(err));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMouseMove = (e: any) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      roomTable.style.top = `${nextY}px`;
      roomTable.style.left = `${nextX}px`;
    };

    const onMouseLeave = () => {
      isClicked.current = false;
      coords.current.lastX = roomTable.offsetLeft;
      coords.current.lastY = roomTable.offsetTop;
    };

    roomTable.addEventListener("mousedown", onMouseDown);
    roomTable.addEventListener("mouseup", onMouseUp);
    roomArea.addEventListener("mousemove", onMouseMove);
    roomArea.addEventListener("mouseleave", onMouseLeave);

    const cleanUp = () => {
      roomTable.removeEventListener("mousedown", onMouseDown);
      roomTable.removeEventListener("mouseup", onMouseUp);
      roomArea.removeEventListener("mousemove", onMouseMove);
      roomArea.removeEventListener("mouseleave", onMouseLeave);
    };
    return cleanUp;
  }, [table._id]);
};

export default useDragger;
