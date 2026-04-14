import { SITE } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactSidebar({
  dict,
}: {
  dict: Record<string, any>;
}) {
  return (
    <div className="flex flex-col gap-6">
      <GlassCard radius="2xl" className="p-6">
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          {dict.directChannel}
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
          {dict.coordinates}
        </span>
        <p className="mt-3 font-body text-on-background">{SITE.location}</p>
        <p className="mt-1 font-body text-sm text-on-surface-variant">
          {dict.coordinatesDesc}
        </p>
      </GlassCard>

      <GlassCard radius="2xl" className="p-6">
        <span className="font-headline text-[10px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
          {dict.responseWindow}
        </span>
        <p className="mt-3 font-body text-on-background">
          {dict.responseValue}
        </p>
        <p className="mt-1 font-body text-sm text-on-surface-variant">
          {dict.responseDesc}
        </p>
      </GlassCard>
    </div>
  );
}
