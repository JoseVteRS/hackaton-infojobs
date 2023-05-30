import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/Separator";
import { Text } from "@/components/ui/Text";
import { LOCAL_STORAGE_KEYS } from "@/config/contants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";

interface Props {
  introduction: string;
}

export const GeneralProfile = ({ introduction }: Props) => {
  const [presentation] = useLocalStorage(LOCAL_STORAGE_KEYS.PRESENTATION);


  if (!presentation) {
    return null;
  }
  const splitedTextByNewLine = presentation.summary.split("\n");

  return (
    <section>
      <Heading as="h3" size="large" kind="black" withDecoration>
        Información general
      </Heading>

      <div className="my-5">
        <Heading as="h4" size="medium" kind="black">
          Presentación
        </Heading>

        <Separator size="sm" />

        <div className="text-lg">
          {splitedTextByNewLine.map((paragraph, index) => {
            return <Text key={index}> {paragraph} </Text>;
          })}
        </div>
      </div>
    </section>
  );
};
