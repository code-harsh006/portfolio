import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>National Forensic Sciences University</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                B.Tech-M.Tech Computer Science Engineering (Cyber Security)
              </p>
              <p className="text-sm text-muted-foreground">Delhi, India</p>
              <p className="text-sm text-muted-foreground">Nov 2021 - Present</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Prem Dhara Sisu Vihar High School</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">State Government, Gujarat</p>
              <p className="text-sm text-muted-foreground">Gandhinagar, Gujarat, India</p>
              <p className="text-sm text-muted-foreground">Graduated 2021</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
