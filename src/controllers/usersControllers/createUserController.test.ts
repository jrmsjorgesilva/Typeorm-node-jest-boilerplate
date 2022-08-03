describe("Create User Controller", () => {
  const returnSame = (num: number) => {
    return num;
  };

  it("Should return the same number", () => {
    const result = returnSame(4);
    expect(result).toBe(4);
  });

  it(`Shouldn't return other number`, () => {
    const result = returnSame(4);
    expect(result).not.toBe(!result);
  });
});
