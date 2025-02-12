import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './Spinner';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      message
    };

    emailjs.send('service_zu5hrmb', 'template_b22rgtv', templateParams, 'zLp_13KfUOccBwJ6T')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
      }, (err) => {
        console.log('FAILED...', err);
      })
      .finally(() => {
        setLoading(false);
      });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      {success ? (
        <div className="success-banner">
          <span className="success-message">
            <span role="img" aria-label="celebrating emoji">🎉</span> Thank you! Your message has been submitted successfully. We will be in touch very soon <span role="img" aria-label="smile emoji">😊</span>
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg" id='contactForm' name="contact">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Send'}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
