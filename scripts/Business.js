// creates HTML for the DOM
export const businessHtml = (compObj) => {
    return `
    <h3>${compObj.companyName}</h3>
    <p>${compObj.addressFullStreet}</p>
    <p>${compObj.addressCity} ${compObj.addressStateCode} ${compObj.addressZipCode}</p>
    `
}