import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="hero-footer level has-background-black has-text-light section">
            <div className="level-item">
                <p>{`© ${new Date().getFullYear()} Taniko Construction Limited`}</p>
            </div>
            <div className="level-item">
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="level-item">
                <Link to="/conditions">Terms & Conditions</Link>
            </div>
            <div className="level-item">
                <p>(Social Icons)</p>
            </div>
        </footer>
    )
}

export default Footer