require('dotenv').config()
const mongoose = require('mongoose')

const password = process.argv[2]

const url = process.env.MONGOOSE_URL

const connection = mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)
process.argv.length===5 ? addPerson() : displayPersons()

function addPerson(){
  const name = process.argv[3]
  const number = process.argv[4]

  connection
  .then(() => {
    console.log('connected')
    const person = new Person({
      name: name,
      number: number
    })
    console.log("Voici la personne : ", person)
    return person.save()
  })
  .then(() => {
    console.log(`Added ${name} number ${number} to phonebook`)
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))
}

function displayPersons() {
  connection
  .then(()=>{
    console.log('connected')
    Person.find({}).then(result =>{
      result.forEach(person=>{
        console.log(person)
      })
    }).then(()=>{
      return mongoose.connection.close()
    })

  })
}