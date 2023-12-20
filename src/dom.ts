const getElement = (id: string) => document.getElementById(id);
const hasElement = (id: string) => document.getElementById(id) !== null;

const createElement = (id: string) => {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  return el;
};

const appendElement = (el: HTMLElement, to = document.body) => {
  to.appendChild(el);
};

const prependElement = (el: HTMLElement, to = document.body) => {
  to.prepend(el);
};

const removeElement = (el: HTMLElement) => {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

export {
  createElement,
  getElement,
  hasElement,
  appendElement,
  removeElement,
  prependElement,
};
