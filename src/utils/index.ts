export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getImagePath(imagePath: string) {
  const baseUrl = "https://res.cloudinary.com";
  if (imagePath.startsWith(baseUrl)) {
    return imagePath;
  } else {
    return `/products/${imagePath}.jpg`;
  }
}
