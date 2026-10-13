"use client";

import { useEffect } from "react";

export function AdNetworkServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Ad network service worker registration failed:", error);
    });
  }, []);

  return null;
}
