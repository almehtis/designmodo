export const storagedFontColorCheckerHelper = (storagedColor: string): void => {
  ((document.getElementsByClassName("selector__narrow")[1] as HTMLSelectElement).value) = storagedColor;
  (document.getElementsByClassName("color-preview")[0] as HTMLDivElement).style.backgroundColor = storagedColor;
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.color = storagedColor;
}
