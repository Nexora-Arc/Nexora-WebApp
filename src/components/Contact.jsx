// import React, { useState, useEffect, useRef } from 'react';
// import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
// import { sendMessage } from '../utils/contactUtils';
// import { FaInstagram } from "react-icons/fa";
// import { useForm, ValidationError } from '@formspree/react';
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     institution: '',
//     message: '',
//     workshop: 'c-beginner'
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       await sendMessage(formData);
//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         institution: '',
//         message: '',
//         workshop: 'c-beginner'
//       });
//     } catch (error) {
//       setSubmitStatus('error');
//       console.error('Error sending message:', error);
//     } finally {
//       setIsSubmitting(false);
      
//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     }
//   };

//   const workshops = [
//     { id: 'c-beginner', name: 'C Programming - Beginner' },
//     { id: 'c-advanced', name: 'C Programming - Advanced' },
//     { id: 'iot-beginner', name: 'IoT Technology - Beginner' },
//     { id: 'iot-intermediate', name: 'IoT Technology - Intermediate' },
//     { id: 'iot-advanced', name: 'IoT Technology - Advanced' }
//   ];

//   return (
//     <section id="contact" ref={sectionRef} className="py-20 bg-[#0F0F0F]">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
//           <p className="text-gray-300">
//             Have questions about our workshops or want to register? Reach out to us and we'll get back to you shortly.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-100">
//             <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
//                   <Mail className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Email Us</h4>
//                   <p className="text-gray-300">info.nexoraarc@gmail.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
//                   <Phone className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Call Us</h4>
//                   <p className="text-gray-300">+91 83202 80120</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
//                   <FaInstagram className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Instagram</h4>
//                   <p className="text-gray-300">@nexoraarc</p>
//                 </div>
//               </div>
              
//               {/* <div className="flex items-start">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
//                   <MapPin className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-medium mb-1">Location</h4>
//                   <p className="text-gray-300">
//                     Nexora Arc Training Center<br />
//                     Tech Park, Innovation Street<br />
//                     Bangalore, Karnataka 560001
//                   </p>
//                 </div>
//               </div> */}
              
//               <div className="flex items-start">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
//                   <MessageSquare className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-medium mb-1">WhatsApp</h4>
//                   <p className="text-gray-300">+91 83202 80120</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
//             <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
//               <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Full Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="phone" className="block text-gray-300 mb-1 text-sm">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                     placeholder="Your phone number"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="institution" className="block text-gray-300 mb-1 text-sm">Institution Name</label>
//                   <input
//                     type="text"
//                     id="institution"
//                     name="institution"
//                     value={formData.institution}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                     placeholder="Your institution name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="workshop" className="block text-gray-300 mb-1 text-sm">Interested Workshop</label>
//                   <select
//                     id="workshop"
//                     name="workshop"
//                     value={formData.workshop}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                   >
//                     {workshops.map(workshop => (
//                       <option key={workshop.id} value={workshop.id} className="bg-gray-900">
//                         {workshop.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
//                     placeholder="Tell us about your requirements or questions..."
//                   ></textarea>
//                 </div>
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`mt-6 w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
//                   isSubmitting 
//                     ? 'bg-gray-700 cursor-not-allowed' 
//                     : 'bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] hover:shadow-lg hover:shadow-purple-500/20'
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <span>Sending...</span>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </button>
              
//               {submitStatus === 'success' && (
//                 <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
//                   Message sent successfully! We'll get back to you soon.
//                 </div>
//               )}
              
//               {submitStatus === 'error' && (
//                 <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
//                   There was an error sending your message. Please try again.
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MessageSquare } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleFormspreeSubmit] = useForm("manoedkq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
    workshop: 'c-beginner'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await handleFormspreeSubmit(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
        workshop: 'c-beginner'
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const workshops = [
    { id: 'c-beginner', name: 'ABC TO C: C Language Workshop' },
    { id: 'c-advanced', name: 'C Programming - Advanced' },
    { id: 'iot-beginner', name: 'IoT Technology - Beginner' },
    { id: 'iot-intermediate', name: 'IoT Technology - Intermediate' },
    { id: 'iot-advanced', name: 'IoT Technology - Advanced' }
  ];

  if (state.succeeded) {
    return (
      <section id="contact" ref={sectionRef} className="py-20 bg-[#0F0F0F]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white text-xl">Thanks for joining!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300">
            Have questions about our workshops or want to register? Reach out to us and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-100">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-gray-300">info.nexoraarc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-gray-300">+91 83202 80120</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
                  <FaInstagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Instagram</h4>
                  <p className="text-gray-300">@nexora_arc</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] mr-4 shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-300">+91 83202 80120</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-1 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-gray-300 mb-1 text-sm">Institution Name</label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                    placeholder="Your institution name"
                  />
                </div>
                
                <div>
                  <label htmlFor="workshop" className="block text-gray-300 mb-1 text-sm">Interested Workshop</label>
                  <select
                    id="workshop"
                    name="workshop"
                    value={formData.workshop}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                  >
                    {workshops.map(workshop => (
                      <option key={workshop.id} value={workshop.id} className="bg-gray-900">
                        {workshop.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7E5BF6]"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || state.submitting}
                className={`mt-6 w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
                  isSubmitting || state.submitting
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#7E5BF6] to-[#DF5BD3] hover:shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                {isSubmitting || state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;