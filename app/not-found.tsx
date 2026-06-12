export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "72vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        padding: 40,
      }}
    >
      <div
        className="mono"
        style={{ color: "var(--muted2)", letterSpacing: "0.12em", fontSize: 13 }}
      >
        404
      </div>
      <h1 className="h2" style={{ maxWidth: "24ch" }}>
        This page took a wrong turn.
      </h1>
      <a className="btn btn-primary btn-lg" href="/">
        Back to home <span className="arr">→</span>
      </a>
    </main>
  );
}
