const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isEmpty = (value: string | Record<string, string> | (File | null)[]) => {
  return (
    !value ||
    (typeof value === 'string' && value.trim() === '') ||
    (typeof value === 'object' && (!(value as Record<string, string>).arm || Object.keys(value).length === 0))
  );
};

function is18YearsOrOlder(dateString: string): boolean {
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

  return new Date(dateString) <= eighteenYearsAgo;
}

function isValidImageType(fileType: string) {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
  return allowedMimeTypes.includes(fileType);
}

export { validateEmail, isEmpty, is18YearsOrOlder, isValidImageType };
