const express = require('express')
const app = express()
const PORT = 3000
const tasks = require('./routes/tasks')

// Middleware
app.use(express.json())

// Routs
app.get('/home', (req, res)=>{
  res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks)


app.listen(PORT, console.log(`Server is listening on PORT ${PORT}..`))
