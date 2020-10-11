import { ListAgents, PopulateList } from "./BusinessList.js"
import {ListNewYork} from "./BusinessList.js"
import { listingAgents } from "./BusinessProvider.js"

PopulateList()
ListNewYork()
ListAgents()
console.log("Welcome to the main module")

console.log(listingAgents)