import React from 'react'
import Layout from '../components/layout'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const PrivacyPolicy = () => {
    return (
        <Layout pageMeta={{
            title: "Privacy Policy",
            keywords: ["construction"],
            description: "Taniko Construction"
        }}>
        <section className="section is-medium has-text-white">
            <h1>Privacy Policy</h1>
            <hr className="red-line-title" />
                <div className="container">
                    <div className="content">
                    <h2 className="has-text-white is-size-2">How we use your information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ol className="is-lower-roman">
                        <li>Provide, operate, and maintain our website.</li>
                        <li>Improve, personalize, and expand our website.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                        <li>Send you emails.</li>
                        <li>Find and prevent fraud.</li>
                    </ol>
                    <h2 className="has-text-white is-size-2">Log Files</h2>
                    <p>Taniko Construction follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a> and the <a href="https://www.disclaimergenerator.org/">Disclaimer Generator</a>.</p>

                    <h2 className="has-text-white is-size-2">Cookies and Web Beacons</h2>
                    <p>Like any other website, Taniko Construction uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                    <p>For more general information on cookies, please read <OutboundLink className="link-underline" href="https://www.cookieconsent.com/what-are-cookies/" rel="noreferrer noopener" target="_blank">What Are Cookies"</OutboundLink></p>

                    <h2 className="has-text-white is-size-2">Advertising Partners Privacy Policies</h2>
                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Taniko Construction.</p>
                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Taniko Construction, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p>Note that Taniko Construction has no access to or control over these cookies that are used by third-party advertisers.</p>

                    <h2 className="has-text-white is-size-2">Third Party Privacy Policies</h2>
                    <p>Taniko Construction's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

                    <h2 className="has-text-white is-size-2">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                    <ol className="is-lower-roman">
                        <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                        <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                        <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ol>

                    <h2 className="has-text-white is-size-2">GDPR Data Protection Rights</h2>
                    <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                    <ol className="is-lower-roman">
                        <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                        <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                    </ol>

                    <h2 className="has-text-white is-size-2">Children's Information</h2>
                    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p>Taniko Construction does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    </div>
                    </div>
        </section>
        </Layout>
    )
}

export default PrivacyPolicy