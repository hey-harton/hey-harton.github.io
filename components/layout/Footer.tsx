export default function Footer() {
  return (
    <footer className="py-8 mt-4 border-t border-white/10 flex justify-center items-center text-sm text-gray-400 text-center">
      <p>&copy; {new Date().getFullYear()} Hartono Adji Susanto. All rights reserved.</p>
    </footer>
  );
}