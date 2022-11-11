const kim = {
  weight: 82,
  height: 190,
  name: {
    lastName: "kardashain",
    middleName: "noel",
    firstName: "Kimberly",
  },
  sisters: ["Kourtney ", "Khloe", "Kendall", "Kylie"],
};

const {
  weight,
  name: { middleName },
  sisters: [, , , kylie],
} = kim;

console.log(weight); // 82
console.log(middleName); // 'noel'
console.log(kylie); // 'Kylie'
