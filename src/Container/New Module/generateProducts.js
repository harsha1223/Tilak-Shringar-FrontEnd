const cards = [
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    },
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    },
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    },
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    },
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    },
    {
        name:"Choli and Duppata",
        src:"https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
    }
]



function generateCards(){
    const cardl1 = document.querySelector(".cardsl1");
    cards.forEach( course =>{
        const card1 = document.createElement("div");
        card1.classList.add("card1");

        const image = document.createElement("img");
        image.src=cards.src;
        card1.appendChild(image);

        const text1 = document.createElement("span");
        text1.classList.add("text1");

        const text = document.createTextNode(cards.name);
        text1.appendChild(text);

        card1.appendChild(text1);
        cardl1.appendChild(card1);
    })
}
generateCards();