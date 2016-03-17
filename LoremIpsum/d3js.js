var paragraphs = document.getElementsByTagName("p");
console.log("Hi");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
<<<<<<< HEAD
  paragraph.style.setProperty("color", "red", null);
=======
  paragraph.style.setProperty("color", "white", null);
  conosle.log("HI");
>>>>>>> 6898f996542f36b6d1948fb9cf3d5b39c9adf372
}
d3.selectAll("p").style("color", "white");
console.log("hi");
