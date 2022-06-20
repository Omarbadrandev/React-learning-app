export const Box = ({ children }: { children: React.ReactNode }) => (
    <div
      style={{
        padding: "1rem",
        fontWeight: "bold"
      }}
    >
      {children}
    </div>
  );