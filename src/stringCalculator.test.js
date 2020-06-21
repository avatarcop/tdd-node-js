import StringCalculator from "./stringCalculator";

describe("StringCalculator", () => {
  describe("add", () => {
    it("should return zero given empty string", () => {
      const sut = new StringCalculator();

      const result = sut.add("");
      expect(result).toBe(0);
    });

    it("should return the number in integer given single number", () => {
      const sut = new StringCalculator();

      const result = sut.add("1");
      expect(result).toBe(1);
    });

    it("should return the sum of its input given multiple numbers separated by comma", () => {
      const sut = new StringCalculator();

      const result = sut.add("1,2");

      expect(result).toBe(3);
    });

    it("should return the sum of its input given multiple numbers comma or new line delimiter", () => {
      const sut = new StringCalculator();

      const result = sut.add("1\n2");

      expect(result).toBe(3);
    });

    it("should return the sum of its input given multiple numbers with custom delimiter", () => {
      const sut = new StringCalculator();

      const result = sut.add("1\n2");

      expect(result).toBe(3);
    });

  });
});
