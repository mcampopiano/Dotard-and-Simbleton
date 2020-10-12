// creates HTML for the DOM
export const AgentHtml = (agentObj) => {
    return `
    <h3>${agentObj.purchasingAgent.nameFirst} ${agentObj.purchasingAgent.nameLast}</h3>
    <p>${agentObj.companyName}</p>
    <p>${agentObj.phoneWork}</p>  
    `
}