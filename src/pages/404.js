import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const errorPage = () => {
    return (
        <Layout pageMeta={{
            title: "404 Page Not Found",
            keywords: ["tāniko group, 404"],
            description: "We're sorry, but the page you requested was not found."
        }}>
        <div className="section is-large error-spacing">
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">Page Not Found</h2>
                <p className="error-text">We're sorry, but the page you requested was not found.</p>
            <div className="centered">
                <Link to="/"><button className="error-button">Go Home</button></Link>
            </div>
        </div>
        </Layout>
    )
}

export default errorPage