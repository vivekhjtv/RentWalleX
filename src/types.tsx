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

export type MembershipInfoType = {
  Membership_Info: [
    {
      id: string;
      membershipAmt: string;
      membershipDuration: string;
      membershipExpireDate: string;
      membershipStartDate: string;
      membershipStatus: string;
      membershipType: string;
      userId: string;
    }
  ];
  name: string;
};
