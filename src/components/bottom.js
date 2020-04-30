import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"
// import '../components/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const bottom = () => {
    return  (
        <div className="container">
                <div className="level-left">
                        <div className="level-item">
                            <p>{`© ${new Date().getFullYear()} Taniko Group`}</p>
                        </div>
                    </div>
                </div>
    )
}

export default bottom