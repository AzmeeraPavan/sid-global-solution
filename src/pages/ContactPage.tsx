
import React, { useState } from 'react';
import Button from '../components/common/Button';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import ChatBot from '../components/ChatBot';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (apiError) setApiError(null); // Clear API error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to parse error message from API if available
        let errorMessage = `API Error: ${response.status} ${response.statusText}`;
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (parseError) {
            // Ignore if response body is not JSON or empty
        }
        throw new Error(errorMessage);
      }

      // Assuming successful submission if response.ok
      console.log('Form data submitted successfully:', formData);
      setIsSubmitted(true);
      setFormData(initialFormData); // Reset form on success
    } catch (error) {
      console.error('Failed to submit form:', error);
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setApiError(null);
    setFormData(initialFormData);
  }

  if (isSubmitted) {
    return (
      <div className="py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-lg text-slate-300 mb-8">Your message has been sent successfully. We'll get back to you soon.</p>
        <Button onClick={handleSendAnother} variant="primary">Send Another Message</Button>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              ></textarea>
            </div>
            {apiError && (
              <p className="text-sm text-red-400 bg-red-900/30 p-3 rounded-md border border-red-700">{apiError}</p>
            )}
            <div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Our Office</h3>
            <p className="text-slate-300 whitespace-pre-line">Fortune 9 Buildings, 6th Floor,
Somajiguda, Hyderabad</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Email Us</h3>
            <a href="mailto:info@sidgsdtexperts.com" className="text-slate-300 hover:text-blue-300 transition-colors">info@sidglobal.com</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Call Us</h3>
            <a href="tel:+15551234567" className="text-slate-300 hover:text-blue-300 transition-colors">91 919583121</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Business Hours</h3>
            <p className="text-slate-300">Monday - Friday: 9 AM - 6 PM (CST)</p>
            <p className="text-slate-300">Saturday - Sunday: Closed</p>
          </div>
          <div className="mt-6">
            <img src="https://picsum.photos/seed/map/600/300" alt="Map placeholder" className="rounded-lg shadow-md w-full h-auto object-cover"/>
          </div>
        </div>
      </div>
      <ChatBot/>
    </div>

  );
};

export default ContactPage;