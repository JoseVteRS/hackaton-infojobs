"use client";

import { FormJobs, Job, Jobs } from "@/components/forms/FormJobs";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";

export const JobsSection = () => {
  const [jobs] = useLocalStorage(LOCAL_STORAGE_KEYS.JOBS);

  return (
    <div>
      <div className="my-5 flex gap-5">
        {jobs &&
          jobs.jobs.map((job: Job) => {
            return (
              <div
                key={job.id}
                className="flex items-start justify-between gap-2 shadow-ij-m rounded p-4 w-full"
              >
                <div>
                  <h4 className="text-black/80 font-bold">{job.organization}</h4>
                  <p className="text-black/60">
                    {job.isCurrent ? (
                      <>
                        <span>
                          {job.start_month} {job.start_year}
                        </span>
                        <span> - </span>
                        <span className="text-primary">Actualmente</span>
                      </>
                    ) : (
                      <>
                        <span>
                          {job.start_month} {job.start_year}
                        </span>
                        <span> - </span>
                        <span className="text-primary">
                          {job.finish_month} {job.finish_year}
                        </span>
                      </>
                    )}
                   
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <FormJobs />
    </div>
  );
};
