import Hero from "../components/Hero";
import About from "../components/About";
import Why from "../components/Why";

const Home = () => {
    return (
        <main className="w-screen bg-[#02071D]">
            <Hero />
            <About/>
            <Why/>
        </main>
    );
};

export default Home;