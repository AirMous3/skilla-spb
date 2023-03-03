export const convertPhoneNumber = (phoneNumber) => {
  phoneNumber = phoneNumber.toString();
  const codeNumber = phoneNumber.slice(1, 4);
  const firstHalfOfNumber = phoneNumber.slice(4, 7);
  const secondHalfOfNumber = phoneNumber.slice(7, 9);
  const thirdHalfOfNumber = phoneNumber.slice(9);
  return `+${phoneNumber[0]} (${codeNumber}) ${firstHalfOfNumber}-${secondHalfOfNumber}-${thirdHalfOfNumber}`;
};
