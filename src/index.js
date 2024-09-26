import express from "express"
const app = express()
app.get('/', (req, res) => {
  res.send('Server is running')
})

const PORT = process.env.PORT || 8000;
console.log("process.env.PORT", process.env.PORT);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});