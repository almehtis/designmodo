import { Component, ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children?: ReactNode;
  isSubmitButton?: boolean;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit";
  src?: string;
}

class Button extends Component <ButtonProps> {
  render() {
    return <button
      className={this.props.isSubmitButton ? "submit-button" : "text-format-button"}
      onClick={this.props.onClick}
      type={this.props.type || "button"}
    >
      {!this.props.isSubmitButton && <img className="text-format-button_image" src={this.props.src} alt="" />}
      {this.props.isSubmitButton && <span>{this.props.title}</span>}
    </button>
  }
}

export default Button