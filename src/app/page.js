import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Banner from "./_sections/banner";
import Faqs from "./_sections/faqs";
import Features from "./_sections/features";
import Hero from "./_sections/hero";
import HowItWorks from "./_sections/how-it-works";
import Pricing from "./_sections/pricing";
import Testimonials from "./_sections/testimonials";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                <Faqs />
                <Banner />
            </main>
            <Footer />
        </div>
    );
}
