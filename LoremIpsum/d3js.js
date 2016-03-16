var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "red", null);
}
d3.selectAll("p").style("color", "white");
console.log("hi");
