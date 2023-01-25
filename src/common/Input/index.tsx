import { Component } from 'react'
import './Input.css'

interface IInput {
  onChange: () => void;
  type?: string;
  src: string;
  iconName?: string;
  isLineHeight?: boolean;
  isLetterSpacing?: boolean;
  value: string;
}

class Input extends Component <IInput> {
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