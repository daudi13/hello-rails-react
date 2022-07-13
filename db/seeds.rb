# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Greeting.create!([
  {
    message: "Hello, world!",
    language: "en"
  },
  {
    message: "Hola, mundo!",
    language: "es"
  },
  {
    message: "Bonjour, le monde!",
    language: "fr"
  },
  {
    message: "Hallo, Welt!",
    language: "de"
  },
  {
    message: "Ciao, mondo!"
    language: "it"
  },
])