
const fetch_posts = (function(){
//closure ?

    const url = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs"
    

fetch(url)
.then(function(response){
 if (response.ok){
     response.json()
     .then(
         function(data){
            var blogWrapper = document.getElementById("demo");
            var allPosts = data.map(function(item){

                var capitalLetter = item.title.charAt(0).toUpperCase();

                //map eh como se fosse vetor percorrendo
                var title = `<h2 class='blog-post-title'> ${capitalLetter + item.title.slice(1)} </h2>`;
                var body = `<p>${item.body}</p>` 
                var meta = `<p class='blog-post-meta'>Post #${item.id}</p>`
                //esse `` eh templeate screen
                var blogPost = `<div class='blog-post'>${title + meta + '<hr/>' +body + body + body + body + body}</div>`
                return blogPost;
                // recebe item e tempo de execução
                // return title;
                // console.log("item ->", item.title);
            })  
            // splice - nomero de começo e numero fim. De toos os 50, pega o primeiro e conta ate 4
            .splice(0,4)
            .join(" - ")
            blogWrapper.innerHTML = allPosts;

            // blogWrapper.innerHTML = allPosts;
            // console.log("data -> ", data );
         }
         
     )
 }   
}
)

}())


// const search = (function(){
// return{
//     sendSearch: function(){
//     console.log("search foi chamada")
//     },
//     openSearch: function(){
//         document.querySelector('searchLink')
//         .addEventListener("click", () => {
//               let form=document.querySelector("#seachBox > div");
//               let input = document.querySelector("#searchBox > div > input");
//               let submitSearch = document.querySelector("submitSearch");
//               form.style.display = "block";

//               [
//                 // keyframes
//                 { transform: "translateX(15px)" },
//                 { transform: "translateX(0px)" }
//             ],
//             {
//                 // timing options
//                 duration: 1000,
//                 iterations: 1
//             }
//         )input.focus()
//         submitSearch.addEventListener("click", function(){
//             posts.sendSeach();
//         })
//         })
// }
// }
// )}


search.openSearch();


//





// function reqListener(){
//     //texto de resposta q o xmlhhttp tem
//      this.responseText;
//      console.log(this.responseText);
//   }

//  var oReq = new XMLHttpRequest();
//  oReq.onload = reqListener;
//  // definiu novo tipo de requisitcao tipo get abre o link
//  oReq.open("get", "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs", true);
//  oReq.send();
