export default class StringCalculator {
  add(string) {
    if (string === "") {
      return 0;
    }

    const customDelimiters = ["\n"];

    if(string.includes("//")) {
      const stringWithoutDoubleSlash = string.subString(2);

      const [customDelimiter, numbers] = stringWithoutDoubleSlash.split("\n");

      customDelimiters.push(customDelimiter);

      string = numbers;
    }

    customDelimiters.forEach((delimiter) => {
      string = string.split(delimiter).join(",");
    });

    // reduce is like a foreach, 0 is value for previous
    return string
    .split(",")
    .reduce((previous, number) => previous + Number.parseInt(number), 0);


  }
}
