export default function Crosshair({ className = "" }: { className?: string }) {
  return (
    // OPTIMASI PERFORMA:
    // 1. pointer-events-none: Mematikan sensor sentuh/klik agar browser tidak perlu menghitung posisi jari/kursor pada elemen ini saat scroll.
    // 2. transform-gpu: Mendorong perenderan garis SVG ini ke memori grafis.
    <svg 
      width="15" 
      height="15" 
      viewBox="0 0 15 15" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      className={`pointer-events-none transform-gpu ${className}`}
    >
      <path d="M7.5 0V15M0 7.5H15" />
    </svg> 
  );
}