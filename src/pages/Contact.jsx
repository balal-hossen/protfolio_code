import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // success | error
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS send function
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (

  <div>

     <h2 className="text-cyan-400 text-xl sm:text-2xl font-semibold text-center relative my-10">
          <span className="relative z-10 px-4 bg-dark text-3xl font-bold">Get In Touch</span>
          <span className="absolute left-15 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
          <span className="absolute right-15 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
        </h2>
     <section className="flex justify-center items-start py-12 px-4">
    
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">

    {/* Left: Contact Info */}
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl font-bold">Let's Connect</h1>
      <p className="text-gray-400 font-bold">
        I'm always interested in new opportunities and exciting projects. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div className="space-y-4">
        {[
          { icon: <Mail size={24} />, title: "Email", info: "balalhossen1711@gmail.com" },
          { icon: <Phone size={24} />, title: "Phone", info: "01309707330" },
          { icon: <MapPin size={24} />, title: "Location", info: "Rangpur, Bangladesh" },
          { icon: <MessageCircle size={24} />, title: "Message", info: "Feel free to send a message here!" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 rounded-2xl border border-blue-500 p-4 items-center 
                       hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            <span className="p-3 bg-gray-200 rounded-full">{item.icon}</span>
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Form */}
    <div className="flex-1 w-full max-w-xl shadow-lg rounded-xl p-8 md:p-12 
                    hover:shadow-2xl transition-shadow duration-300 ">
      {submitStatus === "success" && (
        <div className="flex items-center bg-green-100 text-green-700 p-4 rounded mb-6">
          <FaCheckCircle className="mr-2" /> Message sent successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center bg-red-100 text-red-700 p-4 rounded mb-6">
          <FaTimesCircle className="mr-2" /> Failed to send message.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            disabled={isSubmitting}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none"
          disabled={isSubmitting}
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </div>
</section>
  </div>


  );
};

export default Contact;
