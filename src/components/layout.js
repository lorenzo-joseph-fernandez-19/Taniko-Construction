import React from 'react'
import NavBar from './burger'
import Header from './header'
import Footer from './footer'
import { Helmet } from "react-helmet"


const Layout = ({ pageMeta, children }) => (
    <>
      <Helmet>
        <title>{`Tāniko Group | ${pageMeta.title}`}</title>
      
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Lorenzo Fernandez" />
      <html lang="en"/>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className="is-family-primary">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout