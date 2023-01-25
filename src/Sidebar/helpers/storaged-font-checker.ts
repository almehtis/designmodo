export const storagedFontCheckerHelper = (storagedFontFamily: string, storagedFontWeight: string, storagedFontStyle: string) => {
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = storagedFontFamily;
  (document.getElementsByClassName("selector__wide")[0] as HTMLSelectElement).value = storagedFontFamily;
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = storagedFontWeight;
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle = storagedFontStyle;
  let fontWeight = "";
  let fontStyle = "";
  let fontFamily = "";

  if(storagedFontFamily.includes(storagedFontFamily) && storagedFontStyle === "normal" && storagedFontWeight === "normal") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = storagedFontFamily;
    (document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value = storagedFontWeight;
    fontWeight = storagedFontWeight;
    fontStyle = storagedFontStyle;
  } else if(storagedFontFamily.includes(storagedFontFamily) && storagedFontStyle === "normal" && storagedFontWeight === "bold") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${storagedFontFamily} Bold`;
    (document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value = storagedFontWeight;
    fontWeight = storagedFontWeight;
    fontStyle = storagedFontStyle;
  } else if(storagedFontFamily.includes(storagedFontFamily) && storagedFontStyle === "italic" && storagedFontWeight === "normal") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${storagedFontFamily} Italic`;
    (document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value = storagedFontStyle;
    fontWeight = storagedFontWeight;
    fontStyle = storagedFontStyle;
  } else if(storagedFontFamily.includes(storagedFontFamily) && storagedFontStyle === "italic" && storagedFontWeight === "bold") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${storagedFontFamily} BoldItalic`;
    (document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value = storagedFontStyle;
    fontWeight = storagedFontWeight;
    fontStyle = storagedFontStyle;
  }

  fontFamily = storagedFontFamily;
  return [fontFamily, fontWeight, fontStyle]
}