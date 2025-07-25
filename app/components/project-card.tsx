"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  date?: string
}

export default function ProjectCard({ title, description, image, link, tags, date }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        {image.startsWith("http") ? (
          // External image
          <div className="w-full h-full">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        ) : (
          // Local image
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          {date && <span className="text-xs text-muted-foreground">{date}</span>}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
