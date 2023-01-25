import { Component } from 'react';
import Button from '../common/Button';
import Selector from '../common/Selector';
import Input from '../common/Input';
import {
  alignTextHelper,
  changeFontColorHelper,
  changeFontFamilyHelper,
  changeLetterSpacingHelper,
  changeLineHeightHelper,
  customFontCheckerHelper,
  defaultFontCheckerHelper,
  storagedFontCheckerHelper,
  storagedFontColorCheckerHelper} from './helpers';
import './Sidebar.css';

class Sidebar extends Component {
  state = {
    fontFamily: "",
    fontWeight: "normal",
    fontStyle: "normal",
    fontColor: "#292929",
    lineHeight: "0",
    letterSpacing: "0",
    fontSize: "14",
    textAlign: "left",
    alignButtonIndex: "0",
  }

  componentDidMount(): void {
    const storagedFontFamily = localStorage.getItem("fontFamily");
    const storagedColor = localStorage.getItem("fontColor");
    const storagedFontWeight = localStorage.getItem("fontWeight");
    const storagedFontStyle = localStorage.getItem("fontStyle");
    const storagedTextAlign = localStorage.getItem("textAlign");
    const storagedLineHeight = localStorage.getItem("lineHeight");
    const storagedLetterSpacing = localStorage.getItem("letterSpacing");
    const storagedFontSize = localStorage.getItem("fontSize");
    const storagedAlignButtonIndex = localStorage.getItem("alignButtonIndex");
    const storagedTextValue= localStorage.getItem("textValue");

    if(storagedTextValue !== null) {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).innerHTML = storagedTextValue;
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).innerHTML = "Type Here...";
    }

    if(storagedColor !== null) {
      storagedFontColorCheckerHelper(storagedColor);
      this.setState({fontColor: storagedColor});
    } else {
      (document.getElementsByClassName("color-preview")[0] as HTMLDivElement).style.backgroundColor = this.state.fontColor;
    };

    if(storagedFontFamily !== null && storagedFontWeight !== null && storagedFontStyle !== null) {
      const [fontFamily, fontWeight, fontStyle] = storagedFontCheckerHelper(storagedFontFamily, storagedFontWeight, storagedFontStyle);
      this.setState({fontFamily: fontFamily});
      this.setState({fontWeight: fontWeight});
      this.setState({fontStyle: fontStyle});
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontFamily = "Fira Sans";
      this.setState({fontFamily: "Fira Sans"});
    };

    if(storagedTextAlign !== null && storagedAlignButtonIndex !== null) {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = storagedTextAlign;
      ((document.getElementsByClassName("text-format-button")[parseInt(storagedAlignButtonIndex)] as HTMLButtonElement)
      .firstElementChild as HTMLButtonElement).style.filter = "invert(50%) sepia(25%) saturate(3053%) hue-rotate(180deg) brightness(95%) contrast(94%)";
      this.setState({alignButtonIndex: storagedAlignButtonIndex});
      this.setState({textAlign: storagedTextAlign});
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.textAlign = this.state.textAlign;
      ((document.getElementsByClassName("text-format-button")[0] as HTMLButtonElement)
      .firstElementChild as HTMLButtonElement).style.filter = "invert(50%) sepia(25%) saturate(3053%) hue-rotate(180deg) brightness(95%) contrast(94%)";
    };

    if(storagedLineHeight !== null) {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.lineHeight = `${storagedLineHeight}%`;
      this.setState({lineHeight: storagedLineHeight});
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.lineHeight = "125%";
      this.setState({lineHeight: "125"})
    };

    if(storagedLetterSpacing !== null) {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.letterSpacing = `${storagedLetterSpacing}px`;
      this.setState({letterSpacing: storagedLetterSpacing});
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.letterSpacing = "0.6px";
      this.setState({letterSpacing: "0.6"})
    };

    if(storagedFontSize !== null) {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontSize = `${storagedFontSize}px`;
      this.setState({fontSize: storagedFontSize});
    } else {
      (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontSize = "14px";
      this.setState({fontSize: "14"})
    };
  };

  changeFontFamily = () => {
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontWeight = this.state.fontWeight;
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontStyle = this.state.fontStyle;
    const selectedFontFamily = changeFontFamilyHelper("Fira Sans");
    this.setState({fontFamily: selectedFontFamily});
  };

  changeFontWeight = () => {
    const [returnedFontWeight, returnedFontStyle] = defaultFontCheckerHelper("Fira Sans");
    const [returnedCustomFontFamily, returnedCustomFontWeight, returnedCustomFontStyle] = customFontCheckerHelper("Fira Sans");

    if(returnedFontWeight && returnedFontStyle !== undefined) {
      this.setState({fontWeight: returnedFontWeight});
      this.setState({fontStyle: returnedFontStyle});
    };

    if(returnedCustomFontFamily && returnedCustomFontWeight !== undefined) {
      this.setState({fontFamily: returnedCustomFontFamily});
      this.setState({fontWeight: returnedCustomFontWeight});
      this.setState({fontStyle: returnedCustomFontStyle});
    };
  }

  changeFontSize = () => {
    const selectedFontSize = (document.getElementsByClassName("input-block_input")[0] as HTMLInputElement).value;
    (document.getElementsByClassName("page")[0] as HTMLDivElement).style.fontSize = `${selectedFontSize}px`;
    this.setState({fontSize: selectedFontSize});
  };

  changeFontColor = () => {
    const selectedFontColor = changeFontColorHelper();
    this.setState({fontColor: selectedFontColor});
  };

  changeLineHeight = () => {
    const selectedLineHeight = changeLineHeightHelper();
    this.setState({lineHeight: selectedLineHeight});
  };

  changeLetterSpacing = () => {
    const selectedLetterSpacing = changeLetterSpacingHelper();
    this.setState({letterSpacing: selectedLetterSpacing});
  };

  aligntext = () => {
    const [textAlign, clickedButtonIndex] = alignTextHelper();
    this.setState({alignButtonIndex: clickedButtonIndex});
    this.setState({textAlign: textAlign});
    ((document.getElementsByClassName("text-format-button")[parseInt(this.state.alignButtonIndex)] as HTMLButtonElement)
    .firstElementChild as HTMLButtonElement).style.filter = "brightness(99%) invert(0)";
  };

  applyChanges = () => {
    const currentTextvalue = (document.getElementsByClassName("page")[0] as HTMLDivElement).innerHTML;
    localStorage.setItem('fontFamily', this.state.fontFamily);
    localStorage.setItem('fontColor', this.state.fontColor);
    localStorage.setItem('fontWeight', this.state.fontWeight);
    localStorage.setItem('fontStyle', this.state.fontStyle);
    localStorage.setItem('textAlign', this.state.textAlign);
    localStorage.setItem('lineHeight', this.state.lineHeight);
    localStorage.setItem('letterSpacing', this.state.letterSpacing);
    localStorage.setItem('fontSize', this.state.fontSize);
    localStorage.setItem('fontSize', this.state.fontSize);
    localStorage.setItem('alignButtonIndex', this.state.alignButtonIndex);
    localStorage.setItem('textValue', currentTextvalue);

    setTimeout(() => {
    (document.getElementsByClassName("submit-button")[0] as HTMLButtonElement).textContent = "Apply Changes";
    }, 800);

    (document.getElementsByClassName("submit-button")[0] as HTMLButtonElement).textContent = "Applied!";
  }

  render() {
    return <div className="sidebar">
      <span className="sidebar-title">TEXT</span>

      <div className="sidebar__inner-block">
        <Selector isDefaultStyle onChange={this.changeFontFamily}>
          <option selected value="Fira Sans">Fira Sans</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Trebuchet MS">Trebuchet</option>
          <option value="Comic Sans MS">Comic Sans</option>
        </Selector>

        <div className='font-weight-and-size'>
          <div className="font-weight-and-size_selector">
            <Selector onChange={this.changeFontWeight}>
              <option value="normal" selected>Normal</option>
              <option value="bold">Bold</option>
              <option value="italic">Italic</option>
            </Selector>
          </div>

          <Input onChange={this.changeFontSize} src="src/assets/fontSize.svg" value={this.state.fontSize} />
        </div>

        <div className="font-color-and-preview">
          <div className="color-preview" />

          <div className="font-color-and-preview_selector">
            <Selector onChange={this.changeFontColor}>
              <option value="#292929">#292929</option>
              <option value="#ffaa33">#ffaa33</option>
              <option value="#1982c4">#1982c4</option>
              <option value="#ff595e">#ff595e</option>
              <option value="#6a4c93">#6a4c93</option>
            </Selector>
          </div>
        </div>

        <div className="letter-spacing-and-line-height">
          <Input isLineHeight src="src/assets/lineHeight.svg" onChange={this.changeLineHeight} value={this.state.lineHeight} />
          <Input isLetterSpacing src="src/assets/letterSpacing.svg" onChange={this.changeLetterSpacing} value={this.state.letterSpacing} />
        </div>

        <div className="text-formating">
          <Button src="src/assets/left.svg" onClick={this.aligntext} />
          <Button src="src/assets/center.svg" onClick={this.aligntext} />
          <Button src="src/assets/right.svg" onClick={this.aligntext} />
          <Button src="src/assets/justify.svg" onClick={this.aligntext} />
        </div>

        <Button isSubmitButton onClick={this.applyChanges} title="Apply Changes" type="submit" />
      </div>
    </div>
  }
}

export default Sidebar