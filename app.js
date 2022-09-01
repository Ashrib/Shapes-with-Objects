function Shapes (height, width, background, radius, br_right, br_left, br_top, br_bottom) {
    this.height = height,
    this.width = width,
    this.background = background,
    this.radius = radius,
    this.br_right = br_right,
    this.br_left = br_left,
    this.br_top = br_top,
    this.br_bottom = br_bottom
}
var square = new Shapes("150px", "150px", "darkblue", undefined, undefined, undefined, undefined, undefined);
var circle = new Shapes("150px", "150px", "red", "50%", undefined, undefined, undefined, undefined);
var rectangle = new Shapes("150px", "250px", "orange", undefined, undefined, undefined, undefined, undefined);
var triangle = new Shapes("0px", "0px", "transparent", undefined, "100px solid transparent", "100px solid transparent", undefined, "150px solid purple");
var parallelogram = new Shapes("150px", "250px", "darkgreen",undefined, undefined, undefined, undefined, undefined);

var getMainDiv = document.getElementById("container");

var title = document.createElement("div");
title.setAttribute("id", "title");
title.appendChild(document.createTextNode("Shapes with Object"));
getMainDiv.appendChild(title);

var getParentDiv = document.createElement("div");
getParentDiv.setAttribute("id","shapes-container")
getMainDiv.appendChild(getParentDiv);

var sqDiv = document.createElement("div");
sqDiv.style.height = square.height;
sqDiv.style.width = square.width;
sqDiv.style.background = square.background;
getParentDiv.appendChild(sqDiv);

var circleDiv = document.createElement("div");
circleDiv.style.height = circle.height;
circleDiv.style.width = circle.width;
circleDiv.style.background = circle.background;
circleDiv.style.borderRadius = circle.radius;
getParentDiv.appendChild(circleDiv);

var recDiv = document.createElement("div");
recDiv.style.height = rectangle.height;
recDiv.style.width = rectangle.width;
recDiv.style.background = rectangle.background;
getParentDiv.appendChild(recDiv);

var triDiv = document.createElement("div");
triDiv.style.height = triangle.height;
triDiv.style.width = triangle.width;
triDiv.style.background = triangle.background;
triDiv.style.borderBottom = triangle.br_bottom;
triDiv.style.borderLeft = triangle.br_left;
triDiv.style.borderRight = triangle.br_right;
getParentDiv.appendChild(triDiv);

var paraDiv = document.createElement("div");
paraDiv.style.height = parallelogram.height;
paraDiv.style.width = parallelogram.width;
paraDiv.style.background = parallelogram.background;
paraDiv.style.transform = "skew(-20deg)"
getParentDiv.appendChild(paraDiv);


