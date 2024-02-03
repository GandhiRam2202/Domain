const navBar = document.createElement('div')
navBar.setAttribute('class','container-fluid text-center position-sticky')
document.body.append(navBar)
navBar.innerHTML = '<h1>Marvel Characters</h1>'

const container = document.createElement('div')
container.setAttribute('class','container')
document.body.append(container)


const row = document.createElement('div')
row.setAttribute('class','row')
container.append(row)






fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b58b66f9e0d85591594b03b38c4af557&hash=4ed0b227729e46f24458e90de2ac7623')
.then(response=>response.json())
.then(res=>{

    for(let ind in res.data.results){
        
       
        const row1 = document.createElement('div')
        row1.setAttribute('class','col-sm-12 col-md-12 col-lg-6 col-xl-4')
        row.append(row1)

        const contentDiv = document.createElement('div')
        row1.append(contentDiv)
        

        const card = document.createElement('div')
        card.setAttribute('class','card rounded-5')
        contentDiv.append(card)

        const cardHeader = document.createElement('div')
        cardHeader.setAttribute('class','card-header rounded-top-5 text-center bg-black')
        cardHeader.innerText = `${res.data.results[ind].name}`
        card.append(cardHeader)

        const cardBody = document.createElement('div')
        cardBody.setAttribute('class','card-body')
        card.append(cardBody)

        const img = document.createElement('img')
        img.setAttribute('src',`${res.data.results[ind].thumbnail.path}`+`.${res.data.results[ind].thumbnail.extension}`)
        img.setAttribute('class','rounded-5')
        cardBody.append(img)

        const cardText = document.createElement('div')
        cardText.setAttribute('class','card-text text-center')
        card.append(cardText)
        cardText.innerText = `ID : ${res.data.results[ind].id}`

       
        
    }

})
