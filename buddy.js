const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => dispalyBuddy(data))
}
loadBuddies()

const dispalyBuddy = data => {
const buddies = data.results;
const buddiesDiv = document.getElementById('buddy');

for(const buddy of buddies) {
    const p =document.createElement('p')
    console.log(buddy.name , buddy.name.last);
    // p.innerText = buddy.email;
    p.innerText =`Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
    buddiesDiv.appendChild(p)
}

}