import Link from "next/link"
import { Beaker, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const services = [
    "Formulation Development",
    "Innovation Strategy & Feasibility Assessment",
    "Technology Platform Development",
    "Problem Solving & Scale up Support",
    "Raw Material Research",
  ]

  const company = ["About Us", "Our Team", "Careers", "News & Updates"]

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
  <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
  <img
    src="/GTlogo.png"
    alt="The Green Tint Logo"
    className="h-24 w-24 scale-125 object-contain"
  />
</div>
</Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Leading cosmetic R&D consultancy specializing in innovative formulations, sustainable ingredients, and
              cutting-edge product development.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sage" />
                <span className="text-white/70">thegreentint24@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sage" />
                <span className="text-white/70">+91 9769911134</span>
              </div>
              
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-white/70 hover:text-sage transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item === "About Us" ? "/about" : item === "Case Studies" ? "/case-studies" : "#"}
                    className="text-white/70 hover:text-sage transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get Started</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ready to transform your cosmetic product vision into reality?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-sage hover:bg-sage/90 text-white text-sm font-medium rounded-md transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2025 Research & Consultancy. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-sage transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-sage transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-sage transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
