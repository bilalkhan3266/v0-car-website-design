'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 333 456 7890',
      link: 'tel:+923334567890'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@chandmotors.pk',
      link: 'mailto:info@chandmotors.pk'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'G-9, Islamabad, Pakistan'
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '9 AM - 6 PM, Daily'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold uppercase tracking-widest">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card 
                key={index} 
                className="p-8 text-center border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2 text-lg">
                  {info.title}
                </h3>
                {info.link ? (
                  <a href={info.link} className="text-accent hover:text-accent/80 transition-colors font-medium">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground/70">
                    {info.value}
                  </p>
                )}
              </Card>
            )
          })}
        </div>

        {/* Contact Form */}
        <Card className="p-8 md:p-12 border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 123 4567"
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={6}
                className="bg-background border-border resize-none"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
