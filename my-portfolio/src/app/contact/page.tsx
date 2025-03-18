import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <p className="mt-4 text-lg text-center">
        Feel free to reach out to me for collaboration, job opportunities, or any inquiries.
      </p>

      <div className="mt-6 border p-6 rounded-lg shadow-md bg-gray-100">
        <h2 className="text-2xl font-semibold">Contact Details</h2>
        <p className="mt-2"><strong>Email:</strong> <a href="mailto:graceboke2019@gmail.com" className="text-blue-600">graceboke2019@gmail.com</a></p>
        <p className="mt-2"><strong>Phone:</strong> <a href="tel:+254745961718" className="text-blue-600">+254 745 961 718</a></p>
      </div>

      <div className="mt-6 border p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Send Me a Message</h2>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-lg font-medium">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-lg font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block text-lg font-medium">Message</label>
            <textarea className="w-full p-2 border rounded-lg" rows={4} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
