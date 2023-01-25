export class fontFamily {
  fontFamily: string;
  selectedFontProps: string;
  currentFontFamily: string;

  constructor() {
    this.fontFamily = "test";
    this.selectedFontProps = (document.getElementById("fontWeight") as HTMLSelectElement).value
    this.currentFontFamily = (document.getElementById("fontFamily") as HTMLSelectElement)!.value
  }

  greet() {
    if (this.currentFontFamily === "Fira Sans" && this.selectedFontProps === "bold") {
      document.getElementById("text")!.style.fontFamily = "Fira Sans Bold"

    // } else if (currentFontFamily === "Fira Sans" && selectedFontWeight === "italic") {
    //   document.getElementById("text")!.style.fontFamily = "Fira Sans Italic"
    //   this.setState({fontFamily: "Fira Sans Italic"})
    // } else if (currentFontFamily === "Fira Sans Bold" && selectedFontWeight === "italic") {
    //   document.getElementById("text")!.style.fontFamily = "Fira Sans BoldItalic"
    //   this.setState({fontFamily: "Fira Sans BoldItalic"})
    // } else if (currentFontFamily === "Fira Sans Bold" || "Fira Sans Italic" || "Fira Sans BoldItalic" && selectedFontWeight === "normal") {
    //   document.getElementById("text")!.style.fontFamily = "Fira Sans"
    //   this.setState({fontFamily: "Fira Sans"})
    // }
    }
  }
}
