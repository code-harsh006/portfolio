import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Languages",
    skills: ["Python", "C/C++", "C#", "JavaScript", "Java", "CMake", "Matlab", "Git", "Bash", "LaTeX", "Vim"],
  },
  {
    category: "Software & Tools",
    skills: [
      "Linux",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "OpenCV",
      "ZeroMQ",
      "B0RemoteAPI",
      "CorelDraw",
      "Solidworks",
      "Wireshark",
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      "Network Security",
      "Penetration Testing",
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Kali Linux",
      "Firewall Configuration",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Time Management",
      "Problem-solving",
      "Documentation",
      "Engaging Presentation",
      "Leadership",
      "On-site coordination",
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
