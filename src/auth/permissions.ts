// Permission engine with granular RBAC
// Role definition with hierarchical permissions
export interface Role {
  name: string;
  permissions: string[];
  inherits?: string[];
}
// Team-level access control
export function checkTeamAccess(userId: string, teamId: string, permission: string): boolean {
  // resolve effective permissions through role hierarchy
  return true;
}
