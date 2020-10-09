import { useBusinesses } from "./BusinessProvider.js"
import { businessHtml } from "./Business.js"
import {nyBusinesses} from "./BusinessProvider.js"

debugger

const contentContainer = document.querySelector(".business__list")
const nyContainer = document.querySelector(".businessList--newYork")



export const PopulateList = () => {
    const businessArr = useBusinesses()
    contentContainer.innerHTML = "<h1>Active Businesses</h1>"

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








// const SupplyList = () => {
//     const supplyArray = useSupplies()
//     contentTarget.innerHTML = "<h1>Art Supplies</h1>"

//     supplyArray.forEach(
//         (supplyObject) => {
//             contentTarget.innerHTML += Supply(supplyObject)
//         }
//     );
// }