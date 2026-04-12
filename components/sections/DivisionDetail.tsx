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
}

export function DivisionDetail({ division: d }: Props) {
  return (
    <>
      <DivisionHero d={d} />
      <DivisionMission d={d} />
      <DivisionCapabilities d={d} />
      <DivisionProcess d={d} />
      <DivisionArtifacts d={d} />
      <DivisionCTA d={d} />
    </>
  );
}
