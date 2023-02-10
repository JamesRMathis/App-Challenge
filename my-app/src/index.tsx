import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'

class Test extends React.Component {
    render() {
        return (
            <div>
                Hello world
            </div>
        )
    }
}

// add component to page
const rootElem = document.getElementById('root')
let root;
if (rootElem !== null) {
    root = ReactDOM.createRoot(rootElem)
}
root.render(<Test />)