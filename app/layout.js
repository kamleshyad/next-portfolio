import "./_assets/css/globals.scss";
import { Header } from "./_components/organisms/header/Header";
import { Footer } from "./_components/organisms/footer/Footer";
import { Copyright } from "./_components/organisms/copyright/Copyright";
import { Scrolltotop } from "./_components/molecules/scrolltotop/Scrolltotop";

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
        <Header />
          <main>
            <Scrolltotop />
            {children}
          </main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
