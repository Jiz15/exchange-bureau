"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet Map to avoid SSR 'window' not defined errors
const DynamicLeafletMap = dynamic(
  () => import("./LeafletMap"),
  { ssr: false, loading: () => (
    <div className="h-[600px] w-full rounded-xl bg-surface-container flex flex-col items-center justify-center animate-pulse border border-black/5">
      <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-spin">satellite_alt</span>
      <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Initializing Uplink...</span>
    </div>
  ) }
);

const branches = [
  {
    id: "t3",
    name: "Terminal 3 (T3)",
    area: "Departure Level, Near Gate B22",
    status: "Open 24/7",
    contact: "+971 4 216 2222",
    hub: true,
    coords: [25.2532, 55.3657] // DXB T3
  },
  {
    id: "t1",
    name: "Terminal 1 (T1)",
    area: "Arrivals Hall, Level 1",
    status: "Open 24/7",
    coords: [25.2520, 55.3520] // DXB T1
  },
  {
    id: "amia",
    name: "AMIA Downtown",
    area: "Al Maktoum Int'l, Concourse A",
    status: "Open 24/7",
    coords: [24.8966, 55.1601] // DWC
  }
];

export default function InteractiveBranchMap() {
  const [selectedId, setSelectedId] = useState<string>("t3");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Map Column */}
      <div className="lg:col-span-8 relative">
          <DynamicLeafletMap branches={branches} selectedId={selectedId} onSelect={setSelectedId} />
      </div>

      {/* List Column */}
      <div className="lg:col-span-4 space-y-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
        {branches.map((branch) => {
          const isSelected = selectedId === branch.id;
          return (
            <div 
              key={branch.id}
              onClick={() => setSelectedId(branch.id)}
              className={`p-6 rounded-xl transition-all cursor-pointer border-l-4 group ${
                isSelected 
                  ? "bg-surface-container border-primary shadow-lg" 
                  : "bg-surface-container-low border-transparent hover:border-primary/50 hover:bg-surface-container"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-bold headline-font transition-colors ${isSelected ? "text-primary" : "text-on-surface group-hover:text-primary"}`}>
                  {branch.name}
                </h3>
                {branch.hub && (
                  <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Main Hub</span>
                )}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className={`material-symbols-outlined text-sm ${isSelected ? 'text-primary' : ''}`}>location_on</span>
                  <span className="text-sm">{branch.area}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className={`material-symbols-outlined text-sm ${isSelected ? 'text-primary' : ''}`}>schedule</span>
                  <span className="text-sm font-semibold text-secondary">{branch.status}</span>
                </div>
                {branch.contact && (
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className={`material-symbols-outlined text-sm ${isSelected ? 'text-primary' : ''}`}>call</span>
                    <span className="text-sm">{branch.contact}</span>
                  </div>
                )}
              </div>
              <button 
                className={`w-full py-3 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all group-btn ${
                  isSelected 
                    ? "bg-primary text-on-primary hover:brightness-110" 
                    : "bg-surface-container-highest text-on-surface hover:bg-primary/10"
                }`}
              >
                Get Directions
                <span className={`material-symbols-outlined text-sm transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>arrow_forward</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
