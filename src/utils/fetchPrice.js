// This simulates fetching price from external links
export const fetchPrice = async (url) => {
  try {
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 500));
    // Random price mock
    return (Math.random() * 500 + 100).toFixed(2);
  } catch (error) {
    console.error('Error fetching price for', url, error);
    return null;
  }
};
