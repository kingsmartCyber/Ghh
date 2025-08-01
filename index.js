const express= require('express');
const app = express();

const PORT = 1000

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => {
  console.log(`App is running 💨`);
});
