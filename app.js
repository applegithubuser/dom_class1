const blogTitles = document.getElementsByTagName("h3");
for (const title of blogTitles){
title.style.background= "#d2b4de"}

// console.log(blogTitles);


// const blogDetails = document.getElementsByTagName ("p");
// for (const title of blogDetails){
//     title.style.color = "red"
// }



// const thirdTitle = document.getElementById("third-title")
// console.log(thirdTitle);
// thirdTitle.style.border= "3px solid black"
// thirdTitle.style.padding= "20px"



const headTitle = document.getElementsByTagName("h1")
for (const head of headTitle){
     head.style.color = "red" 
     head.style.textAlign = "center" 
     
}





// create blog 

const article = document.createElement("article")
article.classList.add ("blog-main")
const h3 = document.createElement("h3")
h3.innerText = "This text created by JS code"
const p = document.createElement("p")
p.innerText = "$$$$$$$Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo eaque perferendis ipsum nobis vel iure corporis excepturi officia qui veritatis nesciunt doloribus consequuntur, laborum consectetur voluptatem recusandae natus alias?$$$$$$$"
// console.log(p);

article.appendChild(h3)
article.appendChild(p)

// console.log(article);

document.body.appendChild(article)



const blogs = document.getElementsByClassName("blog-main")
for (const blog of blogs){
 blog.style.border = "3px solid green"
 blog.style.margin = "15px"
 blog.style.padding = "15px"
 blog.style.background = "#d5f5e3"
}



// div style 

const divTitles = document.getElementsByTagName("h4");
for (const div of divTitles){
div.style.background= "#ec7063 "
}


const divMain = document.getElementsByClassName("div-main")
for (const divs of divMain){
 divs.style.border = "3px dotted #d35400"
 divs.style.margin = "15px"
 divs.style.padding = "15px"
 divs.style.background = "#f2d7d5"
}
