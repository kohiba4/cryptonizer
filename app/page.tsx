"use client";

import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animatedbeam";
import { 
  Brain, 
  ChartColumnBig, 
  Search, 
  ChartLine, 
  BrainCircuit, 
  History, 
  Target, 
  CalendarArrowDown, 
  Computer,
  Mail,
  BriefcaseBusiness
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggler */}
      <div className="fixed top-6 right-6 z-50">
        <AnimatedThemeToggler />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-3/10 to-chart-2/10 animate-gradient" />
        
        <div className="relative container mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible ?  "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text text-transparent animate-text-shimmer pb-2">
              Cryptonizer
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-foreground/90 font-medium">
              AI-Powered Cryptocurrency Portfolio Optimization
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Combining Modern Portfolio Theory with LSTM Neural Networks to deliver
              intelligent, data-driven investment decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#about"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Learn More
              </a>
              <a
                href="#team"
                className="px-8 py-4 border-2 border-border bg-card hover:bg-accent hover:text-accent-foreground rounded-lg font-semibold transition-all duration-200"
              >
                Meet the Team
              </a>
            </div>
            
            <AnimatedBeamMultipleOutputDemo className="mt-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              The Problem We Solve
            </h2>
            
            <div className="grid md: grid-cols-3 gap-6 mb-12">
              <ProblemCard
                title="Information Overload"
                description="Thousands of cryptocurrencies with conflicting advice lead to decision paralysis.  64. 4% of investors don't know where to start."
                icon={<ChartColumnBig className="w-12 h-12" />}
              />
              <ProblemCard
                title="Lack of Intelligence"
                description="Existing platforms focus on trading execution but lack scientific portfolio optimization and ML-based predictions."
                icon={<Brain className="w-12 h-12" />}
              />
              <ProblemCard
                title="No Validation"
                description="Investors can't backtest strategies before committing real capital, increasing risk and reducing confidence."
                icon={<Search className="w-12 h-12" />}
              />
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Solution</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Cryptonizer is an AI-powered cryptocurrency portfolio optimization platform that integrates
                <strong className="text-primary"> Modern Portfolio Theory</strong> with <strong className="text-primary">Long Short-Term Memory (LSTM)</strong> neural
                networks to provide intelligent, data-driven investment recommendations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The system combines FastAPI backend architecture, Next.js frontend infrastructure, and machine
                learning models trained on historical market data to deliver optimized asset allocations,
                predictive price forecasting, and comprehensive backtesting capabilities for over 10 cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              title="Portfolio Optimization"
              description="Modern Portfolio Theory implementation using PyPortfolioOpt for maximum Sharpe ratio, minimum volatility, and efficient frontier visualization."
              icon={<ChartLine className="w-12 h-12" />}
              colorClass="from-chart-1 to-chart-2"
            />
            <FeatureCard
              title="LSTM Price Predictions"
              description="Advanced neural networks trained on historical 4-hour & 1-day price data with 68. 4% directional accuracy for short-term forecasts."
              icon={<BrainCircuit className="w-12 h-12" />}
              colorClass="from-chart-3 to-chart-5"
            />
            <FeatureCard
              title="Backtesting Engine"
              description="Simulate historical performance with configurable rebalancing frequencies and compare against benchmark strategies."
              icon={<History className="w-12 h-12" />}
              colorClass="from-primary to-chart-3"
            />
            <FeatureCard
              title="ML Trading Signals"
              description="Automated buy/sell/hold recommendations with risk management including stop-loss and take-profit mechanisms."
              icon={<Target className="w-12 h-12" />}
              colorClass="from-chart-2 to-chart-4"
            />
            <FeatureCard
              title="Real-Time Data"
              description="Integration with CoinGecko API and Yahoo Finance for live market data and comprehensive historical analysis."
              icon={<CalendarArrowDown className="w-12 h-12" />}
              colorClass="from-chart-4 to-chart-1"
            />
            <FeatureCard
              title="Interactive Dashboard"
              description="Responsive Next.js interface with dark/light themes, advanced visualizations, and USD/BHD currency support."
              icon={<Computer className="w-12 h-12" />}
              colorClass="from-chart-5 to-primary"
            />
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md: text-5xl font-bold mb-12 text-center">
            Proven Results
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <MetricCard
              value="29.8%"
              label="Sharpe Ratio Improvement"
              description="vs traditional MPT methods"
            />
            <MetricCard
              value="14.17pp"
              label="Outperformance"
              description="vs buy-and-hold strategy"
            />
            <MetricCard
              value="68.4%"
              label="Prediction Accuracy"
              description="directional price movements"
            />
            <MetricCard
              value="<10s"
              label="Optimization Speed"
              description="for typical portfolios"
            />
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Real-World Impact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-lg mb-3 text-primary">ML Trading System Performance</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">+52. 34%</strong> total return (6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">61.2%</strong> win rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">2.109</strong> Sharpe ratio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">-18.42%</strong> max drawdown</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-lg mb-3 text-primary">System Reliability</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">100%</strong> model availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">100%</strong> database integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">1.8s</strong> avg dashboard load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">0</strong> data corruption incidents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technology Stack
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <TechCategory
                title="Backend"
                technologies={[
                  "Python 3.x",
                  "FastAPI",
                  "TensorFlow/Keras",
                  "PyPortfolioOpt",
                  "SQLite",
                ]}
              />
              <TechCategory
                title="Frontend"
                technologies={[
                  "Next.js (App Router)",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS 4",
                  "Recharts & Chart.js",
                ]}
              />
              <TechCategory
                title="Data & ML"
                technologies={[
                  "LSTM Neural Networks",
                  "Yahoo Finance API",
                  "CoinGecko API",
                  "Pandas & NumPy",
                  "Clerk Auth",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMemberCard
              name="Ayoub Fouad Mohammed"
              major="Computer Science"
              email="ayoub_moujahid@hotmail.com"
              linkedin="https://www.linkedin.com/in/ayoub-el-moujahid-670784229/"
              initials="AM"
              gradientClass="from-chart-1 to-chart-2"
            />
            <TeamMemberCard
              name="Kawther Mansour"
              major="Computer Science"
              email="kawthern329@gmail.com"
              linkedin="https://linkedin.com/in/kawther-mansour-9b94b6253"
              initials="KM"
              gradientClass="from-chart-5 to-chart-3"
            />
          </div>
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Academic Supervisor
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Dr. Nabil M. A. Hewahi</h3>
                <p className="text-muted-foreground">Project Supervisor</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <a
                    href="mailto:nhewahi@uob.edu.bh"
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    nhewahi@uob.edu.bh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-2 font-medium">
            Cryptonizer - AI-Powered Cryptocurrency Portfolio Optimization
          </p>
          <p className="text-muted-foreground/70 text-sm">
            A Senior Project at University of Bahrain | 2024-2025
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ==================== Component Definitions ==================== */

function ProblemCard({
  title,
  description,
  icon,
}:  {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group bg-card rounded-xl p-6 shadow-md border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  colorClass,
}: {
  title: string;
  description:  string;
  icon: React.ReactNode;
  colorClass: string;
}) {
  return (
    <div className="group relative bg-card rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      
      <div className="relative">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border hover: border-primary/50 hover:shadow-xl transition-all duration-300 text-center hover:scale-105">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="font-semibold text-lg mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function TechCategory({
  title,
  technologies,
}: {
  title: string;
  technologies:  string[];
}) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-center text-primary">{title}</h3>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="text-muted-foreground flex items-center gap-2 hover:text-foreground hover:translate-x-1 transition-all duration-200"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-primary to-chart-3 rounded-full flex-shrink-0" />
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamMemberCard({
  name,
  major,
  email,
  linkedin,
  initials,
  gradientClass,
}: {
  name: string;
  major: string;
  email: string;
  linkedin: string;
  initials:  string;
  gradientClass:  string;
}) {
  return (
    <div className="bg-card rounded-xl p-8 shadow-md border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{major}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <a
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-primary hover:underline transition-colors text-sm"
          >
            {email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="w-5 h-5 text-primary" />
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover: underline transition-colors text-sm"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}