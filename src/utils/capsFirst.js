// export default function capsFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1)
//   }

const capsFirst = (str) => {
  if (!str || typeof str !== 'string') return ''; // Check if the input is undefined or not a string
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capsFirst;