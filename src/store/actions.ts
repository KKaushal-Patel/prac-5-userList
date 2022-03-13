const mouseHover = (id: number) => {
  return {
    type: "onMouseOver",
    payload: id,
  };
};
const removeUser = (id: number) => {
  return {
    type: "onRemove",
    payload: id,
  };
};

export {mouseHover, removeUser };
