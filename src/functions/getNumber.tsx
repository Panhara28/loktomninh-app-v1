export function getPhoneNumber(phoneNumber: string) {
  if (phoneNumber.charAt(0) == "0") {
    return phoneNumber.substring(1, phoneNumber.length);
  }

  return phoneNumber;
}
