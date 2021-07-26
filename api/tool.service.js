import API_URL from "./config";

export const tool = fetch(`${API_URL}/tools`, {
  method: "GET",
})
  .then((resp) => resp.json())
  .then(function (data) {
    let tools = data.results;
    return tools.map(function (tool) {
      console.log(tool);
    });
  })
  .catch((err) => console.log(err));
