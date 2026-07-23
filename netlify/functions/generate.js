exports.handler = async (event) => {
  const { prompt, version } = JSON.parse(event.body);
  const API_KEY = process.env.REPLICATE_API_KEY;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ version, input: { prompt } })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
