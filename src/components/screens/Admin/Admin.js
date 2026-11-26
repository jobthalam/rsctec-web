"use client";

import React, { useState, useMemo } from "react";
import {
  ADMIN_MENU_GROUPS,
  INITIAL_CONSULTATION_ENQUIRIES,
  INITIAL_TRAINING_ENQUIRIES,
  INITIAL_GRIEVANCES,
  INITIAL_SUBSCRIBERS,
} from "@/constants/adminData";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar/AdminTopbar";
import OverviewSection from "./sections/OverviewSection/OverviewSection";
import EnquiriesSection from "./sections/EnquiriesSection/EnquiriesSection";
import CatalogSection from "./sections/CatalogSection/CatalogSection";
import CorporateSection from "./sections/CorporateSection/CorporateSection";
import styles from "./Admin.module.scss";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [enquiries, setEnquiries] = useState(INITIAL_CONSULTATION_ENQUIRIES);
  const [trainingEnquiries, setTrainingEnquiries] = useState(
    INITIAL_TRAINING_ENQUIRIES
  );
  const [grievances, setGrievances] = useState(INITIAL_GRIEVANCES);
  const [subscribers] = useState(INITIAL_SUBSCRIBERS);

  const activeMenuMeta = useMemo(() => {
    for (const group of ADMIN_MENU_GROUPS) {
      const found = group.items.find((item) => item.id === activeTab);
      if (found) return found;
    }
    return ADMIN_MENU_GROUPS[0].items[0];
  }, [activeTab]);

  const counts = useMemo(
    () => ({
      enquiries: enquiries.length,
      "training-enquiries": trainingEnquiries.length,
      grievances: grievances.length,
      subscribers: subscribers.length,
    }),
    [
      enquiries.length,
      trainingEnquiries.length,
      grievances.length,
      subscribers.length,
    ]
  );

  const handleUpdateStatus = (collection, id, newStatus) => {
    if (collection === "enquiries") {
      setEnquiries((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } else if (collection === "training-enquiries") {
      setTrainingEnquiries((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } else if (collection === "grievances") {
      setGrievances((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    }
  };

  const renderSection = () => {
    if (activeTab === "overview") {
      return (
        <OverviewSection
          enquiries={enquiries}
          trainingEnquiries={trainingEnquiries}
          grievances={grievances}
          onSelectTab={setActiveTab}
        />
      );
    }

    if (
      activeTab === "enquiries" ||
      activeTab === "training-enquiries" ||
      activeTab === "grievances" ||
      activeTab === "subscribers"
    ) {
      return (
        <EnquiriesSection
          activeTab={activeTab}
          searchQuery={searchQuery}
          enquiries={enquiries}
          trainingEnquiries={trainingEnquiries}
          grievances={grievances}
          subscribers={subscribers}
          onUpdateStatus={handleUpdateStatus}
        />
      );
    }

    if (
      activeTab === "trainings" ||
      activeTab === "services" ||
      activeTab === "solutions" ||
      activeTab === "resources"
    ) {
      return (
        <CatalogSection activeTab={activeTab} searchQuery={searchQuery} />
      );
    }

    return <CorporateSection activeTab={activeTab} />;
  };

  return (
    <div className={styles.adminShell}>
      <AdminSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        counts={counts}
      />

      <div className={styles.mainViewport}>
        <AdminTopbar
          activeMenuMeta={activeMenuMeta}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenSidebar={() => setSidebarOpen(true)}
          onSelectTab={setActiveTab}
        />

        <div className={styles.contentArea}>{renderSection()}</div>
      </div>
    </div>
  );
}
