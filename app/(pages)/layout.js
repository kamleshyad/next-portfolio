import { Header } from "../_components/organisms/header/Header";
import { Footer } from "../_components/organisms/footer/Footer";
import { Copyright } from "../_components/organisms/copyright/Copyright";

export default function Pagelayout({ children }) {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
            <Copyright />
        </>
    )
}