import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Star,
  MapPin,
  Clock,
  Users,
  Bell,
  CheckCircle,
  ChevronRight,
  Activity,
  Radio,
  FileText,
  BarChart3,
  Lock,
  Globe,
  Zap,
  Target,
  Eye,
  MessageSquare,
  Calendar,
  Settings,
  Award,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  Play,
  ArrowRight
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Custom Hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.2) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  return [ref, inView];
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-content">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Shield size={24} color="#fff" />
          </div>
          <div className="logo-text">
            <span>IRA</span>
            <span>FORCE</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#command-center">Command Center</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#demo" className="btn btn-secondary">Watch Demo</a>
          <a href="#trial" className="btn btn-primary">Start Free Trial</a>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeInDown}>
            <span className="hero-badge-dot" />
            Trusted by 500+ Security Companies Nationwide
          </motion.div>

          <motion.h1 variants={fadeInUp}>
            Command Your Security Operations with Precision
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            The enterprise-grade workforce management platform built for modern security operations. 
            Real-time tracking, intelligent dispatch, and comprehensive compliance—all in one powerful system.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeInUp}>
            <a href="#trial" className="btn btn-primary btn-lg">
              Start Free Trial <ArrowRight size={20} />
            </a>
            <a href="#demo" className="btn btn-secondary btn-lg">
              <Play size={20} /> Watch Demo
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeInUp}>
            <div className="hero-stat">
              <div className="hero-stat-value">99.9%</div>
              <div className="hero-stat-label">Uptime SLA</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50K+</div>
              <div className="hero-stat-label">Guards Managed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Support Available</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">
                <div className="dashboard-title-icon">
                  <Activity size={20} color="#fff" />
                </div>
                <h4>Command Center</h4>
              </div>
              <div className="dashboard-status">
                <span className="dashboard-status-dot" />
                All Systems Operational
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card">
                <div className="dashboard-card-icon">
                  <Users size={18} color="#13B5EA" />
                </div>
                <h5>284</h5>
                <p>Active Guards</p>
              </div>
              <div className="dashboard-card">
                <div className="dashboard-card-icon">
                  <MapPin size={18} color="#13B5EA" />
                </div>
                <h5>47</h5>
                <p>Sites Covered</p>
              </div>
              <div className="dashboard-card">
                <div className="dashboard-card-icon">
                  <Bell size={18} color="#13B5EA" />
                </div>
                <h5>12</h5>
                <p>Active Alerts</p>
              </div>
            </div>

            <div className="dashboard-map">
              <div className="map-grid" />
              <div className="map-dots">
                <div className="map-dot" />
                <div className="map-dot" />
                <div className="map-dot" />
                <div className="map-dot" />
                <div className="map-dot" />
              </div>
            </div>
          </div>

          <motion.div 
            className="floating-badge floating-badge-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="floating-badge-icon">
              <CheckCircle size={18} color="#fff" />
            </div>
            <div className="floating-badge-text">
              <h5>Patrol Complete</h5>
              <p>Building A - Zone 3</p>
            </div>
          </motion.div>

          <motion.div 
            className="floating-badge floating-badge-2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="floating-badge-icon">
              <Clock size={18} color="#fff" />
            </div>
            <div className="floating-badge-text">
              <h5>Shift Started</h5>
              <p>8:00 AM - John D.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Trust Badges Section
