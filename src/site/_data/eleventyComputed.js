const { getGraph } = require("../../helpers/linkUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  graph: async (data) => await getGraph(data),
  userComputed: (data) => userComputed(data),
  noteProps: (data) => data["dg-note-properties"]
};
