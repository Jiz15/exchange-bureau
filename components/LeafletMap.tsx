"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create custom dot icon that flashes based on active state
const createCustomIcon = (isActive: boolean) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div class="relative flex items-center justify-center">
             <div class="${isActive ? 'absolute w-12 h-12 bg-primary/20 rounded-full animate-ping' : ''}"></div>
             <div class="relative z-10 w-4 h-4 rounded-full border-2 border-white shadow-lg ${isActive ? 'bg-primary scale-125' : 'bg-primary/50'} transition-transform duration-300"></div>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

function MapEffect({ selectedBranch }: { selectedBranch: any }) {
  const map = useMap();
  useEffect(() => {
    if (selectedBranch && selectedBranch.coords) {
      map.flyTo(selectedBranch.coords, 14, { duration: 1.2 });
    }
  }, [selectedBranch, map]);
  return null;
}

export default function LeafletMap({ branches, selectedId, onSelect }: any) {
  const selectedBranch = branches.find((b: any) => b.id === selectedId);
  const center = selectedBranch ? selectedBranch.coords : [25.2000, 55.2700];

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden relative z-0 shadow-2xl border border-black/10">
      <MapContainer 
        center={center} 
        zoom={13} 
        style={{ height: "100%", width: "100%", backgroundColor: '#131313', zIndex: 10 }}
        zoomControl={false} // Hide default top-left control to place it somewhere cleaner if needed, but for now we let users pinch/scroll
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {branches.map((branch: any) => (
          <Marker 
            key={branch.id} 
            position={branch.coords} 
            icon={createCustomIcon(selectedId === branch.id)}
            eventHandlers={{
              click: () => onSelect(branch.id),
            }}
          >
          </Marker>
        ))}
        {selectedBranch && <MapEffect selectedBranch={selectedBranch} />}
      </MapContainer>
      
      {/* Absolute floating UI on top of map */}
      <div className="absolute top-6 left-6 z-[1000] pointer-events-none">
         <div className="bg-surface-container px-4 py-2 rounded shadow-md border border-white/5 pointer-events-auto flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">my_location</span>
            <span className="font-label font-bold text-[10px] uppercase tracking-widest hover:text-primary cursor-pointer transition-colors">Find Nearest</span>
         </div>
      </div>
    </div>
  );
}
