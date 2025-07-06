import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>National Cadet Corps (NCC)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">ATC Camp Participant</p>
              <p className="text-sm text-muted-foreground">India, Aug 2023</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Participated in the NCC Annual Training Camp (ATC)</li>
                <li>Engaged in rigorous physical training and community service initiatives</li>
                <li>Developed skills in military training, including map reading and rifle shooting</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Google Developer Student Clubs (GDSC)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Gen AI Study Jams 2024 Participant</p>
              <p className="text-sm text-muted-foreground">Remote, Jul 2024 - Aug 2024</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Engaged in hands-on learning sessions on generative AI technologies</li>
                <li>Collaborated with peers to develop AI-driven solutions</li>
                <li>Explored advanced topics in AI, including NLP and computer vision</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>National Forensic Sciences University (NFSU)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Volunteer</p>
              <p className="text-sm text-muted-foreground">Delhi, India, Jun 2024</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Volunteered at the International Seminar on Emerging Technologies, Law, and Governance</li>
                <li>Assisted in organizing and managing the event</li>
                <li>Contributed to interdisciplinary discussions on emerging technologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
