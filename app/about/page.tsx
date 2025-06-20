import { Award, Users, Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import AdvisorsSection from "@/components/AdvisorsSection"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of cosmetic science through cutting-edge research and creative problem-solving",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in every project, from initial concept to final product delivery",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients as partners to achieve shared goals and mutual success",
    },
    {
      icon: Target,
      title: "Results",
      description: "Delivering measurable outcomes that drive business growth and market differentiation",
    },
  ]

  const team = [
    {
      name: "Dr. Prashant S. Kharkar",
      role: "Expert Advisor",
      expertise: "",
      image: "/PrashantKharkar.JPG",
      description: "Chemistry expert specialized in Pharmaceutical, Medicinal, API Process and Materials Chemistry.",
    },
    {
      name: "Dr. Ashish Jogi",
      role: "Expert Advisor",
      expertise: "",
      image: "/Ashish Jogi.jpeg",
      description: "Intellectual Property Professional, Business development & Foods & Neutraceuticals expert",
    },
  ]

  return (
    <div className="min-h-screen bg-pearl">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-charcoal mb-6 tracking-tight">
              About <span className="text-sage">Us</span>
            </h1>
            <p className="text-xl text-charcoal/70 font-semibold leading-relaxed">
              Innovation is our identity. Excellence is our legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-sage">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-white font-semibold mb-6 leading-relaxed">
        Innovation isn’t just what we do — it’s who we are. Our globally acclaimed formulas embody the perfect harmony of
        scientific precision and creative formulation, delivering outstanding results time and again!
      </p>
      <p className="text-lg text-white font-semibold leading-relaxed">
        Our commitment extends beyond formulation to encompass sustainability, safety, and social responsibility, ensuring
        that every product we develop contributes positively to both individual well-being and environmental health.
      </p>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">Our Core Values</h2>
              <p className="text-lg text-charcoal/70 font-semibold leading-relaxed max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence in every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm text-center"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-sage/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-sage" />
                    </div>
                    <CardTitle className="text-xl font-medium text-charcoal">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-charcoal/70 font-semibold leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <div className="max-w-6xl mx-auto px-4">
  <AdvisorsSection />
</div>

            

      {/* Scientific Approach Section */}
      

      <Footer />
    </div>
  )
}   