export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} newztoday — All rights reserved. Data is
          loaded from JSON and can be swapped to an API later.
        </p>
      </div>
    </footer>
  );
}
