export const changeLetterSpacingHelper = () => {
  const selectedLetterSpacing = (document.getElementsByClassName("input-block_input")[2] as HTMLInputElement).value;
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.letterSpacing = `${selectedLetterSpacing}px`;
  return selectedLetterSpacing;
}
