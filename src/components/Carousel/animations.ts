// exit: slideOutRight, enter: slideInLeft
const slideOutRight = () => ({
  from: {
    display: "block",
    transform: "translate3d(0, 0, 0)",
  },
  to: {
    display: "none",
    transform: "translate3d(100%, 0, 0)",
  },
});

const slideInLeft = () => ({
  from: {
    transform: "translate3d(-100%, 0, 0)",
    display: "none",
  },

  to: {
    transform: "translate3d(0, 0, 0)",
    display: "block",
  },
});

// exit: slideInRight, slideOutLeft
const slideInRight = () => ({
  from: {
    transform: "translate3d(100%, 0, 0)",
    display: "none",
  },

  to: {
    transform: "translate3d(0, 0, 0)",
    display: "block",
  },
});

const slideOutLeft = () => ({
  from: {
    display: "block",
    transform: "translate3d(0, 0, 0)",
  },

  to: {
    display: "none",
    transform: "translate3d(-100%, 0, 0)",
  },
});

export { slideInLeft, slideInRight, slideOutLeft, slideOutRight };
