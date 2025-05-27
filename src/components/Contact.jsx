const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-metavanta-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-metavanta-silver">
          <span className="text-metavanta-white">LET’S CONNECT</span>
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-metavanta-grey/20 text-white rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-metavanta-grey/20 text-white rounded-md"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-metavanta-grey/20 text-white rounded-md"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-metavanta-white text-black rounded-full hover:bg-metavanta-grey hover:text-white transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-metavanta-grey">
          <p>📩 metavantamedia@gmail.com</p>
          <p>📍 Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
