const fadeIn = () => ({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = () => ({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export { fadeIn, fadeOut };
