var old1 = "../../../img";
var new1 = "http://docs.kadeshchain.com/img";

var old2 = "../../img";
var new2 = "http://docs.kadeshchain.com/img";

var old3 = "../img";
var new4 = "http://docs.kadeshchain.com/img";

var imgList = document.getElementsByTagName("img");

for (var i = 0; i < imgList.length; i++) {
    var img = imgList[i];
    var oldSrc = img.getAttribute("src");
    var newSrc = oldSrc.replace(old1, new1);
    img.setAttribute("src", newSrc);
}
for (var i = 0; i < imgList.length; i++) {
    var img = imgList[i];
    var oldSrc = img.getAttribute("src");
    var newSrc = oldSrc.replace(old2, new2);
    img.setAttribute("src", newSrc);
}
for (var i = 0; i < imgList.length; i++) {
    var img = imgList[i];
    var oldSrc = img.getAttribute("src");
    var newSrc = oldSrc.replace(old3, new3);
    img.setAttribute("src", newSrc);
}

// $(document).ready(function() {
//     var ds = document.createElement('script');
//     ds.src = 'https://cdn.jsdelivr.net/npm/@docsearch/js@3';
//     document.body.append(ds);

//     var custom = `
//     docsearch({

//         appId: "P8L48VCRQH",

//         apiKey: "a8a771e2ad19b583d319b66ef3c0485c",

//         indexName: "kadeshchain",

//         container: '#docsearch',

//         debug: false 

//       });
//     `;
//     $('<script>').html(custom).appendTo('body');
// });

// $(document).ready(function() {
//     docsearch({

//         appId: "P8L48VCRQH",
    
//         apiKey: "a8a771e2ad19b583d319b66ef3c0485c",
    
//         indexName: "kadeshchain",
    
//         container: '#docsearch',
    
//         debug: false 
    
//     });
// });
