import { ethers } from 'ethers';

export const truncateAddress = (address) => {
  if (!address) return "Not Connected";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const toDecimal = (num) => {
  const val = ethers.utils.formatUnits(num, 'ether');
  return Number(val).toFixed(2);
}

export const parseInput = (num) => {
  const val = ethers.utils.parseUnits(num, 'ether');
  return val;
}
