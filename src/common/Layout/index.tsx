import { Component, ReactNode } from 'react'
import './Layout.css'

interface ILayoutProps {
  children: ReactNode;
}

class Layout extends Component<ILayoutProps> {
  render() {
    return <div className='layout'>{this.props.children}</div>
  }
}

export default Layout