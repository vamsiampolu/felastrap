import * as dom from "./dom";

const createMockElement = ({
  id = "",
  className = "",
  parentNode = null,
}: {
  id?: string;
  className?: string;
  parentNode?: ParentNode | null;
}): Partial<HTMLDivElement> => ({
  id,
  className,
  innerHTML: "",
  style: {} as CSSStyleDeclaration,
  addEventListener: jest.fn(),
  setAttribute: jest.fn(),
  appendChild: jest.fn(),
  prepend: jest.fn(),
  parentNode,
  removeChild: jest.fn(),
  removeEventListener: jest.fn(),
  // Add other properties and methods as needed
});

describe("dom.appendElement", () => {
  let appendChild: jest.Spied<Document["body"]["appendChild"]>;

  beforeEach(() => {
    appendChild = jest
      .spyOn(document.body, "appendChild")
      .mockImplementation((n) => n);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should append an element to the body if `to` argument is not provided", () => {
    const el = createMockElement({ id: "foobar" }) as HTMLElement;
    dom.appendElement(el);
    expect(appendChild).toHaveBeenCalledWith(el);
  });

  it("should append an element to the `to` argument provided", () => {
    const el = createMockElement({ id: "foobar" }) as HTMLElement;
    const parent = createMockElement({ id: "parent" }) as HTMLElement;
    dom.appendElement(el, parent);
    expect(parent.appendChild).toHaveBeenCalledWith(el);
  });
});

describe("dom.getElement", () => {
  let getElementById: jest.Spied<Document["getElementById"]>;
  beforeEach(() => {
    getElementById = jest.spyOn(global.document, "getElementById");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return true if an element with the given id exists", () => {
    const mockEl = createMockElement({ id: "foobar" });
    getElementById.mockReturnValueOnce(mockEl as HTMLDivElement);
    expect(dom.getElement("foobar")).toBe(mockEl);
  });

  it("should return false if no element with the given id exists", () => {
    getElementById.mockReturnValueOnce(null);
    expect(dom.getElement("foobar")).toBe(null);
  });
});

describe("dom.hasElement", () => {
  let getElementById: jest.Spied<Document["getElementById"]>;
  beforeEach(() => {
    getElementById = jest.spyOn(global.document, "getElementById");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return true if an element with the given id exists", () => {
    const mockEl = createMockElement({ id: "foobar" });
    getElementById.mockReturnValueOnce(mockEl as HTMLDivElement);
    expect(dom.hasElement("foobar")).toBe(true);
  });

  it("should return false if no element with the given id exists", () => {
    getElementById.mockReturnValueOnce(null);
    expect(dom.hasElement("foobar")).toBe(false);
  });
});

describe("dom.prependElement", () => {
  let prepend: jest.Spied<Document["body"]["prepend"]>;

  beforeEach(() => {
    prepend = jest.spyOn(document.body, "prepend").mockImplementation((n) => n);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should prepend an element to the body if `to` arg is not provided", () => {
    const el = createMockElement({ id: "foobar" });
    dom.prependElement(el as HTMLElement);
    expect(prepend).toHaveBeenCalledWith(el);
  });

  it("should prepend an element to the parent provided", () => {
    const el = createMockElement({ id: "foobar" });
    const parent = createMockElement({ id: "parent" });
    dom.prependElement(el as HTMLElement, parent as HTMLElement);
    expect(parent.prepend).toHaveBeenCalledWith(el);
  });
});

describe("dom.removeElement", () => {
  it("should remove an element from a parentNode if found", () => {
    const parentNode = createMockElement({ id: "parent-node" }) as ParentNode;
    const el = createMockElement({ id: "foobar", parentNode }) as HTMLElement;
    dom.removeElement(el);
    expect(parentNode.removeChild).toHaveBeenCalled();
  });
});

describe("dom.createElement", () => {
  let createElement: jest.Spied<Document["createElement"]>;
  beforeEach(() => {
    createElement = jest.spyOn(document, "createElement");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should create an element with the given id", () => {
    const el = createMockElement({ id: "foobar" }) as HTMLElement;
    createElement.mockReturnValue(el);
    const result = dom.createElement("foobar");

    expect(createElement).toHaveBeenCalledWith("div");
    expect(el.setAttribute).toHaveBeenCalledWith("id", "foobar");
    expect(result).toBe(el);
  });
});
