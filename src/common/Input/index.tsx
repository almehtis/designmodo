import { Component } from 'react'
import './Input.css'

type InputProps = {
  onChange: () => void;
  type?: string;
  src: string;
  iconName?: string;
  isLineHeight?: boolean;
  isLetterSpacing?: boolean;
  value: string;
}

class Input extends Component <InputProps> {
  render() {
    return <div className="input-block">
      <img src={this.props.src} />
      <input className="input-block_input" onChange={this.props.onChange} type={this.props.type} value={this.props.value} />
      {this.props.isLineHeight && <span className="line-height-input">%</span>}
      {this.props.isLetterSpacing && <span>px</span>}
    </div>
  }
}

export default Input