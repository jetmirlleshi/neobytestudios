export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-tertiary/30 border-t-tertiary" />
        <p className="font-headline text-[10px] font-semibold uppercase tracking-[0.5em] text-on-surface-variant">
          Loading
        </p>
      </div>
    </div>
  );
}
