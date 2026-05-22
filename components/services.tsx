'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wrench, Eye, Shield, Zap, Droplet, Gauge } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Regular Maintenance',
    description: 'Keep your vehicle running smoothly with our comprehensive maintenance services including oil changes, fluid checks, and inspections.',
    features: ['Oil & Filter Change', 'Fluid Top-ups', 'Belt Inspection', 'Battery Check']
  },
  {
    icon: Eye,
    title: 'Hybrid Diagnostics',
    description: 'Advanced diagnostic services to identify and resolve any issues with precision using state-of-the-art equipment.',
    features: ['Computer Scan', 'System Analysis', 'Performance Report', 'Detailed Assessment']
  },
  {
    icon: Shield,
    title: 'Safety Inspection',
    description: 'Comprehensive safety checks to ensure your vehicle meets all safety standards and performs optimally.',
    features: ['Brake Check', 'Suspension Test', 'Light Inspection', 'Safety Report']
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'Expert electrical system repairs and upgrades for your vehicle\'s power and charging systems.',
    features: ['Battery Service', 'Alternator Check', 'Wiring Inspection', 'System Upgrade']
  },
  {
    icon: Droplet,
    title: 'Engine Care',
    description: 'Complete engine servicing including repairs, overhauls, and performance optimization for maximum efficiency.',
    features: ['Engine Tune-up', 'Fluid Flush', 'Spark Plugs', 'Performance Boost']
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description: 'Enhance your vehicle\'s performance with custom tuning and optimization services from our expert technicians.',
    features: ['ECU Tuning', 'Suspension Upgrade', 'Exhaust Mod', 'Power Increase']
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold uppercase tracking-widest">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Professional Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our certified technicians deliver excellence in every service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 border border-border/50 group hover:border-accent/50 hover:bg-accent/5"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2 text-sm text-foreground/70">
                      <span className="text-accent mt-1 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
          <h3 className="text-3xl font-serif font-bold">
            Ready for Expert Care?
          </h3>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule your service appointment today and experience the CHAND MOTORS difference.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
            Schedule Service
          </Button>
        </div>
      </div>
    </section>
  )
}
