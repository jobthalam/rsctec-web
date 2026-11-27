"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/screens/Admin/components/AdminSidebar/AdminSidebar";
import Enquiries from "@/components/screens/Admin/sections/Enquiries/Enquiries";
import Trainings from "@/components/screens/Admin/sections/Trainings/Trainings";
import { ADMIN_MENU } from "@/constants/adminData";
import styles from "./Admin.module.scss";

const Admin = () => {
  const [activeTab, setActiveTab] = useState(ADMIN_MENU[0].id);

  return (
    <div className={styles.admin}>
      <AdminSidebar
        items={ADMIN_MENU}
        activeId={activeTab}
        onSelect={setActiveTab}
      />
      <div className={styles.content}>
        {activeTab === "enquiries" && <Enquiries />}
        {activeTab === "trainings" && <Trainings />}
      </div>
    </div>
  );
};

export default Admin;
