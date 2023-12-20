export const resizeWidth = (width: number) => {
  window.innerWidth = width;
  dispatchEvent(new Event("resize"));
};

export const resizeHeight = (height: number) => {
  window.innerHeight = height;
  dispatchEvent(new Event("resize"));
};
