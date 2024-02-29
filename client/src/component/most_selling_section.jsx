import Card1 from "./card1"


const Most_selling_section = () => {
    const card1 = [
        {
            title : "Potato",
            price: 40,
            image: "./images/potato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id: 1
        },
        {
            title : "Tomato",
            price: 30,
            image: "./images/tomato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:2
        },
        {
            title : "Onion",
            price: 50,
            image: "./images/onion.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:3
        },
        {
            title : "Chillis",
            price: 60,
            image: "./images/chillis.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:4
        }
    ]
    return (
        <>
            <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16" >
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Most Selling</h2>
                <div className="w-full h-max grid grid-cols-12 gap-y-3 mt-6 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                   {card1.map((v,i)=>{
                    return <Card1 key={v.id} title={v.title} price={v.price} image={v.image} description={v.description} ratings={v.ratings}/>
                   })} 
                    
                </div>
            </div>
        </>
    )
}

export default Most_selling_section