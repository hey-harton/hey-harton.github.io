export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-white/20 flex justify-center items-center text-sm text-gray-400 text-center">
      <p>&copy; {new Date().getFullYear()} Hartono Adji Susanto. All rights reserved.</p>
    </footer>
  );
}