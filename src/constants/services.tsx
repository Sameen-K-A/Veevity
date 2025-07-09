import { Bot, Code, Globe, Rocket, Smartphone, Zap } from "lucide-react";

export const services = [
  {
    icon: <Globe className="w-5 h-5 md:w-8 md:h-8" />,
    title: "Web Applications",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. Scalable, secure, and user-friendly solutions.",
    features: ["React/Next.js", "Real-time features", "Cloud deployment", "API integration"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Code className="w-5 h-5 md:w-8 md:h-8" />,
    title: "Websites",
    description: "Professional websites that convert visitors into customers. Fast, SEO-optimized, and mobile-responsive designs.",
    features: ["SEO optimized", "Mobile responsive", "Fast loading", "Modern design"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-5 h-5 md:w-8 md:h-8" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. Built with React Native and Flutter for optimal performance.",
    features: ["iOS & Android", "Cross-platform", "Native performance", "App store ready"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: <Bot className="w-5 h-5 md:w-8 md:h-8" />,
    title: "AI Automation",
    description: "Intelligent automation solutions powered by AI. Streamline your business processes and reduce manual work.",
    features: ["AI Chatbot"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Rocket className="w-5 h-5 md:w-8 md:h-8" />,
    title: "MVP Development",
    description: "Rapid MVP development to validate your ideas quickly. Get to market faster with our proven development process.",
    features: ["Rapid development", "Market validation", "Iterative approach", "Cost effective"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
    title: "SaaS Solutions",
    description: "End-to-end SaaS platform development. From concept to deployment with subscription management and analytics.",
    features: ["Multi-tenant", "Subscription billing", "Analytics dashboard", "Scalable architecture"],
    gradient: "from-yellow-500 to-orange-500"
  }
];