export function Footer() {
  return (
    <footer
      className="bg-surface-inverse"
      style={{ padding: "40px 60px" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-heading text-[16px] font-bold tracking-[2px] text-white">
            DAVIS PROPERTIES
          </p>
          <p className="font-body text-[13px]" style={{ color: "#8B9A7E" }}>
            Mobile Home Communities &middot; Amarillo, Texas
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="font-body text-[13px]" style={{ color: "#8B9A7E" }}>
            &copy; 2026 Davis Properties
          </p>
          <p className="font-body text-[12px]" style={{ color: "#5C6B4F" }}>
            Built by itK Software
          </p>
        </div>
      </div>
    </footer>
  );
}
