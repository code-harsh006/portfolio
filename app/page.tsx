import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Education from "./components/education"
import Experience from "./components/experience"
import { ThemeToggle } from "@/components/theme-toggle"
import BackgroundEffects from "./components/background-effects"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundEffects />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Madhav Kumar Jadav</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <a href="https://drive.google.com/file/d/1OBdggT48X4rc37AfdE1Z-H0Rn1yVsC5o/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Resume</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="h1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Madhav Kumar Jadav
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Aspiring Cybersecurity Professional | ML and AI Enthusiast
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Currently working on ML and AI projects, seeking a cybersecurity internship to apply my skills and
                expand my expertise in the field.
              </p>
              <div className="space-x-4">
                <Link href="https://github.com/jadavmadhavkumar" target="_blank" className="button">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/madhav-jadav-a8b472289/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:102ctbmti2122016@nfsu.ac.in">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Education />

        <Experience />

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Face Detection using Python"
                description="This comprehensive guide walks you through implementing face recognition using Python and OpenCV. It covers prerequisites and provides step-by-step instructions for detecting and recognizing faces in images and video streams."
                image="https://cdn.analyticsvidhya.com/wp-content/uploads/2022/03/face-regonition.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={["Python", "OpenCV", "Face Recognition", "Computer Vision"]}
                date="Dec 2022 - Feb 2023"
              />
              <ProjectCard
                title="DC-GANs – Fashion MNIST"
                description="Devised a Deep Convolutional Generative Adversarial Network architecture & successfully trained within 50 epochs to generate realistic synthetic fashion images. Attained an impressive DcGAN loss rate of 0.014 for the generator model."
                image="https://pyimagesearch.com/wp-content/uploads/2021/11/DCGAN_Fashion-MNIST_header_corrected-do-not-smush.png"
                link="https://github.com/jadavmadhavkumar"
                tags={["Deep Learning", "GANs", "Fashion MNIST", "TensorFlow", "PyTorch"]}
                date="Nov 2023 - Dec 2023"
              />
              <ProjectCard
                title="Secure Authentication System"
                description="Designed and developed a secure authentication system using JavaScript, Node.js, and Express.js, incorporating multi-factor authentication (MFA) for enhanced security. Implemented JWT for secure user sessions and developed a role-based access control mechanism. Conducted penetration testing using Burp Suite to identify and fix vulnerabilities."
                image="https://www.onelogin.com/blog/wp-content/uploads/2023/05/advanced-authentication-blog-image.jpg.optimal.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={["JavaScript", "Node.js", "Express.js", "JWT", "MFA", "RBAC", "Burp Suite"]}
                date="Oct 2023 - Dec 2023"
              />
              <ProjectCard
                title="Web Security Vulnerability Scanner"
                description="Developed a web-based application using JavaScript and Node.js to scan websites for common security vulnerabilities such as SQL injection, XSS, and CSRF. Integrated OWASP ZAP as a backend service to automate security tests and provide detailed vulnerability reports. Implemented a user-friendly interface using React.js with secure data handling and HTTPS protocols."
                image="https://www.eojohnson.com/hubfs/Vulnerability-Scanning.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={[
                  "JavaScript",
                  "Node.js",
                  "React.js",
                  "OWASP ZAP",
                  "Security Testing",
                  "SQL Injection",
                  "XSS",
                  "CSRF",
                ]}
                date="Jan 2024 - Feb 2024"
              />
              <ProjectCard
                title="Password Strength Checker"
                description="Developed a Python script to evaluate password strength based on various criteria such as length, complexity, and diversity of characters. Provided users with feedback and suggestions for stronger passwords to enhance their security posture."
                image="https://cyberpedia.reasonlabs.com/IMG/password%20strength%20checker.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={["Python", "Cybersecurity", "Password Security"]}
                date="March 2024"
              />
              <ProjectCard
                title="Basic Port Scanner"
                description="Created a Python-based port scanner to identify open ports on a target IP address. Used the socket library to list open ports and their associated services, providing a fundamental tool for network reconnaissance and security assessment."
                image="https://i.ytimg.com/vi/NIZCGSR5HxU/maxresdefault.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={["Python", "Network Security", "Socket Programming"]}
                date="June 2024"
              />
              <ProjectCard
                title="Spam Email Classifier"
                description="Built a machine learning model to classify emails as spam or not spam using a labeled dataset. Achieved a high accuracy rate by training the model with scikit-learn, providing an effective solution for email filtering and security."
                image="https://i.ytimg.com/vi/ZgzWB0JrTGc/maxresdefault.jpg"
                link="https://github.com/jadavmadhavkumar"
                tags={["Python", "Machine Learning", "scikit-learn", "NLP", "Email Security"]}
                date="June 2024"
              />
              <ProjectCard
                title="House Price Prediction Model"
                description="Developed a linear regression model to predict house prices based on features such as square footage, number of bedrooms, and location. Achieved an R² score of 0.85, indicating a strong correlation between predicted and actual prices. Utilized feature scaling and normalization techniques to improve model accuracy and visualized predictions to identify areas for improvement."
                image="https://miro.medium.com/v2/resize:fit:1358/1*smf9XOCYX-7NuQSkE4m84g.jpeg"
                link="https://github.com/jadavmadhavkumar"
                tags={["Machine Learning", "Linear Regression", "Data Visualization", "Feature Engineering"]}
                date="Aug 2024"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Skills & Technologies
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Madhav Kumar Jadav. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#projects">
              Projects
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
