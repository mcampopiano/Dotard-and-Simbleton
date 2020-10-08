export const businessHtml = (compObj) => {
    return `
    <h2>${compObj.companyName}</h2>
    <p>${compObj.addressFullStreet}</p>
    <p>${compObj.addressCity} ${compObj.addressStateCode} ${compObj.addressZipCode}</p>
    `
}