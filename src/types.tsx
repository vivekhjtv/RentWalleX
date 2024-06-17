export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type MembershipsType = {
  id: string;
  membershipType: string;
  membershipAmt: string;
  membershipDuration: string;
  membershipAmenities: string;
};
