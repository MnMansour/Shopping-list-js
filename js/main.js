let expand =  document.getElementById('expand')
let table = document.getElementById('table')
let expand1 =  document.getElementById('expand1')
let table1 = document.getElementById('table1')

let Expand = () => {
    table.style.display = (table.style.display=== "none")? "table":"none";
    expand.className = (table.style.display=== "table")?"fa fa-chevron-circle-up":"fa fa-chevron-circle-down";
}

let Expand1 = () => {
    table1.style.display = (table1.style.display=== "table")? "none":"table";
    expand1.className = (table1.style.display=== "table")?"fa fa-chevron-circle-up":"fa fa-chevron-circle-down";
}
expand.addEventListener("click", Expand);
expand1.addEventListener("click", Expand1)

let addI = document.getElementById('addI')
const addForm = document.getElementById('addForm')

let AddForm = () => {
    addForm.style.display = "block"
}
addI.addEventListener('click', AddForm)

// to add item to wish list
const add = document.getElementById('add')
const Add = () => {
    let tbody = document.getElementById('tbody')
    let name = document.getElementById('name')
    let quantity = document.getElementById('quantity')
    let bib = document.getElementById('bib')

    const date = `${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`
    const td = `<td class="x"><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                <td class="y"><i class="fa fa-repeat" aria-hidden="true"></i></td>
                <td>${name.value}</td><td>${quantity.value}</td><td class="x z">${date}</td><td class="x z">${bib.value}</td><td class="y"></td><td class="x"></td>
                <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>`
    const tr= document.createElement('tr')
    tr.innerHTML= td
    tbody.prepend(tr)
    name.value=""
    quantity.value=""
    bib.value=""
    addForm.style.display = "none"

}
add.addEventListener('click',Add)

const Delete = function() {
    this.parentElement.parentElement.remove()
}

const Done = function(){
    
    let tbody= document.getElementById('tbody1')
    const tr = this.parentElement
    tbody.prepend(tr)
    const date = `${new Date().getHours()}:${new Date().getMinutes() > 9? new Date().getMinutes() : '0' + new Date().getMinutes()}  ${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`;
    tr.childNodes[8].innerText= date
    console.log(tr.childNodes)
}

let unDone = function(){
    let tbody= document.getElementById('tbody')
    const tr = this.parentElement
    tbody.prepend(tr)
}

    
let item = document.getElementsByClassName("fa-trash-o")
const General= function () {
    for(i = 0 ; i < item.length ; i++){
        // to delete from wish table
        item[i].addEventListener('click', Delete)
        // to move for done list
        let done = item[i].parentElement.parentElement.childNodes[0]
        done.addEventListener("click", Done)
        // to calculates date difference
        const Nodes = item[i].parentElement.parentElement
        const time = Date.parse(Nodes.childNodes[7].innerHTML) - Date.parse(new Date())
        if (time > 0){
            const days = Math.floor(time/(1000*60*60*24));
            Nodes.childNodes[9].innerHTML=`${days} Days`
            Nodes.childNodes[9].style.color="white"
        }else{
            Nodes.childNodes[9].innerHTML=`Expired`
            Nodes.childNodes[9].style.color="red"
            Nodes.childNodes[0].style.fontWeight= "700"
        }
        Nodes.childNodes[2].addEventListener('click', unDone)
    }
}

window.setInterval(General, 500)


