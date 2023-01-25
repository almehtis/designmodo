export const changeFontFamilyHelper = (fontFamily: string): string => {
  const selectedFontFamily = ((document.getElementsByClassName("selector__wide")[0] as HTMLSelectElement).value);
  const selectedFontWeight = ((document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value);
  const textFontFamily = (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily;
  const textFontWeight = (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight;
  const textFontStyle = (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle;

  switch (!textFontFamily.includes(fontFamily)) {
    case textFontWeight === "normal" && textFontStyle === "italic":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${selectedFontFamily} Italic`;
      break
    case selectedFontWeight === "bold":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${selectedFontFamily} Bold`;
      break
    case textFontWeight === "bold" && textFontStyle === "italic":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${selectedFontFamily} BoldItalic`;
      break
    default:
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = selectedFontFamily;
  }

  return selectedFontFamily;
}
