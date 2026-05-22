'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CM</span>
            </div>
            <span className="hidden sm:inline font-serif text-xl font-semibold text-foreground">
              CHAND MOTORS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#vehicles" className="text-sm text-foreground hover:text-accent transition-colors">
              Vehicles
            </Link>
            <Link href="#services" className="text-sm text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+923334567890" className="flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+92 333 456 7890</span>
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book Test Drive
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <Link href="#vehicles" className="block text-sm text-foreground hover:text-accent py-2">
              Vehicles
            </Link>
            <Link href="#services" className="block text-sm text-foreground hover:text-accent py-2">
              Services
            </Link>
            <Link href="#about" className="block text-sm text-foreground hover:text-accent py-2">
              About
            </Link>
            <Link href="#contact" className="block text-sm text-foreground hover:text-accent py-2">
              Contact
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:+923334567890" className="flex items-center space-x-2 text-sm text-accent">
                <Phone className="w-4 h-4" />
                <span>+92 333 456 7890</span>
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Test Drive
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
