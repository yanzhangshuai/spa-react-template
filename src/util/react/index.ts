export default class RHelper {
  static renderIf(cond: boolean, elm: JSX.Element) {
    if (cond)
      return elm

    return null
  }
}
