import React from "react";
import type {Metadata} from "next";

// globals css
import "./globals.css";

// header component
import Header from "@/components/header/header";

// silliq scroll
import SmoothScrolling from "@/components/scroll/smooth-scrolling";

// layouts
import MainLayout from "@/layout/main-layout";
import SeoLayout from "@/layout/seo-layout";
import ReactQueryLayout from "@/layout/query-layout";

// scroll to top btn
import ScrollToTop from "@/components/scroll/scroll-to-top";

export const metadata: Metadata = {
    title: "Sfera Academy",
    description: "Sfera academy app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className="antialiased">
        <SmoothScrolling>
            <ReactQueryLayout>
                <SeoLayout>
                    <MainLayout>
                        <Header/>
                        {children}
                        <ScrollToTop/>
                    </MainLayout>
                </SeoLayout>
            </ReactQueryLayout>
        </SmoothScrolling>
        </body>
        </html>
    );
}
