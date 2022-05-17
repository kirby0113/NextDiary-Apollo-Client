module.exports = {
  client: {
    name: "next-diary",
    includes: ["queries/**/*.{ts,tsx,js,jsx,gql}"],
    tagName: "gql",
    addTypename: true,
    service: {
      name: "nest-diary",
      url: "https://nestdiary.herokuapp.com/graphql",
    },
  },
};
