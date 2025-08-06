let myLeads= []
const inputBtn =document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl =document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

/*const leadsFromLocalStorage = JSON.parse(localStoragegetItem("myLeads"))
if (leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage
    renderLeads
}*/

inputBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    renderLeads()
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    inputEl.value =""
  
})
deleteBtn.addEventListener("dblclick", function()
{
    localStorage.clear()
    myLeads=[]
    renderLeads()
}
)



function renderLeads()
{
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
        
       
        
       listItems += `
       <li>
            <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
             </a>
       </li>`
}
ulEl.innerHTML = listItems
}


