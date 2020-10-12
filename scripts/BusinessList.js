import { listingAgents, useBusinesses } from "./BusinessProvider.js"
import { businessHtml } from "./Business.js"
import {nyBusinesses} from "./BusinessProvider.js"
import {AgentHtml} from "./Agent.js"

const contentContainer = document.querySelector(".business__list")
const nyContainer = document.querySelector(".businessList--newYork")
const agentContainer = document.querySelector(".agents")



export const PopulateList = () => {
    const businessArr = useBusinesses()
    contentContainer.innerHTML = "<h1>Active Businesses</h1>"
// iterates through the businessArr array, and for each item (compObj) it performs the task
    businessArr.forEach((compObj) => {
        contentContainer.innerHTML += businessHtml(compObj)
    }
    
    );
}

export const ListNewYork = () => {
    const newYorkArr = nyBusinesses
    nyContainer.innerHTML = "<h2>New York Businesses</h2>"

    newYorkArr.forEach((newYorkComp) => {
        nyContainer.innerHTML += businessHtml(newYorkComp)
    })
}

export const ListAgents = () => {
    const agentsList = listingAgents
    agentContainer.innerHTML = "<h2>Purchasing Agents</h2>"

    agentsList.forEach((agent) => {
        agentContainer.innerHTML += AgentHtml(agent)
    })
}








// const SupplyList = () => {
//     const supplyArray = useSupplies()
//     contentTarget.innerHTML = "<h1>Art Supplies</h1>"

//     supplyArray.forEach(
//         (supplyObject) => {
//             contentTarget.innerHTML += Supply(supplyObject)
//         }
//     );
// }