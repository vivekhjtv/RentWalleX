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

export type PropertyInfoType = {
  Property_Info: [
    {
      id: string;
      propName: string;
      propAddress: string;
      rentAmt: string;
      manageCompany: string;
      managerName: string;
      payMethod: string;
      userId: string;
    }
  ];
  name: string;
  phonenumber: string;
  jobTitle: string;
  email: string;
  currentEmployer: string;
  monthlyIncome: string;
};

export type PaymentInfoType = {
  Payment_Info: [
    {
      id: string;
      rentAmt: string;
      paymentAmt: string;
      remainingAmt: string;
      payemntDate: Date;
      status: string;
    }
  ];
};
