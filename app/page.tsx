"use client";
import Button from "@/components/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
// TODO: fix this
// import PWAPrompt from "react-ios-pwa-prompt";

export default function Home() {
  const [isPWA, setIsPWA] = useState(false);
  useEffect(() => {
    setIsPWA(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  return (
    <main className="w-full flex-grow px-5 flex">
      <div className="bg-gray-200 flex-grow flex flex-col rounded-xl shadow-xl p-4 mb-10 gap-2">
        {/* {isPWA ? <PWAHome /> : <InstallPrompt />} */}
        <PWAHome />
      </div>
    </main>
  );
}

function PWAHome() {
  return (
    <>
      <p className="text-xl">
        Welcome to IonicInsights, Valence Robotics’ scouting app for the
        2022-2023 FRC Competition: Charged Up.
      </p>
      <Button href="/match">
        <FaPlus />
        New Match
      </Button>
      <h2 className="text-2xl font-bold">Recent Matches</h2>
      <div className="flex flex-col divide-y divide-gray-300">
        <Match />
        <Match />
        <Match />
      </div>
    </>
  );
}

function Match() {
  return (
    <div className="flex flex-row justify-between items-center py-3">
      <div className="flex flex-col">
        <h3 className="text-xl">Match 1</h3>
        <h4 className="text-lg font-light">Team 254</h4>
      </div>
      <Button>
        <FaArrowRight />
      </Button>
    </div>
  );
}

function InstallPrompt() {
  return (
    <div>
      <p>
        To install this app on iOS, click the share button and then &quot;Add to
        Home Screen&quot;
      </p>
      <br />
      <p>To install this app on Android, tap &quot;Install&quot;</p>
    </div>
  );
}
