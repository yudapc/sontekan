package main

import (
    "encoding/json"
    "github.com/gorilla/mux"
    "log"
    "net/http"
    "fmt"
)

// The person Type (more like an object)
type Person struct {
    ID        string   `json:"id,omitempty"`
    Firstname string   `json:"firstname,omitempty"`
    Lastname  string   `json:"lastname,omitempty"`
    Address   *Address `json:"address,omitempty"`
}
type Address struct {
    City  string `json:"city,omitempty"`
    State string `json:"state,omitempty"`
}

var people []Person

// Display all from the people var
func GetPeople(w http.ResponseWriter, r *http.Request) {
    fmt.Println("GetPeople")
    json.NewEncoder(w).Encode(people)
}

// Display a single data
func GetPerson(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    fmt.Println("GetPerson with ID:", params["id"])
    for _, item := range people {
        if item.ID == params["id"] {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Person{})
}

// create a new item
func CreatePerson(w http.ResponseWriter, r *http.Request) {
    fmt.Println("CreatePerson")
    params := mux.Vars(r)
    var person Person
    _ = json.NewDecoder(r.Body).Decode(&person)
    person.ID = params["id"]
    people = append(people, person)
    json.NewEncoder(w).Encode(people)
}

// Delete an item
func DeletePerson(w http.ResponseWriter, r *http.Request) {
    fmt.Println("DeletePerson")
    params := mux.Vars(r)
    for index, item := range people {
        if item.ID == params["id"] {
            people = append(people[:index], people[index+1:]...)
            break
        }
        json.NewEncoder(w).Encode(people)
    }
}

// Seed people data
func seed() {
    people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Kennedy", Address: &Address{City: "Mexico", State: "State New"}})
    people = append(people, Person{ID: "2", Firstname: "Alex", Lastname: "Sebastian", Address: &Address{City: "England", State: "State Old"}})
    people = append(people, Person{ID: "3", Firstname: "James", Lastname: "Cook", Address: &Address{City: "England", State: "Manchasters"}})
}

// main function to boot up everything
func main() {
    fmt.Println("Run main function!")
    seed()
    router := mux.NewRouter()
    router.HandleFunc("/people", GetPeople).Methods("GET")
    router.HandleFunc("/people/{id}", GetPerson).Methods("GET")
    router.HandleFunc("/people/{id}", CreatePerson).Methods("POST")
    router.HandleFunc("/people/{id}", DeletePerson).Methods("DELETE")
    log.Fatal(http.ListenAndServe(":8000", router))
}
