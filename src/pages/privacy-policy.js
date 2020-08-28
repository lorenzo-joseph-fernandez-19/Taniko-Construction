import React from 'react'
import Layout from '../components/layout'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const PrivacyPolicy = () => {
    return (
        <Layout pageMeta={{
            title: "Privacy Policy",
            keywords: ["tāniko group privacy policy"],
            description: "This privacy policy explains how we may collect, store, use, and disclose any personal information that you provide to us when using our website..."
        }}>
            <div className="section">
                <h2 className="privacy-h2">Privacy Policy</h2>
            </div>
        <section className="section">
                <div className="container index-spacing">
                    <h2 className="privacy-title">How we use your information</h2>
                    <p className="bold-subtitle">We use the information we collect in various ways, including to:</p>
                    <ol className="privacy-text is-lower-roman">
                        <li>Provide, operate, and maintain our website.</li>
                        <li>Improve, personalize, and expand our website.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                        <li>Send you emails.</li>
                        <li>Find and prevent fraud.</li>
                    </ol>
                    
                    <h2 className="privacy-title">Log Files</h2>
                    <p className="privacy-text">Taniko Group follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <OutboundLink className="link-underline" href="https://www.privacypolicygenerator.info" rel="noreferrer noopener" target="_blank">Privacy Policy Generator</OutboundLink> and the <OutboundLink className="link-underline" href="https://www.disclaimergenerator.org/" rel="noreferrer noopener" target="_blank">Disclaimer Generator</OutboundLink>.</p>
                    
                    <h2 className="privacy-title">Cookies and Web Beacons</h2>
                    <p className="privacy-text">Like any other website, Taniko Group uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                    <p className="privacy-text">For more general information on cookies, please read <OutboundLink className="link-underline" href="https://www.cookieconsent.com/what-are-cookies/" rel="noreferrer noopener" target="_blank">What Are Cookies"</OutboundLink></p>

                    <h2 className="privacy-title">Advertising Partners Privacy Policies</h2>
                    <p className="privacy-text">You may consult this list to find the Privacy Policy for each of the advertising partners of Taniko Group.</p>
                    <p className="privacy-text">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Taniko Group, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p className="privacy-text">Note that Taniko Group has no access to or control over these cookies that are used by third-party advertisers.</p>

                    <h2 className="privacy-title">Third Party Privacy Policies</h2>
                    <p className="privacy-text">Taniko Group's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                    <p className="privacy-text">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                    <h2 className="privacy-title">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p className="bold-subtitle">Under the CCPA, among other rights, California consumers have the right to:</p>
                    <ol className="privacy-text is-lower-roman">
                        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ol>

                    <h2 className="privacy-title">GDPR Data Protection Rights</h2>
                    <p className="bold-subtitle">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ol className="privacy-text is-lower-roman">
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ol>

                    <h2 className="privacy-title">Children's Information</h2>
                    <p className="privacy-text">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p className="privacy-text">Taniko Group does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                </div>
        </section>
        </Layout>
    )
}

export default PrivacyPolicy