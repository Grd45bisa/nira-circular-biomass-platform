export function EmptyState({ message }: { message: string }) {
  return (
    <p className="type-body rounded-card border border-coconut/25 bg-cream px-6 py-10 text-center text-coconut">
      {message}
    </p>
  );
}
