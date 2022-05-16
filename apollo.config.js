module.exports = {
  client: {
    name: "next-diary",
    includes: ["./app/**/*.{ts,tsx,js,jsx,graphql}"],
    tagName: "gql",
    addTypename: true,
    service: {
      name: "nest-diary",
      url: "https://nestdiary.herokuapp.com/graphql",
    },
  },
};
