import React from "react";
import './Picture.css'
/*eslint-disable */
class Picture extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { index } = this.props
        return <section>
            <div className="img-container">
                <img src={`https://picsum.photos/500/300?random=${index}`} alt='Random' />
                {index}
            </div>
        </section>
    }
}

export default Picture