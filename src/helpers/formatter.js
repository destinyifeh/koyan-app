export const formatCardNumber = text => {
  console.log(text, 'the formatted test');
  return text
    .replace(/\s?/g, '') // Remove any existing spaces
    .replace(/(\d{4})/g, '$1 ') // Add space after every 4 digits
    .trim(); // Remove trailing space
};

export const formatExpiryDate = text => {
  // Remove non-numeric characters
  const cleaned = text.replace(/\D/g, '');

  // Format with a slash after the second digit
  const formatted =
    cleaned.slice(0, 2) + (cleaned.length > 2 ? '/' : '') + cleaned.slice(2, 4);

  return formatted;
};
