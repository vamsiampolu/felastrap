import getPanelKey from "./getPanelKey";

describe("components/Accordion/getPanelKey", () => {
  beforeAll(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.17522598710247284);
  });

  afterAll(() => {
    (Math.random as jest.Mock).mockRestore();
  });
  const result = "6b3cddj6j";

  it("should return a randomly generated panel key", () => {
    expect(getPanelKey()).toEqual(result);
  });
});
