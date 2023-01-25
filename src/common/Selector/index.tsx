import { Component, ReactNode } from 'react'
import './Selector.css'

type SelectorProps = {
  children: ReactNode;
  isDefaultStyle?: boolean;
  onChange?: () => void;
}

class Selector extends Component <SelectorProps> {
  render() {
    return <select
      className={this.props.isDefaultStyle ? "selector__wide" : "selector__narrow"}
      name="select"
      onChange={this.props.onChange}
    >
      {this.props.children}
    </select>
  }
}

export default Selector