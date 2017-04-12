export const NAVIGATE = 'NAVIGATE';

export function navigate(routeName, params = {}) {
  return {
    type: NAVIGATE,
    routeName,
    params,
  };
}
