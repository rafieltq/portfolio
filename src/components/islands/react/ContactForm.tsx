import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  success: boolean;
  error: boolean;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<FormStatus>({
    success: false,
    error: false,
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_zu5hrmb';
      const templateId = 'template_b22rgtv';
      const publicKey = 'zLp_13KfUOccBwJ6T';
      
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      setStatus({
        success: true,
        error: false,
        message: 'Message sent successfully!',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {status.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {status.message}
        </div>
      )}
      
      {status.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {status.message}
        </div>
      )}
      
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition duration-300 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
