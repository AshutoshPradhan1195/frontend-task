let pointer = 0;



const credentials = [
    {
        name:"Ashutosh Pradhan",
        title:"Student",
        image:"./assets/user1.jpg",
        testimonies: "At Elearning, I found a community that fosters growth and success. The engaging classes and dedicated instructors not only improved my language skills but also boosted my confidence.",

    },
    {
        name:"Jane Doe",
        title:"Student",
        image:"./assets/user3.jpg",
        testimonies: "At Elearning, I found more than just a place to learn Korean; I found a community that fosters growth and success. The engaging classes and dedicated instructors not only improved my language skills but also boosted my confidence.",

    },
    {
        name:"John Harris",
        title:"Student",
        image:"./assets/user4.jpg",
        testimonies: "I found more than just a place to learn Korean; I found a community that fosters growth and success. The engaging classes and dedicated instructors not only improved my language skills but also boosted my confidence.",

    }
]

function nextClick(){
    if(pointer === 2){
        pointer = 0;

        credentials3 = credentials[1]
        credentials2 = credentials[0]
        credentials1 = credentials[2]

        credentials[0] = credentials1
        credentials[1] = credentials2
        credentials[2] = credentials3

        document.getElementById("image3").src=credentials[2].image
        document.getElementById("image2").src=credentials[1].image
        document.getElementById("image1").src=credentials[0].image
        document.getElementById("testimony-text").innerHTML = credentials[2].testimonies
        document.getElementById("testimony-name").innerHTML = credentials[2].name
        document.getElementById("testimony-title").innerHTML = credentials[2].title
    }
    else{
        pointer++

        credentials3 = credentials[1]
        credentials2 = credentials[0]
        credentials1 = credentials[2]

        credentials[0] = credentials1
        credentials[1] = credentials2
        credentials[2] = credentials3

        document.getElementById("image3").src=credentials[2].image
        document.getElementById("image2").src=credentials[1].image
        document.getElementById("image1").src=credentials[0].image
        document.getElementById("testimony-text").innerHTML = credentials[2].testimonies
        document.getElementById("testimony-name").innerHTML = credentials[2].name
        document.getElementById("testimony-title").innerHTML = credentials[2].title
    }
    
}




