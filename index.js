

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let people = [
    {
      id: 1,
      firstName: "Allen",
      lastName: "Doelue",
      age: 21,
      gender: 'Male',
      profilePic: '',
      workoutGoal: 'Muscle Mass',
      availDaysOfWk: [1, 0, 1, 0, 1, 0, 0],
      squat: 225,
      deadlift: 225,
      bench: 145,
      expYears: 5
    },
    {
        id: 2,
        firstName: "Johnny",
        lastName: "Yang",
        age: 20,
        gender: 'Male',
        profilePic: '',
        workoutGoal: 'Muscle Mass',
        availDaysOfWk: [1, 1, 1, 1, 1, 1, 1],
        squat: 225,
        deadlift: 225,
        bench: 120,
        expYears: 2
      },
    {
        id: 3,
        firstName: "Kurt",
        lastName: "Goerg",
        age: 22,
        gender: 'Male',
        profilePic: '',
        workoutGoal: 'Health',
        availDaysOfWk: [1, 1, 1, 1, 0, 0, 0],
        squat: 150,
        deadlift: 145,
        bench: 110,
        expYears: 3
    }
  ]

app.get('/', (request, response) => {
    response.send(`<p>hello world</p>`)
    console.log("hello world")
})

app.get('/api/people', (request, response) => {
    response.json(people)
  })
  

const PORT = 3001
// const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})