import Head from "../../Components/head/Head";

import "./PrivacyNotice.css";

function PrivacyNotice() {

    return (
        <div>
            <Head isSearch={true} />
            <div className="privacy-notice">
                <h1>Privacy Policy</h1>
                <p>The X5GON project is creating a solution that will help users/students find what they need not just in Open Educational Resources (OER) repositories, but across all open educational resources on the web.</p>

                <h2>Data collection</h2>
                <p>Within the project we collect learning materials data that are openly licensed, and user activity data that is acquired by the X5GON snippet integrated in different OER repositories. The we are collecting the following data:
                    <br />User ID. This value is the identifier of the user.
                    <br />Material URL. This value is the material identifier and the link that the user visited.
                    <br />Referrer URL. This URL is the link from which the user arrived to the material.
                    <br />Access Timestamp. The timestamp at which the material was accessed.
                    <br />Language. The language of the document that user are using.
                </p>

                <h2>Data collection objective</h2>
                <p>We may use the use data shown in the data collection section for analytic purpose</p>
            </div>

        </div>
    )
}

export default PrivacyNotice