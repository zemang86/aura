import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center space-y-8">
        <h1 className="text-h1-404 text-dark-text">404</h1>
        <p className="text-p16 text-muted-text">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-button text-accent-1 hover:text-accent-2 transition-colors"
        >
          Back home →
        </Link>
      </div>
    </main>
  );
}
