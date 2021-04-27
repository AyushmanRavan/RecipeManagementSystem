interface Menu {
  title: string;
  link: string;
  icon: string;
  expand: boolean;
  items?: any[];
  options: { exact: boolean };
}

/* for PMS Machine */
const DASHBOARD_MENU_ITEMS: Menu[] = [
  {
    title: "Home",
    link: "/dashboard",
    icon: "home",
    expand: false,
    options: { exact: true }
  },
  
];
 

const CONFIGURATION_MENU_ITEMS: Menu[] = [
  {
    title: "Configurations",
    link: "/dashboard/confg",
    icon: "settings_applications",
    expand: true,
    items: [
      { 
        var: "paramConfig"
      }
    ],
    options: { exact: false }
  }
];



const ROLES = {
  PARTICIPANT: "PARTICIPANT",
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN"
};

const HIDE_ACCESS_DETAILS = false;

export {
  Menu,
  ROLES,
  DASHBOARD_MENU_ITEMS,
  CONFIGURATION_MENU_ITEMS,
  HIDE_ACCESS_DETAILS
};
