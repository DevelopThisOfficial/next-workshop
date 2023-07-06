export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "aqua",
        flexGrow: 1,
      }}
    >
      {children}
    </div>
  );
}
