import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Work",
  description: RESUME_DATA.summary,
};

export default function WorkPage() {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8">
      <div className="flex items-center justify-between space-y-10">
        <div className="flex-1 space-y-1.5">
          <h1 className="md:text-2xl font-bold">Rakshit Meshram</h1>
          <p className="max-w-md text-pretty text-sm text-foreground tracking-tight">
            {RESUME_DATA.summary}
          </p>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground inline-flex gap-x-1.5">
            {" "}
            {RESUME_DATA.location}
          </p>
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 md:h-28 md:w-28">
          {/* <img className="aspect-square h-fu;; w-full" src="./avatar.png" alt="Rakshit Meshram"></img> */}
          <Image
            src="/avatar.png"
            alt="avatar rakshit"
            className="aspect-square h-full w-full"
            width={120}
            height={120}
            priority
          />
        </span>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-pretty">Education</h2>
        {RESUME_DATA.education.map((education) => {
          return (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 text-sm">
                {education.degree}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-pretty">Work Experience</h2>
        {RESUME_DATA.work.map((work) => {
          return (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>

                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                {work.description}
              </CardContent>
              <CardFooter>
                <div className="mt-2 flex flex-wrap gap-1">
                  {work.stack.map((tag) => (
                    <Badge
                      className="p-1 text-[10px]"
                      variant="outline"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="print-force-new-page scroll-mb-16 space-y-2">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            );
          })}
        </div>
      </div>
	  <SiteFooter/>
    </section>
  );
}
