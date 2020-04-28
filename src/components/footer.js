import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="section level has-text-light">
            <div className="level-item">
                <p>{`© ${new Date().getFullYear()} Taniko Group`}</p>
            </div>
        </footer>
    )
}

export default Footer
