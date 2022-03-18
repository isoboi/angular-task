export function calculateWidth(total: number, n: number): number {
  return (n / total * 100);
}

export const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const alertText = `Accept & validate 3 values:
              a. Total capacity in bytes
              b. Allocated capacity in bytes ( <= total)
              c. Used Capacity in bytes ( <= allocated)`;
