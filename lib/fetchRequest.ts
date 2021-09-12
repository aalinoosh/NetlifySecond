const fetchRequest = async (url, params) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(params),
  })
  const data = await response.json()
  return data
}

export default fetchRequest
