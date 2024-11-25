import { About } from './sections/About';
import { FAQs } from './sections/FAQs';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <FAQs />
      <Footer />
    </main>
  );
}

export default App;
