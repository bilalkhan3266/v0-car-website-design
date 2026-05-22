'use client'

import { Card } from '@/components/ui/card'
import { Trophy, Users, Globe, Heart } from 'lucide-react'

const values = [
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'We maintain the highest standards in vehicle quality and customer service.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority in every interaction and transaction.'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay ahead with the latest automotive technology and practices.'
  },
  {
    icon: Heart,
    title: 'Reliability',
    description: 'Trust us to deliver consistent, dependable service every single time.'
  }
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold uppercase tracking-widest mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Your Trusted Automotive Partner
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                For over 20 years, CHAND MOTORS G-9 has been serving customers with premium vehicles and exceptional service. Our commitment to excellence has made us a trusted name in the automotive industry.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                We believe in building long-term relationships with our customers. Every vehicle in our inventory is carefully selected and thoroughly inspected to ensure the highest quality standards.
              </p>
              <p className="text-foreground leading-relaxed">
                Our team of certified technicians and knowledgeable sales professionals are dedicated to providing you with an exceptional experience every time you visit.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-foreground">Years in Business</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground">Vehicles Sold</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-sm text-foreground">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image/Content */}
          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml+base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl font-serif text-foreground/50 font-bold text-center px-8">
                Premium Quality, Trusted Service
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card 
                  key={index} 
                  className="p-8 text-center hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent/50"
                >
                  <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground mb-3 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
