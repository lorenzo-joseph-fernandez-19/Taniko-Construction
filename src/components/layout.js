import React from 'react'
import NavBar from './burger'
import Footer from './footer'
import { Helmet } from "react-helmet"

const Layout = ({ pageMeta, children }) => (
    <>
      <Helmet>
        <title>{`Taniko Group | ${pageMeta.title}`}</title>
      
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Lorenzo Fernandez" />
      <html lang="en"/>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      </Helmet>
      <div className="is-family-primary">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout