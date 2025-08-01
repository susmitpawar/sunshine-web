import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WebsiteTypes from './components/WebsiteTypes';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
        <p className="text-red-500">{error.message}</p>
        <button
          className="mt-4 px-3 py-2 bg-blue-600 text-white rounded"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

const HomeLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <About />
      <WebsiteTypes />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
