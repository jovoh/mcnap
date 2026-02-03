import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="membership" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Join MCNAP Today
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to advance your career in maternal and child health nursing? Join our community of dedicated professionals today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Join Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Why Join MCNAP?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-700">Access to exclusive training and development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-700">Networking with thousands of nursing professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-700">Regular updates on maternal and child health practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-700">Opportunities for leadership and research involvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-700">Discounts on conferences and continuing education</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Membership Benefits</h4>
                <p className="mb-4">Annual membership includes:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Quarterly journal subscription</li>
                  <li>• Free access to webinars</li>
                  <li>• Chapter membership</li>
                  <li>• Certificate of membership</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-2xl font-bold">₱500/year</p>
                  <p className="text-sm opacity-90">Special rates for students available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Get Started
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-2">
                      Thank You for Your Interest!
                    </h4>
                    <p className="text-gray-600">
                      We'll contact you within 24-48 hours with next steps for your MCNAP membership.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="+63 9XX XXX XXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Tell us why you want to join MCNAP..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}

                {/* Contact Information */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span> admin@mcnapofficial.com
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Phone:</span> +639178340357
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Office:</span> Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;