// Pricing.jsx - Tabbed pricing layout with fade in/out section animation using Framer Motion + Intersection Observer
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pricingTabs = ["Pick Your Piece", "Best Value Combos", "Monthly Packages"];

const plans = {
  "Pick Your Piece": [
    { title: "1 Reel / Short / TikTok", price: "₹300", description: "Hook, edit, caption, trending audio" },
    { title: "5 Reels", price: "₹1200", description: "Save ₹300 – best for weekly posts" },
    { title: "1 Static Post", price: "₹250", description: "Branded, Gen-Z design included" },
    { title: "5 Posts", price: "₹999", description: "Includes formatting for IG grid" },
    { title: "1 Story Set", price: "₹150", description: "Up to 3 screens + motion text" },
    { title: "Basic Caption Writing", price: "₹75/post", description: "Based on trends + brand tone" },
    { title: "Instagram Bio Revamp", price: "₹199", description: "Short, punchy, Gen-Z appeal" },
  ],
  "Best Value Combos": [
    { title: "5 Reels + 5 Posts", price: "₹1800", description: "Your weekly content, sorted" },
    { title: "8 Reels + 4 Stories + 8 Captions", price: "₹2299", description: "Strategy + execution in one" },
    { title: "10 Reels + 5 Posts + Branding Kit", price: "₹2999", description: "Includes colors, fonts, and hooks" },
    { title: "Festive Combo", price: "₹1499", description: "3 Reels + 3 Themed Posts + 2 Stories" },
  ],
  "Monthly Packages": [
    { title: "Starter", price: "₹4,999/mo", description: "6 Reels, 4 Posts, 1 Story/week, Captions + 1 Strategy Call" },
    { title: "Growth", price: "₹9,999/mo", description: "10 Reels, 6 Posts, 2-3 Stories/week, Research, 2 Strategy Calls" },
    { title: "Viral", price: "₹14,999/mo", description: "15 Reels, 8 Posts, Daily Stories, Brand Kit, Analytics, 4 Calls" },
  ],
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Pick Your Piece");
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.section
      id="pricing"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-black via-[#1a0a0a] to-black text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-metavanta-silver mb-10">
          Pricing <span className="text-metavanta-white">Plans</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-4 mb-10">
          {pricingTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mb-2 md:mb-0 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "bg-metavanta-white text-black"
                  : "bg-metavanta-grey text-white hover:bg-metavanta-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-metavanta-grey/10 p-6 rounded-xl shadow-md border border-red-900 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-metavanta-white mb-2">{plan.title}</h3>
              <p className="text-metavanta-silver text-sm mb-4">{plan.description}</p>
              <div className="text-metavanta-white text-2xl font-semibold">{plan.price}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
