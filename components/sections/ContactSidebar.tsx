import { SITE } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <GlassCard radius="2xl" className="p-6">
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          Direct Channel
        </span>
        <a
          href={`mailto:${SITE.email}`}
          className="mt-3 block break-all font-headline text-lg font-semibold text-on-background transition-colors hover:text-primary"
        >
          {SITE.email}
        </a>
      </GlassCard>

      <GlassCard radius="2xl" className="p-6">
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          Coordinates
        </span>
        <p className="mt-3 font-body text-on-background">{SITE.location}</p>
        <p className="mt-1 font-body text-sm text-on-surface-variant">
          Remote-first. Orbiting the entire timezone grid.
        </p>
      </GlassCard>

      <GlassCard radius="2xl" className="p-6">
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          Response Window
        </span>
        <p className="mt-3 font-body text-on-background">
          Within 48 light-hours
        </p>
        <p className="mt-1 font-body text-sm text-on-surface-variant">
          Mon – Fri. Urgent signals get priority routing.
        </p>
      </GlassCard>
    </div>
  );
}
