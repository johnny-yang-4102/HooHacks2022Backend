

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
      profilePic: '',
      workoutGoal: 'Muscle Mass',
      hoursPerDayOfWeek: [1, 0, 1, 0, 1, 0, 0],
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
        profilePic: '',
        workoutGoal: 'Muscle Mass',
        hoursPerDayOfWeek: [1, 1, 1, 1, 1, 1, 1],
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
        profilePic: '',
        workoutGoal: 'Health',
        hoursPerDayOfWeek: [1, 1, 1, 1, 0, 0, 0],
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

app.post('/api/people', (request, response, next) => {

    const person = request.body
    people = people.concat(person)

    response.json(person)

    

    // const person = new Person(


    //     {
    //         id: body.id,
    //         firstName: body.firstName,
    //         lastName: body.lastName,
    //         age: body.age,
    //         profilePic: body.profilePic,
    //         workoutGoal: body.workoutGoal,
    //         hoursPerDayOfWeek: body.hoursPerDayOfWeek,
    //         squat: body.valSquat,
    //         deadlift: body.valDeadlift,
    //         bench: body.valBench,
    //         expYears: body.expYears
    //     }
    // )



})
  

const PORT = 3001
// const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})