import React from "react";
import { Helmet } from "react-helmet";

const SEO: React.FC = () => (
  <Helmet>
    <title>TaskMent: Master Your Tasks, Free Your Mind</title>
    <meta
      name="description"
      content="TaskMent is a modern task management app that helps you organize your life and boost productivity."
    />
    <meta
      name="keywords"
      content="task management, productivity, organization, to-do list, time management"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://taskment.vercel.app" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://taskment.vercel.app" />
    <meta
      property="og:title"
      content="TaskMent: Master Your Tasks, Free Your Mind"
    />
    <meta
      property="og:description"
      content="TaskMent is a modern task management app that helps you organize your life and boost productivity."
    />
    <meta
      property="og:image"
      content="https://taskment.vercel.app/favicon.png"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://taskment.vercel.app" />
    <meta
      property="twitter:title"
      content="TaskMent: Master Your Tasks, Free Your Mind"
    />
    <meta
      property="twitter:description"
      content="TaskMent is a modern task management app that helps you organize your life and boost productivity."
    />
    <meta property="twitter:image" content="https://taskment.vercel.app" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        name: "TaskMent",
        description:
          "TaskMent is a modern task management app that helps you organize your life and boost productivity.",
        applicationCategory: "Productivity",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      })}
    </script>
  </Helmet>
);

export default SEO;
