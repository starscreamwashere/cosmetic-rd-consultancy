import { Card } from "@/components/ui/card"

const team = [
  {
    name: "Dr. Prashant S. Kharkar",
    role: "Expert Advisor",
    description:
      "Chemistry expert specialized in Pharmaceutical, Medicinal, API Process and Materials Chemistry.",
    image: "/pskharkar.png",
    objectPosition: "object-[center_25%] scale-[0.990]",
  },
  {
    name: "Mr. Ashish Jogi",
    role: "Expert Advisor",
    description:
      "Intellectual Property Professional, Business development & Foods & Neutraceuticals expert",
    image: "/JogiAashish.jpg",
    objectPosition: "object-top",
  },
]

export default function AdvisorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-charcoal mb-4">Our Advisors</h2>
          <p className="text-lg text-charcoal/70">
            Highly skilled and experienced professionals guiding our innovation journey
          </p>
        </div>

        <div className="flex justify-center">
          <div className="scale-[0.92] max-w-5xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-tr from-sage/10 to-rose/10 hover:shadow-xl transition-all duration-500 h-[420px]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${member.objectPosition}`}
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl px-6 py-4 text-center transition-all duration-500 group-hover:py-2 group-hover:rounded-none group-hover:bg-transparent">
                    <h3 className="text-lg font-semibold text-charcoal mb-1 transition-all duration-300 group-hover:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-sage font-medium transition-all duration-300 group-hover:text-white">
                      {member.role}
                    </p>
                    <p className="text-xs text-charcoal/70 font-semibold mt-2 transition-all duration-300 group-hover:text-white">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
