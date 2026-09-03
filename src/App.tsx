import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (
    title: string,
    message?: string,
    type: 'success' | 'error' | 'info' = 'info'
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, title, message, type };

    setToasts((prev) => [...prev, newToast]);

    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#18181B] dark:bg-[#0A0A0B] dark:text-[#E8E8E8] selection:bg-[#F27D26] selection:text-white transition-colors duration-200">
        {/* Reading / Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Landmark for Screen Readers and SEO */}
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {/* Hero Section */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* About / Biography Section */}
          <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Skills Section */}
          <Skills />

          {/* Projects Showcase with Lazy Loading Gallery */}
          <Projects />

          {/* Experience, Education & Certifications */}
          <Experience />

          {/* Downloadable Resume Callout Section */}
          <ResumeSection
            onOpenResumeModal={() => setIsResumeModalOpen(true)}
            onShowToast={addToast}
          />

          {/* Contact Form & Social Profiles */}
          <Contact onShowToast={addToast} />
        </main>

        {/* Footer */}
        <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Interactive Resume / CV Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          onShowToast={addToast}
        />

        {/* Global Toast Notification System */}
        <ToastContainer toasts={toasts} onDismiss={dismissToast} />
      </div>
    </ThemeProvider>
  );
}
