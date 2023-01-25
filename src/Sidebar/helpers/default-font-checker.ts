export const defaultFontCheckerHelper = (fontFamily: string): string[] => {
  const selectedFontFamily = ((document.getElementsByClassName("selector__wide")[0] as HTMLSelectElement).value);
  const selectedFontOption = ((document.getElementsByClassName("selector__narrow")[0] as HTMLSelectElement).value);
  let returnedFontWeight = "";
  let returnedFontStyle = "";

  switch (!selectedFontFamily.includes(fontFamily)) {
    case (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle === "normal" && selectedFontOption === "bold":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = selectedFontOption;
      returnedFontWeight = selectedFontOption;
      returnedFontStyle = "normal";
      break
    case (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight === "bold" && selectedFontOption === "italic":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle = selectedFontOption;
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = "bold"
      returnedFontWeight = "bold";
      returnedFontStyle = "italic";
      break
    case (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle === "normal" && selectedFontOption === "italic":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle = selectedFontOption;
      returnedFontWeight = "normal";
      returnedFontStyle = "italic";
      break
    case (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle === "italic" && selectedFontOption === "bold":
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = selectedFontOption;
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle === "italic";
      returnedFontWeight = "bold";
      returnedFontStyle = "italic";
      break
    default:
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = "normal";
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle  = "normal";
      returnedFontWeight = "normal";
      returnedFontStyle = "normal";
  }

  return [returnedFontWeight, returnedFontStyle]
}
