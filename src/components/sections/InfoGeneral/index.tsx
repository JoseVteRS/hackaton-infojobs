import Heading from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import React from "react";

interface Props {
  introduction: string;
}

export const InfoGeneral = ({ introduction }: Props) => {
  return (
    <section>
      <Heading as="h3" size="large" kind="black" withDecoration>
        Información general
      </Heading>

      <div className="my-5">
        <Heading as="h4" size="medium" kind="black">
          Presentación
        </Heading>

        <div className="text-lg">
          {introduction.map((paragraph: string, index: number) => (
            <Text key={index}>
              {paragraph}
            </Text>
          ))}
        </div>
      </div>
    </section>
  );
};
