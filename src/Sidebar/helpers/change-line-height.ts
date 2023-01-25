export const changeLineHeightHelper = () => {
  const selectedLineHeight = (document.getElementsByClassName("input-block_input")[1] as HTMLInputElement).value;
  (document.getElementsByClassName("page")[0] as HTMLDivElement).style.lineHeight = `${selectedLineHeight}%`;
  return selectedLineHeight;
}
