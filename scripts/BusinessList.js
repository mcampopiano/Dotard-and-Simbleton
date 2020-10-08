import { useBusinesses } from "./BusinessProvider.js"
import { businessHtml } from "./Business.js"

const contentContainer = document.querySelector(".business__list")



export const PopulateList = () => {
    const businessArr = useBusinesses()
    contentContainer.innerHTML = "<h1>Active Businesses</h1>"

    businessArr.forEach((compObj) => {
        contentContainer.innerHTML += businessHtml(compObj)
    }
    
    );
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