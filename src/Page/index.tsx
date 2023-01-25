import { Component } from 'react'
import './Page.css'

class Page extends Component {
  render() {
    return <div className="editor">
      <div className="page" contentEditable>
        Type Here...
      </div>
    </div>
  }
}

export default Page