const TrustSection = () => {
  const [ref, inView] = useScrollAnimation();

  const badges = [
    { icon: <Lock size={24} />, text: 'SOC 2 Type II' },
    { icon: <Shield size={24} />, text: 'GDPR Compliant' },
    { icon: <Award size={24} />, text: 'ISO 27001' },
    { icon: <Globe size={24} />, text: 'HIPAA Ready' },
  ];

  return (
    <section className="trust-section" ref={ref}>
      <motion.div 
        className="trust-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.p className="trust-label" variants={fadeIn}>
          Enterprise-Grade Security & Compliance
        </motion.p>
        <motion.div className="trust-badges" variants={staggerContainer}>
          {badges.map((badge, index) => (
            <motion.div key={index} className="trust-badge" variants={fadeInUp}>
              <div className="trust-badge-icon">{badge.icon}</div>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const [ref, inView] = useScrollAnimation();

  const features = [
    {
      icon: <Clock size={28} />,
      title: 'Time & Attendance',
      description: 'Multi-method clock in/out with GPS verification, geofencing, and real-time breadcrumb tracking.',
      items: ['Mobile, Kiosk & Web Clock-in', 'Geofencing & GPS Tracking', 'Automated Overtime Alerts']
    },
    {
      icon: <MapPin size={28} />,
      title: 'Guard Tour System',
      description: 'Checkpoint verification with NFC, QR codes, and intelligent route optimization.',
      items: ['NFC/QR Checkpoint Scanning', 'Route Optimization', 'Real-time Patrol Progress']
    },
    {
      icon: <Calendar size={28} />,
      title: 'Smart Scheduling',
      description: 'AI-assisted scheduling with drag-and-drop interface and automated shift management.',
      items: ['AI-Assisted Scheduling', 'Shift Swap & Replacement', 'Work Hour Compliance']
    },
    {
      icon: <FileText size={28} />,
      title: 'Incident Reporting',
      description: 'Comprehensive incident documentation with multimedia support and AI-assisted writing.',
      items: ['AI-Powered Report Writing', 'Photo/Video Evidence', 'Real-time Escalation']
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'Communications Hub',
      description: 'Unified team messaging, company feed, and help desk all in one platform.',
      items: ['Team Chat & Messaging', 'Company Announcements', 'Multi-language Support']
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Analytics & Insights',
      description: 'Real-time dashboards, custom reports, and predictive analytics for better decisions.',
      items: ['Live Operational Dashboards', 'Custom Report Builder', 'Predictive Analytics']
    }
  ];

  return (
    <section className="features-section" id="features" ref={ref}>
      <motion.div 
        className="section-header"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <span className="section-badge">
          <Zap size={16} /> Platform Features
        </span>
        <h2>Everything You Need to Run World-Class Security Operations</h2>
        <p>A comprehensive suite of tools designed for modern security workforce management.</p>
      </motion.div>

      <motion.div 
        className="features-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div key={index} className="feature-card" variants={fadeInUp}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ul className="feature-list">
              {feature.items.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// Command Center Section
const CommandCenterSection = () => {
  const [ref, inView] = useScrollAnimation();

  const features = [
    {
      icon: <Eye size={20} />,
      title: 'Real-time Visibility',
      description: 'Monitor all guard locations, patrol progress, and incidents on a single dashboard.'
    },
    {
      icon: <Radio size={20} />,
      title: 'Intelligent Dispatch',
      description: 'Automatically suggest the nearest available officer based on proximity and skills.'
    },
    {
      icon: <Activity size={20} />,
      title: 'System Integrations',
      description: 'Connect with CCTV, access control, and alarm systems for unified monitoring.'
    }
  ];

  const alerts = [
    { type: 'success', icon: <CheckCircle size={16} />, title: 'Patrol Complete', desc: 'Zone A - Building 1' },
    { type: 'warning', icon: <Bell size={16} />, title: 'Checkpoint Missed', desc: 'Zone C - Gate 4' },
    { type: 'info', icon: <Clock size={16} />, title: 'Shift Change', desc: 'Team Alpha - 8:00 PM' }
  ];

  return (
    <section className="command-section" id="command-center" ref={ref}>
      <div className="command-bg" />
      
      <motion.div 
        className="command-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div className="command-text" variants={fadeInUp}>
          <span className="section-badge">
            <Target size={16} /> Security Operations Center
          </span>
          <h2>Your Command Center for Mission-Critical Security</h2>
          <p>
            A unified interface that brings together live alerts, patrol tracking, 
            incident management, and intelligent dispatch operations.
          </p>

          <div className="command-features">
            {features.map((feature, index) => (
              <motion.div key={index} className="command-feature" variants={fadeInUp}>
                <div className="command-feature-icon">{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#demo" className="btn btn-primary">
            See SOC in Action <ChevronRight size={20} />
          </a>
        </motion.div>

        <motion.div className="command-visual" variants={scaleIn}>
          <div className="command-dashboard">
            <div className="command-dashboard-header">
              <div className="command-dashboard-tabs">
                <button className="command-tab active">Live View</button>
                <button className="command-tab">Incidents</button>
                <button className="command-tab">Patrols</button>
              </div>
              <div className="dashboard-status">
                <span className="dashboard-status-dot" />
                Live
              </div>
            </div>

            <div className="command-dashboard-content">
              <div className="command-map-container">
                <div className="command-map-grid" />
                <div className="map-dots">
                  <div className="map-dot" />
                  <div className="map-dot" />
                  <div className="map-dot" />
                  <div className="map-dot" />
                </div>
              </div>

              <div className="command-alerts">
                {alerts.map((alert, index) => (
                  <div key={index} className="command-alert">
                    <div className={`command-alert-icon ${alert.type}`}>
                      {alert.icon}
                    </div>
                    <div className="command-alert-text">
                      <h5>{alert.title}</h5>
                      <p>{alert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [ref, inView] = useScrollAnimation();

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small security teams',
      price: '49',
      features: [
        'Up to 30 users',
        'Time & Attendance',
        'Basic Scheduling',
        'Mobile App Access',
        'Email Support',
        '5 GB Storage'
      ]
    },
    {
      name: 'Professional',
      description: 'For growing security operations',
      price: '99',
      featured: true,
      features: [
        'Up to 100 users',
        'Guard Tour System',
        'Incident Reporting',
        'Geofencing & GPS',
        'Priority Support',
        '50 GB Storage',
        'API Access'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      features: [
        'Unlimited users',
        'Command Center (SOC)',
        'Advanced Analytics',
        'Custom Integrations',
        'Dedicated Success Manager',
        'Unlimited Storage',
        'SSO & Enhanced Security',
        'SLA Guarantee'
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing" ref={ref}>
      <motion.div 
        className="section-header"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <span className="section-badge">
          <Award size={16} /> Pricing Plans
        </span>
        <h2>Choose the Right Plan for Your Operations</h2>
        <p>Flexible pricing that scales with your security workforce. Start free, upgrade anytime.</p>
      </motion.div>

      <motion.div 
        className="pricing-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            variants={fadeInUp}
          >
            {plan.featured && <span className="pricing-badge">Most Popular</span>}
            
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="pricing-price">
                {plan.price === 'Custom' ? (
                  <span className="amount">Custom</span>
                ) : (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/mo</span>
                  </>
                )}
              </div>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <CheckCircle size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="#trial" 
              className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
            >
              {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [ref, inView] = useScrollAnimation();

  const testimonials = [
    {
      content: "IRA FORCE transformed our operations. We've reduced scheduling conflicts by 85% and our guards love the mobile app. The command center gives us visibility we never had before.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "SecureGuard Inc.",
      initials: "MC"
    },
    {
      content: "The incident reporting with AI assistance has saved our team countless hours. Reports are more detailed and consistent. Our clients are impressed with the professionalism.",
      author: "Sarah Johnson",
      role: "Regional Manager",
      company: "Allied Protection Services",
      initials: "SJ"
    },
    {
      content: "Implementation was seamless and the support team is exceptional. We're now managing 200+ guards across 35 sites with a fraction of the administrative overhead.",
      author: "David Park",
      role: "CEO",
      company: "Sentinel Security Group",
      initials: "DP"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials" ref={ref}>
      <motion.div 
        className="section-header"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <span className="section-badge">
          <Star size={16} /> Customer Stories
        </span>
        <h2>Trusted by Security Leaders Nationwide</h2>
        <p>See how security companies are transforming their operations with IRA FORCE.</p>
      </motion.div>

      <motion.div 
        className="testimonials-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} className="testimonial-card" variants={fadeInUp}>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFCD00" />
              ))}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonial.initials}</div>
              <div className="testimonial-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const [ref, inView] = useScrollAnimation();

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-container">
        <motion.div 
          className="cta-card"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <div className="cta-content">
            <h2>Ready to Transform Your Security Operations?</h2>
            <p>
              Join 500+ security companies who trust IRA FORCE to power their workforce management. 
              Start your free 14-day trial today—no credit card required.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary btn-lg">
                Start Free Trial <ArrowRight size={20} />
              </a>
              <a href="#demo" className="btn btn-secondary btn-lg">
                Schedule a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Command Center', 'Mobile App', 'Integrations', 'API Docs', 'Pricing']
    },
    {
      title: 'Solutions',
      links: ['Security Services', 'Facilities Management', 'Healthcare', 'Logistics', 'Retail']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Case Studies', 'Webinars', 'Help Center', 'Documentation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact', 'Partners', 'Press']
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <Shield size={24} color="#fff" />
              </div>
              <div className="logo-text">
                <span>IRA</span>
                <span>FORCE</span>
              </div>
            </div>
            <p>Enterprise-grade security workforce management platform trusted by leading security companies nationwide.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>

          {columns.map((column, index) => (
            <div key={index} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2025 IRA FORCE. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <CommandCenterSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
