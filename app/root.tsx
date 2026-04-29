import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/Navbar";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "canonical", href: "https://www.priyanshu.pw" },
];

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Welcome to Priyanshu Maurya Portfolio | Full Stack Developer & Software Engineer",
    },
    {
      name: "description",
      content:
        "Welcome to Priyanshu Maurya's developer portfolio. Explore full stack projects, DevOps engineering work, AI/ML interests, coding profiles, software development skills, and technical journey.",
    },
    {
      name: "keywords",
      content:
        "Priyanshu Maurya, Priyanshu Portfolio, Full Stack Developer, MERN Stack Developer, React Developer, Software Engineer, DevOps Engineer, AI ML Student, Web Developer India, Priyanshu Maurya Website",
    },
    { name: "author", content: "Priyanshu Maurya" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#000000" },
    {
      property: "og:title",
      content: "Priyanshu Maurya Portfolio | Full Stack Developer",
    },
    {
      property: "og:description",
      content:
        "Discover Priyanshu Maurya's software projects, technical skills, coding achievements, DevOps work, and engineering journey.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.priyanshu.pw",
    },
    {
      property: "og:site_name",
      content: "Priyanshu Maurya Portfolio",
    },
    {
      property: "og:image",
      content: "https://www.priyanshu.pw/og-image.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Priyanshu Maurya Portfolio | Full Stack Developer",
    },
    {
      name: "twitter:description",
      content:
        "Explore software engineering projects, web development, DevOps work, and coding journey of Priyanshu Maurya.",
    },
    {
      name: "twitter:image",
      content: "https://www.priyanshu.pw/og-image.png",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Priyanshu Maurya",
              url: "https://www.priyanshu.pw",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/CosmicKittu",
                "https://www.linkedin.com/",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Node.js",
                "DevOps",
                "Artificial Intelligence",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
