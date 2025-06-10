import Navbar from "@/components/Navbar";
import "./globals.css";
import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "katex/dist/katex.min.css";

export const metadata = {
    title: {
        default: "impulseBlog",
        template: "%s - impulseBlog"
    },
    description: "A Blog site for Physics lovers.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="qv8EepSnae3WBHg4mDhYLmBkpnFQvMf3jXQLHcPWuh8"
                />
                <meta
                    name="google-adsense-account"
                    content="ca-pub-6521956344939059"
                ></meta>
            </head>
            <body className="">
                <ThemeProvider>
                    <div className="container">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
