"use client";

import React, { useEffect, useState } from "react";
import { Compass, Sun, Mountain, Building, Palmtree } from "lucide-react";
import Cta from "./Cta";
import Experience from "./Experience";
import Grid from "./Grid";
import Hero from "./Hero";
import Spotlight from "./Spotlight";
import { createImageFallback } from "@/lib/createImageFallback";
import { fetchDestinations } from "@/lib/destinations";

// Fallback image handler
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80";
const handleImageError = createImageFallback(FALLBACK_IMAGE);

const getCategoryIcon = (category) => {
  switch (category) {
    case "Mountains":
      return <Mountain size={18} />;
    case "Urban":
      return <Building size={18} />;
    case "Tropical":
      return <Palmtree size={18} />;
    case "Beaches":
      return <Sun size={18} />;
    case "Heritage":
      return <Compass size={18} />;
    default:
      return <Compass size={18} />;
  }
};

export default function Destinations() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [destinationsData, setDestinationsData] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    const loadDestinations = async () => {
      const destinations = await fetchDestinations();
      setDestinationsData(destinations);
    };

    loadDestinations();
  }, []);

  // Reset to first page when filters or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, searchQuery]);

  // Apply filtering and searching logic
  const enrichedDestinations = destinationsData.map((destination) => ({
    ...destination,
    icon: getCategoryIcon(destination.category),
  }));

  const filteredAndSearchedDestinations = enrichedDestinations.filter((dest) => {
    const matchesFilter = filter === "All" || dest.region === filter;
    const query = String(searchQuery || "").trim().toLowerCase();

    const searchableText = [
      dest?.name,
      dest?.tag,
      dest?.tagline,
      dest?.location,
      dest?.shortDescription,
      dest?.fullDescription,
      dest?.desc,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = !query || searchableText.includes(query);

    return matchesFilter && matchesSearch;
  });

  const destinationSuggestions = enrichedDestinations
    .map((dest) => ({
      label: dest?.name || "",
      slug: dest?.slug || dest?._id || dest?.id || "",
    }))
    .filter((item) => item.label)
    .filter(
      (item, index, array) =>
        array.findIndex((entry) => entry.label.toLowerCase() === item.label.toLowerCase()) === index,
    )
    .filter((item) => {
      const query = String(searchQuery || "").trim().toLowerCase();
      if (!query) return true;
      return item.label.toLowerCase().includes(query);
    })
    .slice(0, 6);

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredAndSearchedDestinations.length / itemsPerPage,
  );
  const currentDestinations = filteredAndSearchedDestinations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="bg-[#FDFDFD] min-h-screen font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900 overflow-hidden luxury-destinations-container">
      <Hero
        onImageError={handleImageError}
        destinationCount={enrichedDestinations.length}
      />
      <Grid
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        destinationSuggestions={destinationSuggestions}
        currentDestinations={currentDestinations}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        onImageError={handleImageError}
      />
      <Spotlight
        onImageError={handleImageError}
        featuredDestination={
          enrichedDestinations.find(
            (destination) =>
              destination.slug === "maldives" ||
              destination._id === "maldives" ||
              destination.id === "maldives"
          ) || enrichedDestinations[0]
        }
      />
      <Experience onImageError={handleImageError} />
      <Cta />
    </div>
  );
}
