//use api adress
const btnEL = document.getElementById("btn")
const paraEL = document.getElementById("para")
const emoji = []
async function addEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=f110a42fc8c62dfb0f00d2e048446ad12695be2a")
  data = await response.json()

 
  
 for (let i = 0; i < 1859; i++) {
      emoji.push({
       emojiname : data[i].character , 
       emojiCode: data[i].unicodeName
      })
 }
}
console.log(emoji);


addEmoji() 
btnEL.addEventListener("click" , ()=>{
  const RandomNum  =Math.floor(Math.random()*emoji.length)
   btnEL.innerText = emoji[RandomNum].emojiname
   paraEL.innerText = emoji[RandomNum].emojiCode

})