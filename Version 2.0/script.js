currentSvg = "";
title = "";

class1 = {					//object
    included: false,
    name: "Class 1",
    connections: {
        To2: false,
        To3: false,
        To4: false
    }
}

class2 = {
    included: false,
    name: "Class 2",
    connections: {
        To1: false,
        To3: false,
        To4: false
    }
}

class3 = {
    included: false,
    name: "Class 3",
    connections: {
        To2: false,
        To1: false,
        To4: false
    }
}

class4 = {
    included: false,
    name: "Class 4",
    connections: {
        To2: false,
        To3: false,
        To1: false
    }
}

class1Box=`<rect x="0" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class1.name}"/><text x="5" y="15" fill="black"><a>${class1.name}</a></text>`;
class2Box=`<rect x="200" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class2.name}"/><text x="205" y="15" fill="black"><a>${class2.name}</a></text>`;
class3Box=`<rect x="0" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class3.name}"/><text x="5" y="215" fill="black"><a>${class3.name}</a></text>`;
class4Box=`<rect x="200" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class4.name}"/><text x="205" y="215" fill="black"><a>${class4.name}</a></text>`;

line12=`<line x1="100" y1="50" x2="200" y2="50" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class2.name}"/>`;
arrow1To2=`<polygon points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class2.name}" />`;
arrow2To1=`<polygon points="125,35 125,65 100,50" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class1.name}" />`;

line13=`<line x1="50" y1="100" x2="50" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class3.name}"/>`;
arrow3To1=`<polygon points="35,125 65,125 50,100" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class1.name}" />`;
arrow1To3=`<polygon points="35,175 65,175 50,200" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class3.name}" />`;

line14=`<line x1="100" y1="100" x2="200" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class4.name}"/>`;
arrow4To1=`<polygon points="100,100 100,125 125,100" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class1.name}" />`;
arrow1To4=`<polygon points="200,200 200,175 175,200" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class4.name}" />`;

line23=`<line x1="200" y1="100" x2="100" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class2.name} and ${class3.name}"/>`;
arrow3To2=`<polygon points="200,100 200,125 175,100" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class2.name}" />`;
arrow2To3=`<polygon points="100,200 100,175 125,200" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class3.name}" />`;

line24=`<line x1="250" y1="100" x2="250" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class2.name} and ${class4.name}"/>`;
arrow4To2=`<polygon points="235,125 265,125 250,100" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class2.name}" />`;
arrow2To4=`<polygon points="235,175 265,175 250,200" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class4.name}" />`;

line34=`<line x1="100" y1="250" x2="200" y2="250" style="stroke-width: 3; stroke:black" title="arrow between ${class3.name} and ${class4.name}"/>`;
arrow3To4=`<polygon points="175,235 175,265 200,250" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class4.name}" />`;
arrow4To3=`<polygon points="125,235 125,265 100,250" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class3.name}" />`;

function generateSvg(){
    getData();
    updateTemplates();
    svgString = addSvg();
    title = getTitle();
    document.getElementById("svgPanel").innerHTML = svgString;
    document.getElementById("downloadSvg").style.display = "inline";
}

function updateTemplates(){
    class1Box=`<rect x="0" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class1.name}"/><text x="5" y="15" fill="black"><a>${class1.name}</a></text>`;
    class2Box=`<rect x="200" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class2.name}"/><text x="205" y="15" fill="black"><a>${class2.name}</a></text>`;
    class3Box=`<rect x="0" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class3.name}"/><text x="5" y="215" fill="black"><a>${class3.name}</a></text>`;
    class4Box=`<rect x="200" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${class4.name}"/><text x="205" y="215" fill="black"><a>${class4.name}</a></text>`;

    line12=`<line x1="100" y1="50" x2="200" y2="50" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class2.name}"/>`;
    arrow1To2=`<polygon points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class2.name}" />`;
    arrow2To1=`<polygon points="125,35 125,65 100,50" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class1.name}" />`;

    line13=`<line x1="50" y1="100" x2="50" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class3.name}"/>`;
    arrow3To1=`<polygon points="35,125 65,125 50,100" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class1.name}" />`;
    arrow1To3=`<polygon points="35,175 65,175 50,200" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class3.name}" />`;

    line14=`<line x1="100" y1="100" x2="200" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class1.name} and ${class4.name}"/>`;
    arrow4To1=`<polygon points="100,100 100,125 125,100" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class1.name}" />`;
    arrow1To4=`<polygon points="200,200 200,175 175,200" style="stroke:black;stroke-width:1" title="arrow from ${class1.name} to ${class4.name}" />`;

    line23=`<line x1="200" y1="100" x2="100" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class2.name} and ${class3.name}"/>`;
    arrow3To2=`<polygon points="200,100 200,125 175,100" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class2.name}" />`;
    arrow2To3=`<polygon points="100,200 100,175 125,200" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class3.name}" />`;

    line24=`<line x1="250" y1="100" x2="250" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${class2.name} and ${class4.name}"/>`;
    arrow4To2=`<polygon points="235,125 265,125 250,100" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class2.name}" />`;
    arrow2To4=`<polygon points="235,175 265,175 250,200" style="stroke:black;stroke-width:1" title="arrow from ${class2.name} to ${class4.name}" />`;

    line34=`<line x1="100" y1="250" x2="200" y2="250" style="stroke-width: 3; stroke:black" title="arrow between ${class3.name} and ${class4.name}"/>`;
    arrow3To4=`<polygon points="175,235 175,265 200,250" style="stroke:black;stroke-width:1" title="arrow from ${class3.name} to ${class4.name}" />`;
    arrow4To3=`<polygon points="125,235 125,265 100,250" style="stroke:black;stroke-width:1" title="arrow from ${class4.name} to ${class3.name}" />`;
}

