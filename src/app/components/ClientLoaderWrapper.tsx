"use client";

import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function ClientLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 100); // Simulate loading delay
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loader />;

  return <>{children}</>;
}
