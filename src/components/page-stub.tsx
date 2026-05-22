type PageStubProps = {
  title: string;
  framerNodeId: string;
  framerPath: string;
};

export function PageStub({ title, framerNodeId, framerPath }: PageStubProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-32">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-pre-heading-16 text-accent-1">{framerPath}</p>
        <h1 className="text-h2 text-dark-text">{title}</h1>
        <p className="text-p16 text-muted-text">
          Stub for Framer page <code className="font-mono">{framerNodeId}</code>.
          Components will be filled in as they&apos;re ported from the Framer
          project.
        </p>
      </div>
    </div>
  );
}
