'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, Gauge, Users, Shield } from 'lucide-react'

const vehicles = [
  {
    id: 1,
    name: 'Luxury Sedan 2024',
    price: 'Starting at $65,000',
    image: 'bg-gradient-to-br from-slate-800 to-slate-900',
    specs: {
      power: '450 HP',
      speed: '0-60 in 4.2s',
      seats: '5 Seats',
      warranty: '5 Year'
    },
    features: ['Hybrid Engine', 'Premium Interior', 'AI Assistant', 'All-Wheel Drive']
  },
  {
    id: 2,
    name: 'Performance SUV 2024',
    price: 'Starting at $75,000',
    image: 'bg-gradient-to-br from-amber-900 to-amber-950',
    specs: {
      power: '520 HP',
      speed: '0-60 in 3.8s',
      seats: '7 Seats',
      warranty: '5 Year'
    },
    features: ['Twin Turbo Engine', 'Panoramic Roof', 'Night Vision', 'Adaptive Suspension']
  },
  {
    id: 3,
    name: 'Electric Crossover 2024',
    price: 'Starting at $55,000',
    image: 'bg-gradient-to-br from-green-900 to-green-950',
    specs: {
      power: '400 HP',
      speed: '0-60 in 5.1s',
      seats: '5 Seats',
      warranty: '8 Year'
    },
    features: ['Electric Motor', '500km Range', 'Fast Charging', 'Eco Mode']
  }
]

export function Vehicles() {
  return (
    <section id="vehicles" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold uppercase tracking-widest">Our Collection</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Premium Vehicles
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover our curated selection of premium vehicles, each engineered for performance and designed for excellence.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-border/50">
              {/* Vehicle Image */}
              <div className={`h-64 ${vehicle.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-semibold">{vehicle.name}</p>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-accent font-semibold">{vehicle.price}</p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Power</p>
                      <p className="font-semibold text-sm text-foreground">{vehicle.specs.power}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gauge className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Speed</p>
                      <p className="font-semibold text-sm text-foreground">{vehicle.specs.speed}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Capacity</p>
                      <p className="font-semibold text-sm text-foreground">{vehicle.specs.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Warranty</p>
                      <p className="font-semibold text-sm text-foreground">{vehicle.specs.warranty}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/60 uppercase">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature) => (
                      <span key={feature} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  )
}
