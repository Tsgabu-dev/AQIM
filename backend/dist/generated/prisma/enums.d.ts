export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const CompanyStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type CompanyStatus = (typeof CompanyStatus)[keyof typeof CompanyStatus];
export declare const MembershipStatus: {
    readonly INVITED: "INVITED";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly REMOVED: "REMOVED";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
