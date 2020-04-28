import React from 'react'
import Header from './header'
import Footer from './footer'
import { Helmet } from "react-helmet"

const Layout = ({ pageMeta, children }) => (
    <>
      <Helmet>
        <title>{`Taniko Construction | ${pageMeta.title}`}</title>
      
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Lorenzo Fernandez" />
      <html lang="en"/>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      </Helmet>
      <div className="is-family-primary">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout