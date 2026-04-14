"use client";

import type { Division } from "@/lib/types";
import {
  DivisionHero,
  DivisionMission,
  DivisionCapabilities,
  DivisionProcess,
  DivisionArtifacts,
  DivisionCTA,
} from "@/components/sections/DivisionDetailParts";

interface Props {
  division: Division;
  dict?: Record<string, any>;
  divDict?: Record<string, any>;
  lang?: string;
}

export function DivisionDetail({ division: d, dict, divDict, lang }: Props) {
  return (
    <>
      <DivisionHero d={d} dict={dict} divDict={divDict} lang={lang} />
      <DivisionMission d={d} dict={dict} divDict={divDict} />
      <DivisionCapabilities d={d} dict={dict} divDict={divDict} />
      <DivisionProcess d={d} dict={dict} />
      <DivisionArtifacts d={d} dict={dict} />
      <DivisionCTA d={d} dict={dict} lang={lang} />
    </>
  );
}
