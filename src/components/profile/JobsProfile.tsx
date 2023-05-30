"use client";

import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Timeline } from "../ui/Timeline";
import Heading from "../ui/Heading";
import { Separator } from "../ui/Separator";
import { TimelineJobs } from "../ui/TimelineJobs";

export const JobsProfile = () => {
  const [jobs] = useLocalStorage(LOCAL_STORAGE_KEYS.JOBS);

  return (
    <section>
      <div className="my-5">
        <Heading as="h3" size="large" kind="black" withDecoration>
          Trabajos
        </Heading>

        <Separator size="md" />

        <TimelineJobs items={jobs.jobs} />
      </div>
    </section>
  );
};
