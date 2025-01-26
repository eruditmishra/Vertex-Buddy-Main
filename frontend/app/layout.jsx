import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vertex Buddy",
  alternateName: "vertex buddy",
  url: "https://vertexbuddy.com/",
  logo: "/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "verify@vertexbuddy.com",
    contactType: "sales",
    contactOption: "TollFree",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61561369004890",
    "https://www.linkedin.com/company/vertex-buddy/?viewAsMember=true",
  ],
};
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vertex Buddy",
  image: "/icon.png",
  "@id": "",
  url: "https://vertexbuddy.com",
  email: "verify@vertexbuddy.com",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61561369004890",
    "https://www.linkedin.com/company/vertex-buddy/?viewAsMember=true",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/kDrhHSWm/Logo.png"
        />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
        <div className=" bg-[#f9f9f9] relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
