export default function Crosshair({ className }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
      <path d="M7.5 0V15M0 7.5H15" />
    </svg> 
  );
}