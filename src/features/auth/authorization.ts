export type UserRole = "Admin" | "Partner" | "Junior";

export const hasUploadAccess = (roles: UserRole[]) =>
  roles.includes("Admin") || roles.includes("Partner");
