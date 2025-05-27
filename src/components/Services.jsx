const Services = () => {
  const services = [
    {
      title: "Reels & Video Editing",
      description: "Scroll-stopping short-form content",
      icon: "🎬",
    },
    {
      title: "Content Strategy",
      description: "Trend-focused creative direction",
      icon: "🧠",
    },
    {
      title: "Instagram Growth",
      description: "From aesthetics to engagement",
      icon: "📈",
    },
    {
      title: "Brand Campaigns",
      description: "Create viral brand moments",
      icon: "📣",
    },
    {
      title: "YouTube Shorts & TikTok",
      description: "Optimized for multi-platform virality",
      icon: "🎥",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-metavanta-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-metavanta-silver">
          OUR <span className="text-metavanta-white">SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-metavanta-grey/10 p-6 rounded-xl hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-metavanta-white mb-2">
                {service.title}
              </h3>
              <p className="text-metavanta-grey">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
