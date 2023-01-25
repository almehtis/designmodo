export const customFontCheckerHelper = (fontFamily: string): string[] => {
  const selectedFontFamily = ((document.getElementsByClassName("selector__wide")[0] as HTMLSelectElement).value);
  const selectedFontWeight = ((document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value);
  let returnedFontFamily = "";
  let returnedCustomFontWeight = "";
  let returnedCustomFontStyle = "";

  if (selectedFontFamily === fontFamily &&
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily === fontFamily &&
    selectedFontWeight === "bold") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${fontFamily} Bold`
    returnedFontFamily = fontFamily;
    returnedCustomFontWeight = "bold";
    returnedCustomFontStyle = "normal";
  } else if (selectedFontFamily === fontFamily &&
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily === `${fontFamily} Bold` &&
    selectedFontWeight === "italic") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${fontFamily} BoldItalic`
    returnedFontFamily = fontFamily;
    returnedCustomFontWeight = "bold";
    returnedCustomFontStyle = "italic";
  } else if (selectedFontFamily === fontFamily &&
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily !== `${fontFamily} BoldItalic` &&
    selectedFontWeight === "italic") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${fontFamily} Italic`;
    returnedFontFamily = fontFamily;
    returnedCustomFontWeight = "normal";
    returnedCustomFontStyle = "italic";
  } else if (selectedFontFamily === fontFamily &&
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily === `${fontFamily} Italic` &&
    selectedFontWeight === "bold") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = `${fontFamily} BoldItalic`
    returnedFontFamily = fontFamily;
    returnedCustomFontWeight = "bold";
    returnedCustomFontStyle = "italic";
  } else if (selectedFontFamily === fontFamily && selectedFontWeight === "normal") {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = fontFamily
    returnedFontFamily = fontFamily;
    returnedCustomFontWeight = "normal";
    returnedCustomFontStyle = "normal";
  }

  return [returnedFontFamily, returnedCustomFontWeight, returnedCustomFontStyle]
}
