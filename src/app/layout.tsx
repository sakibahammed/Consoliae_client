import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://consoliae.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Consoliae — software that survives contact with real users",
    template: "%s · Consoliae",
  },
  description:
    "Consoliae is a software engineering studio building AI agents, ML infrastructure, applications and the backend underneath them. 4 years, 9 systems in production.",
  applicationName: "Consoliae",
  keywords: [
    "AI agents",
    "ML infrastructure",
    "software engineering studio",
    "Claude",
    "Next.js",
    "Kubernetes",
    "backend engineering",
    "application development",
    "Consoliae",
  ],
  authors: [{ name: "Consoliae" }],
  creator: "Consoliae",
  publisher: "Consoliae",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Consoliae",
    title: "Consoliae — software that survives contact with real users",
    description:
      "AI agents, ML infrastructure, applications, and the servers underneath. We build the system, then we keep it running.",
    images: [
      {
        url: "/photo.jpg",
        width: 1600,
        height: 1180,
        alt: "A hydroelectric dam and its switchyard under load",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consoliae — engineering studio for production AI systems",
    description:
      "9 systems in production. Scope, architect, build, deploy, operate.",
    images: ["/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Consoliae",
      url: `${SITE_URL}/`,
      email: "info@consoliae.com",
      slogan: "Intelligent systems. Simplified.",
      foundingDate: "2022",
      numberOfEmployees: 19,
    },
    {
      "@type": "ProfessionalService",
      name: "Consoliae",
      areaServed: "Worldwide",
      serviceType: [
        "AI agent engineering",
        "ML infrastructure",
        "Application development",
        "Backend engineering",
        "Deployment and operations",
      ],
      parentOrganization: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/#work` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who owns the code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do, from the first commit. Repositories live in your organisation and we work inside it.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if we stop working together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A four-week handover: runbooks, architecture decision records, credential transfer and two weeks of shadowing with whoever takes over.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#top">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
