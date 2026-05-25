import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="m-404">
        <div className="meta">Error · 404</div>
        <div className="num">
          4<em>0</em>4
        </div>
        <p>
          The page you&rsquo;re looking for no longer exists. Let us take you
          back.
        </p>
        <div>
          <Link href="/" className="m-btn-primary">
            Go to homepage <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
