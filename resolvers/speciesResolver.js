const speciesData = [
  {
    id: "1",
    speciesName: "Cat",
    category: "1",
  },
];

export default {
  Animal: {
    species(parent) {
      console.log("parent", parent);
      return speciesData
        .filter((species) => species.id === parent.species)
        .pop();
    },
  },
};
