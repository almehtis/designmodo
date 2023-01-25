export const alignTextHelper = () => {
  const selectedTextAlign = (document.activeElement?.firstElementChild as HTMLImageElement).src;
  let textAlign = "";
  const clickedButtonIndex = (Array.from(document.getElementsByClassName("text-format-button")).indexOf(document.activeElement as HTMLButtonElement));
  ((document.getElementsByClassName("text-format-button")[clickedButtonIndex] as HTMLButtonElement)
  .firstElementChild as HTMLButtonElement).style.filter = "invert(50%) sepia(25%) saturate(3053%) hue-rotate(180deg) brightness(95%) contrast(94%)";

  if(selectedTextAlign.includes("left")) {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = "left";
    textAlign = "left";
  } else if(selectedTextAlign.includes("right")) {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = "right";
    textAlign = "right";
  } else if(selectedTextAlign.includes("center")) {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = "center";
    textAlign = "center";
  } else {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = "justify";
    textAlign = "justify";
  }

  return [textAlign, clickedButtonIndex];
}