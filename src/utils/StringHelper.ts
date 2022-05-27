export class StringHelper {
  static getCartItemsSuffix(num: number) {
    if (
      (num.toString().slice(-1) === "1" &&
        +num.toString().slice(-2) < 100 &&
        +num.toString().slice(-2) > 11) ||
      +num.toString().slice(-2) === 1
    ) {
      return "предмет";
    }
    if (
      +num.toString().slice(-1) > 4 ||
      [10, 11, 12, 13, 14].includes(+num.toString().slice(-2))
    ) {
      return "предметов";
    }
    if (
      +num.toString().slice(-1) < 5 &&
      ![10, 11, 12, 13, 14].includes(+num.toString().slice(-2))
    ) {
      return "предмета";
    }
  }
}