function getData(){
    class1.included = document.getElementById("class1Include").checked;
    class2.included = document.getElementById("class2Include").checked;
    class3.included = document.getElementById("class3Include").checked;
    class4.included = document.getElementById("class4Include").checked;

    if(class1.included){
        class1.name = document.getElementById("class1Name").value;
        class1.connections.To2 = document.getElementById("class1To2").checked;
        class1.connections.To3 = document.getElementById("class1To3").checked;
        class1.connections.To4 = document.getElementById("class1To4").checked;
    }

    if(class2.included){
        class2.name = document.getElementById("class2Name").value;
        class2.connections.To1 = document.getElementById("class2To1").checked;
        class2.connections.To3 = document.getElementById("class2To3").checked;
        class2.connections.To4 = document.getElementById("class2To4").checked;
    }

    if(class3.included){
        class3.name = document.getElementById("class3Name").value;
        class3.connections.To2 = document.getElementById("class3To2").checked;
        class3.connections.To1 = document.getElementById("class3To1").checked;
        class3.connections.To4 = document.getElementById("class3To4").checked;
    }

    if(class4.included){
        class4.name = document.getElementById("class4Name").value;
        class4.connections.To2 = document.getElementById("class4To2").checked;
        class4.connections.To3 = document.getElementById("class4To3").checked;
        class4.connections.To1 = document.getElementById("class4To1").checked;
    }
}

function addSvg(){
    currentSvg = "";
    if(class1.included){
        currentSvg += class1Box;
        if(class2.included && class1.connections.To2){
            currentSvg += line12 + arrow1To2;
        }
        if(class3.included && class1.connections.To3){
            currentSvg += line13 + arrow1To3;
        }
        if(class4.included && class1.connections.To4){
            currentSvg += line14 + arrow1To4;
        }
    }
    if(class2.included){
        currentSvg += class2Box;
        if(class1.included && class2.connections.To1){
            if(!class1.connections.To2){
                currentSvg += line12;
            }
            currentSvg += arrow2To1;
        }
        if(class3.included && class2.connections.To3){
            currentSvg += line23 + arrow2To3;
        }
        if(class4.included && class2.connections.To4){
            currentSvg += line24 + arrow2To4;
        }
    }
    if(class3.included){
        currentSvg += class3Box;
        if(class1.included && class3.connections.To1){
            if(!class1.connections.To3){
                currentSvg += line13;
            }
            currentSvg += arrow3To1;
        }
        if(class2.included && class3.connections.To2){
            if(!class2.connections.To3){
                currentSvg += line23;
            }
            currentSvg += arrow3To2;
        }
        if(class4.included && class3.connections.To4){
            currentSvg += line34 + arrow3To4;
        }
    }
    if(class4.included){
        currentSvg += class4Box;
        if(class1.included && class4.connections.To1){
            if(!class1.connections.To4){
                currentSvg += line14;
            }
            currentSvg += arrow4To1;
        }
        if(class3.included && class4.connections.To3){
            if(!class3.connections.To4){
                currentSvg += line34;
            }
            currentSvg += arrow4To3;
        }
        if(class2.included && class4.connections.To2){
            if(!class2.connections.To4){
                currentSvg += line24;
            }
            currentSvg += arrow4To2;
        }
    }
    return currentSvg;
}

function getTitle(){
    tempTitle = [];
    if(class1.included){
        tempTitle.push(class1.name);
    }
    if(class2.included){
        tempTitle.push(class2.name);
    }
    if(class3.included){
        tempTitle.push(class3.name);
    }
    if(class4.included){
        tempTitle.push(class4.name);
    }
    return tempTitle.join(', ');
}

function downloadSvg(){

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + '<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" title="UML Diagram with classes: ' + title + '">' + currentSvg + '</svg>');
    element.setAttribute('download', 'uml.svg');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}