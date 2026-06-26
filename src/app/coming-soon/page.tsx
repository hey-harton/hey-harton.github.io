'use client';

import { useState, useEffect, useMemo } from "react";
import BackgroundEffects from "@/components/sections/coming-soon-page/BackgroundEffects";
import TopBar from "@/components/sections/coming-soon-page/TopBar";
import BottomBar from "@/components/sections/coming-soon-page/BottomBar";
import LeftPanel from "@/components/sections/coming-soon-page/LeftPanel";
import RightPanel from "@/components/sections/coming-soon-page/RightPanel";

export default function ComingSoonPage() {
  const [uptime, setUptime] = useState("CALCULATING...");
  const [commits, setCommits] = useState<any[]>([]);
  const [loadingCommits, setLoadingCommits] = useState(true);

  // 1. Kalkulasi Waktu Pengembangan (Berjalan setiap detik)
  useEffect(() => {
    const startDate = new Date("2026-05-28T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setUptime(`${days}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 2. Ambil Data Commit dari GitHub (Berjalan sekali saat halaman dimuat)
  useEffect(() => {
    const fetchLatestCommits = async () => {
      try {
        const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        const headers: HeadersInit = {
          "Accept": "application/vnd.github.v3+json"
        };
        
        if (githubToken) {
          headers["Authorization"] = `Bearer ${githubToken}`;
        }

        const response = await fetch("https://api.github.com/repos/hey-harton/hey-harton.github.io/commits?per_page=5", {
          method: "GET",
          headers: headers,
          cache: "no-store" 
        });
        
        if (response.ok) {
          const data = await response.json();
          setCommits(data);
        } else {
          console.error("Gagal menarik data. Status:", response.status);
        }
      } catch (error) {
        console.error("Gagal melakukan fetch API GitHub", error);
      } finally {
        setLoadingCommits(false);
      }
    };

    fetchLatestCommits();
  }, []);

  // =====================================================================
  // OPTIMASI LEVEL CPU (REACT MEMOIZATION)
  // Membekukan komponen agar tidak ikut berkedip/dirender ulang setiap detik
  // =====================================================================
  const memoizedBackground = useMemo(() => <BackgroundEffects />, []);
  const memoizedTopBar = useMemo(() => <TopBar />, []);
  const memoizedBottomBar = useMemo(() => <BottomBar />, []);
  
  const memoizedRightPanel = useMemo(
    () => <RightPanel commits={commits} loadingCommits={loadingCommits} />,
    [commits, loadingCommits]
  );

  return (
    <div className="w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col bg-[#050505] relative lg:overflow-hidden overscroll-none">
      {memoizedBackground}
      {memoizedTopBar}
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative z-10 overflow-hidden transform-gpu">
        <LeftPanel uptime={uptime} />
        {memoizedRightPanel}
      </main>

      {memoizedBottomBar}
    </div>
  );
}