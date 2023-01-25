import { Component, ReactNode } from 'react'
import './Layout.css'

type LayoutProps = {
  children: ReactNode;
}

class Layout extends Component<LayoutProps> {
  render() {
    return <div className='layout'>{this.props.children}</div>
  }
}

export default Layout