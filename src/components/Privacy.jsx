"use client";
import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | My Blog</title>
                <meta
                    name="description"
                    content="Learn how your data is handled on our blog, including AI-generated images and contact form privacy."
                />
            </Head>
            <div className="privacy-policy">
                <h1>Privacy Policy</h1>
                <p className="updated">Last updated: June 9, 2025</p>

                <p>
                    Thank you for visiting our blog. We are committed to
                    maintaining your privacy and protecting your information.
                    This privacy policy explains how data is handled on this
                    website, which is built with Next.js, uses Markdown for
                    content, and is hosted on Vercel.
                </p>

                <h2>1. Personal Information</h2>
                <p>
                    We do not actively collect personal data from our users
                    through registration or account systems. However, we provide
                    a contact form that allows visitors to reach us directly.
                </p>

                <p>
                    The contact form is powered by{" "}
                    <a
                        href="https://formsubmit.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FormSubmit
                    </a>
                    , a third-party service that securely sends your message to
                    our email. When you use the contact form, your name, email
                    address, and message content will be transmitted to us via
                    email.
                </p>

                <p>
                    We do not store, share, or use this information for
                    marketing or analytics. It is solely used to respond to your
                    inquiry.
                </p>

                <h2>2. Hosting and Logs</h2>
                <p>
                    Our website is hosted on{" "}
                    <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vercel
                    </a>
                    . Like most hosting providers, Vercel may collect anonymous
                    metadata such as:
                </p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                </ul>
                <p>
                    This data is collected for performance monitoring, error
                    tracking, and security purposes. It is not linked to any
                    individual.
                </p>

                <h2>3. AI-Generated Images</h2>
                <p>
                    All images featured on this blog are created using AI tools
                    such as DALL·E or similar generative platforms. These images
                    are not real photographs, experimental results, or
                    depictions of actual people, objects, or places.
                </p>
                <p>
                    They are used purely for illustrative or artistic purposes
                    and should not be interpreted as factual or authentic.
                </p>

                <h2>4. Cookies and Tracking</h2>
                <p>
                    This site does not use cookies for tracking, advertising, or
                    personalization. We do not embed third-party trackers,
                    analytics tools, or ad platforms.
                </p>

                <h2>5. Changes to This Policy</h2>
                <p>
                    This privacy policy may be updated periodically to reflect
                    changes in site functionality or legal obligations. All
                    updates will be posted on this page with the date of
                    revision clearly stated.
                </p>

                <h2>6. Contact</h2>
                <p>
                    If you have questions or concerns about this privacy policy,
                    please use the <a href="/contact">Contact</a> page to get in
                    touch with us.
                </p>
            </div>
        </>
    );
}
