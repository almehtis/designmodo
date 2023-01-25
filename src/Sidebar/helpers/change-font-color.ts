export const changeFontColorHelper = () => {
  const selectedFontColor = ((document.getElementsByClassName("selector__narrow")[1] as HTMLSelectElement).value);
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.color = selectedFontColor;
  (document.getElementsByClassName("color-preview")[0] as HTMLDivElement).style.backgroundColor = selectedFontColor;
  return selectedFontColor
}

