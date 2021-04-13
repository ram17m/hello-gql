const speciesData = [
  {
    id: "1",
    speciesName: "Cat",
    category: "1",
  },
];

export default {
  Animals: {
    species(parent) {
      console.log("parent", parent);
      return speciesData
        .filter((species) => species.id === parent.species)
        .pop();
    },
  },
};
