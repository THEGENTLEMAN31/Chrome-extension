let myLeads= ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputBtn =document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl =document.getElementById("ul-el")



inputBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    render()
     
})

function render()
{
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems
}


