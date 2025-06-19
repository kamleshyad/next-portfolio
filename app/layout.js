import "./_assets/css/globals.scss";

export const metadata = {
    title: "Kamlesh | Frontend Developer Portfolio",
    description: "I'm a frontend developer with 3.6 years of experience, skilled in React.js, Next.js, WordPress, Tailwind, and more. I craft responsive, high-performance websites with clean UI and modern design.",
    icons: {
      icon: '/images/favicon.png'
    }
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
              {children}
        </body>
      </html>
    );
}