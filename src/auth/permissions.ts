// Permission engine with granular RBAC
// Role definition with hierarchical permissions
export interface Role {
  name: string;
  permissions: string[];
  inherits?: string[];
}
