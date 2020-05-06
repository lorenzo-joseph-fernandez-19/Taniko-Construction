import React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout pageMeta={{
            title: "Contact Us",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
            <div className="containerz">
                <div className="formBox">
                    <form name="contact" method="POST" data-netlify="true">
                        <h2>Contact Us</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="" required="required" />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Phone</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" />
                            <span>Type Your Message Here...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" name=""/>
                        </div>
                    </form>
                </div>
                {/* <div className="imageBox"></div> */}
            </div>
        </Layout>
    )
}

export default contactPage