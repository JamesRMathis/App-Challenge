import React from "react"
import ReactDOM from "react-dom/client"

class Test extends React.Component {
    render() {
        return (
            <div>
                Hello world
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Test />)