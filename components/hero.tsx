'use client'

import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-20 bg-background flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-balance">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Elevate Your Drive
              </h1>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Premium vehicles and world-class service at CHAND MOTORS G-9. Experience the perfect blend of luxury, performance, and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Explore Vehicles
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                Schedule Service
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-foreground">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-car.jpg"
                alt="Premium sports car"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link href="#vehicles" className="flex flex-col items-center space-y-2 text-accent hover:text-accent/80 transition-colors animate-bounce">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
