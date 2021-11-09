const renderItems = (data) => {
  console.log(data)
}


fetch("./db/partners.json")
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((err) => {
    console.log(err);
  });