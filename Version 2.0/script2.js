/*Author: Vaibhavi Raut
Email: rr2465@rit.edu
Modification: Use Case Diagram

Modification made for Use Case Diagram.

I tried to commit it to git but I am facing some problem with creating the new repository itself.

Is it okay if I submit here in the dropbox for now?

*/

currentSvg = "";
title = "";

actor = {
    included: false,
    name: "actor",
    connections: {
        To1: false,
        To2: false,
        To3: false,
        To4: false,
        To5: false,
    }
}

frameBox = {
    included: false,
    name: "System",
}

usecase1 = {
    included: false,
    name: "UseCase1",
    connections: {
        In2_1: false,
        In3_1: false,
        In4_1: false,
        In5_1: false,
        Ex2_1: false,
        Ex3_1: false,
        Ex4_1: false,
        Ex5_1: false,
    }
}

usecase2 = {
    included: false,
    name: "UseCase2",
    connections: {
        In1_2: false,
        In3_2: false,
        In4_2: false,
        In5_2: false,
        Ex1_2: false,
        Ex3_2: false,
        Ex4_2: false,
        Ex5_2: false,
    }
}

usecase3 = {
    included: false,
    name: "UseCase3",
    connections: {
        In1: false,
        In2_3: false,
        In4_3: false,
        In5_3: false,
        Ex1_3: false,
        Ex2_3: false,
        Ex4_3: false,
        Ex5_3: false,
    }
}

usecase4 = {
    included: false,
    name: "UseCase4",
    connections: {
        In1_4: false,
        In2_4: false,
        In3_4: false,
        In5_4: false,
        Ex1_4: false,
        Ex2_4: false,
        Ex3_4: false,
        Ex5_4: false,
    }
}

usecase5 = {
    included: false,
    name: "UseCase1",
    connections: {
        In1_5: false,
        In2_5: false,
        In3_5: false,
        In4_5: false,
        Ex1_5: false,
        Ex2_5: false,
        Ex3_5: false,
        Ex3_4: false,
    }
}


//The Elliptical shape of use cases
/*

<input type="checkbox" id="InUc1">Include UseCase1? 
    <input type="checkbox" id="ExUc1">Extend UseCase1?<br>
    <input type="checkbox" id="InUc2">Include UseCase2?
    <input type="checkbox" id="ExUc2">Extend UseCase2?<br>
    <input type="checkbox" id="InUc3">Include UseCase3?
    <input type="checkbox" id="ExUc3">Extend UseCase3?<br>
    <input type="checkbox" id="InUc4">Include UseCase4?
    <input type="checkbox" id="ExUc4">Extend UseCase4?<br>




ac = `<svg>
        <circle cx="60" cy="300" r="20" style="fill: white; stroke:black; stroke-width:1" />
        <polyline points = "60 320, 60 370" style = "fill: black; stroke: black" />

        <g id="hands">
            <line x1="60" y1="330" x2="90" y2="355" style=" fill: black; stroke: black;" />
        </g>
        <use xlink:href="#hands" transform="scale(-1 1) translate(-120 0)"/>

        <g id="legs">
            <use xlink:href="#hands" transform="scale(-1 1) translate(-120 40)"/>    
        </g>
        <use xlink:href="#legs" transform="scale(-1 1) translate(-120 0)"/>
        <text x="45" y="430" fill="black"><a>${actor.name}</a></text>
</svg>`
*/

ac = `<svg>
        <circle cx="60" cy="300" r="20" style="fill: white; stroke:black; stroke-width:1" />
        <polyline points = "60 320, 60 370" style = "fill: black; stroke: black" /> 
        <polyline points = "60 330, 90 335" style = "fill: black; stroke: black" />
        <polyline points = "60 330, 30 336" style = "fill: black; stroke: black" />
        <text x="45" y="390" fill="black"><a>${actor.name}</a></text>
    </svg>`

frameBox = `<rect x="200" y="50" width="500" height="600" style="fill:black; stroke-width: 1; stroke:black" title="${frameBox.name}" /><text x="200" y = "50" fill = "black><a>${frameBox.name}</a></text>`;

/*
uc1 = `<ellipse cx="350" cy="150" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase1.name}" /><text x="5" y="15" fill="black"><a>${usecase1.name}</a></text>`;
uc2 = `<ellipse cx="450" cy="250" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase2.name}" /><text x="5" y="15" fill="black"><a>${usecase2.name}</a></text>`;
uc3 = `<ellipse cx="350" cy="350" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase3.name}" /><text x="5" y="15" fill="black"><a>${usecase3.name}</a></text>`;
uc4 = `<ellipse cx="450" cy="450" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase4.name}" /><text x="450" y="450" fill="black"><a>${usecase4.name}</a></text>`;
uc5 = `<ellipse cx="350" cy="590" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase5.name}" /><text x="350" y="590" fill="black"><a>${usecase5.name}</a></text>`;

lineA1 = `<line x1="60" y1="330" x2="270" y2="150" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase1.name}"/>`;
lineA2 = `<line x1="90" y1="355" x2="370" y2="250" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase2.name}" />`;
lineA3 = `<line x1="90" y1="355" x2="270" y2="350" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase3.name}" />`;
lineA4 = `<line x1="90" y1="355" x2="370" y2="450" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase4.name}" />`;
lineA5 = `<line x1="160" y1="" x2="270" y2="550" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase5.name}" />`;

line4I = `<svg>
            <line x1="490" y1="487" x2="420" y2="570" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title=" base case ${usecase4.name} includes the use case ${usecase5.name}" /><text x="433" y="550" fill = "black"><a><</a><a><</a><a>include</a><a>></a><a>></a></text>
            <polyline points = "420 550 420 570 443 566" style = "fill: none; stroke: black" />
        </svg>`
line4E = `<svg>
            <line x1="380" y1="470" x2="370" y2="550" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title="arrowhead directed from the extending use case ${usecase5.name} to the extended (base) use case ${usecase4.name}"/><text x="310" y="520" fill = "black"><a><</a><a><</a><a>extend</a><a>></a><a>></a></text>
            <polyline points = "363 490 380 470 393 492" style = "fill: none; stroke: black" />
        </svg>`

line5I = `<svg>
            <line x1="490" y1="487" x2="420" y2="570" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title=" base case ${usecase5.name} includes the use case ${usecase4.name}" /><text x="433" y="550" fill = "black"><a><</a><a><</a><a>include</a><a>></a><a>></a></text>
            <polyline points = "420 550 420 570 443 566" style = "fill: none; stroke: black" />
        </svg>`
line5E = `<svg>
            <line x1="380" y1="470" x2="370" y2="550" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title="arrowhead directed from the extending use case ${usecase4.name} to the extended (base) use case ${usecase5.name}"/><text x="310" y="520" fill = "black"><a><</a><a><</a><a>extend</a><a>></a><a>></a></text>
            <polyline points = "363 490 380 470 393 492" style = "fill: none; stroke: black" />
        </svg>`        
*/
/*
line15 = <line x1="430" y1="150" x2="500" y2="220" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" />

line25 = 
line35 =
line45 =
*/

function generateSvg(){
    getData();
    updateTemplates();
    svgString = addSvg();
    title = getTitle();
    document.getElementById("svgPanel").innerHTML = svgString;
    document.getElementById("downloadSvg").style.display = "inline";
}

function getData(){

    actor.included = document.getElementById("actorInclude").checked;
    frameBox.included = document.getElementById("frameBoxInclude").checked;
    usecase1.included = document.getElementById("uc1Include").checked;
    usecase2.included = document.getElementById("uc2Include").checked;
    usecase3.included = document.getElementById("uc3Include").checked;
    usecase4.included = document.getElementById("uc4Include").checked;
    usecase5.included = document.getElementById("uc5Include").checked;

    if(actor.included){
        actor.name = document.getElementById("actorName").value;
        actor.connections.To1 = document.getElementById("auc1").checked;
        actor.connections.To2 = document.getElementById("auc2").checked;
        actor.connections.To3 = document.getElementById("auc3").checked;
        actor.connections.To4 = document.getElementById("auc4").checked;
        actor.connections.To5 = document.getElementById("auc5").checked;
    }

    if (frameBox.included) {
        frameBox.name = document.getElementById("frameBoxName").value;
    }

    if (usecase1.included) {
        usecase1.name = document.getElementById("uc1Name").value;
        usecase5.connections.In2_1 = document.getElementById("1_InUc2").checked;
        usecase5.connections.Ex2_1 = document.getElementById("1_ExUc2").checked;
        usecase5.connections.In3_1 = document.getElementById("1_InUc3").checked;
        usecase5.connections.Ex3_1 = document.getElementById("1_ExUc3").checked;
        usecase5.connections.In4_1 = document.getElementById("1_InUc4").checked;
        usecase5.connections.Ex4_1 = document.getElementById("1_ExUc4").checked;
        usecase5.connections.In5_1 = document.getElementById("1_InUc5").checked;
        usecase5.connections.Ex5_1 = document.getElementById("1_ExUc5").checked;

    }

    if (usecase2.included) {
        usecase2.name = document.getElementById("uc2Name").value;
        usecase5.connections.In1_2 = document.getElementById("2_InUc1").checked;
        usecase5.connections.Ex1_2 = document.getElementById("2_ExUc1").checked;
        usecase5.connections.In3_2 = document.getElementById("2_InUc3").checked;
        usecase5.connections.Ex3_2 = document.getElementById("2_ExUc3").checked;
        usecase5.connections.In4_2 = document.getElementById("2_InUc4").checked;
        usecase5.connections.Ex4_2 = document.getElementById("2_ExUc4").checked;
        usecase5.connections.In5_2 = document.getElementById("2_InUc5").checked;
        usecase5.connections.Ex5_2 = document.getElementById("2_ExUc5").checked;
    }


    if (usecase3.included) {
        usecase3.name = document.getElementById("uc3Name").value;
        usecase5.connections.In1_3 = document.getElementById("3_InUc1").checked;
        usecase5.connections.Ex1_3 = document.getElementById("3_ExUc1").checked;
        usecase5.connections.In2_3 = document.getElementById("3_InUc2").checked;
        usecase5.connections.Ex2_3 = document.getElementById("3_ExUc2").checked;
        usecase5.connections.In4_3 = document.getElementById("3_InUc4").checked;
        usecase5.connections.Ex4_3 = document.getElementById("3_ExUc4").checked;
        usecase5.connections.In5_3 = document.getElementById("3_InUc5").checked;
        usecase5.connections.Ex5_3 = document.getElementById("3_ExUc5").checked;

    }

    if (usecase4.included) {
        usecase4.name = document.getElementById("uc4Name").value;
        usecase5.connections.In1_4 = document.getElementById("4_InUc1").checked;
        usecase5.connections.Ex1_4 = document.getElementById("4_ExUc1").checked;
        usecase5.connections.In2_4 = document.getElementById("4_InUc2").checked;
        usecase5.connections.Ex2_4 = document.getElementById("4_ExUc2").checked;
        usecase5.connections.In3_4 = document.getElementById("4_InUc3").checked;
        usecase5.connections.Ex3_4 = document.getElementById("4_ExUc3").checked;
        usecase5.connections.In5_4 = document.getElementById("4_InUc5").checked;
        usecase5.connections.Ex5_4 = document.getElementById("4_ExUc5").checked;

    }

    if (usecase5.included) {
        usecase5.name = document.getElementById("uc5Name").value;
        usecase5.connections.In1_5 = document.getElementById("5_InUc1").checked;
        usecase5.connections.Ex1_5 = document.getElementById("5_ExUc1").checked;
        usecase5.connections.In2_5 = document.getElementById("5_InUc2").checked;
        usecase5.connections.Ex2_5 = document.getElementById("5_ExUc2").checked;
        usecase5.connections.In3_5 = document.getElementById("5_InUc3").checked;
        usecase5.connections.Ex3_5 = document.getElementById("5_ExUc3").checked;
        usecase5.connections.In4_5 = document.getElementById("5_InUc4").checked;
        usecase5.connections.Ex3_4 = document.getElementById("5_ExUc4").checked;


    }

}//function getData()

function updateTemplates(){
    
    frameBox = `<rect x="200" y="50" width="500" height="600" style= "fill:none; stroke:black; stroke-width: 3;" title="system ${frameBox.name}" /><text x="200" y = "50" fill = "black><a>${frameBox.name}</a></text>`;

    uc1 = `<ellipse cx="350" cy="150" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase1.name}" /><text x="350" y="150" fill="black"><a>${usecase1.name}</a></text>`;
    uc2 = `<ellipse cx="450" cy="250" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase2.name}" /><text x="450" y="250" fill="black"><a>${usecase2.name}</a></text>`;
    uc3 = `<ellipse cx="350" cy="350" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase3.name}" /><text x="350" y="350" fill="black"><a>${usecase3.name}</a></text>`;
    uc4 = `<ellipse cx="450" cy="450" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase4.name}" /><text x="450" y="450" fill="black"><a>${usecase4.name}</a></text>`;
    uc5 = `<ellipse cx="350" cy="590" rx="80" ry="40" style = "fill: white; stroke: black; stroke-width: 1" title="${usecase5.name}" /><text x="350" y="590" fill="black"><a>${usecase5.name}</a></text>`;

    lineA1 = `<line x1="90" y1="355" x2="270" y2="150" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase1.name}"/>`;
    lineA2 = `<line x1="90" y1="355" x2="370" y2="250" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase2.name}" />`;
    lineA3 = `<line x1="90" y1="355" x2="270" y2="350" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase3.name}" />`;
    lineA4 = `<line x1="90" y1="355" x2="370" y2="450" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase4.name}" />`;
    lineA5 = `<line x1="90" y1="355" x2="280" y2="570" style="stroke-width: 1; stroke:black" title="association between ${actor.name} and ${usecase5.name}" />`;

    line4I = `<svg>
                <line x1="490" y1="487" x2="420" y2="570" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title=" base case ${usecase4.name} includes the use case ${usecase5.name}" /><text x="433" y="550" fill = "black"><a><</a><a><</a><a>include</a><a>></a><a>></a></text>
                <polyline points = "420 550 420 570 443 566" style = "fill: none; stroke: black" />
            </svg>`
    line4E = `<svg>
                <line x1="380" y1="470" x2="370" y2="550" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title="arrowhead directed from the extending use case ${usecase5.name} to the extended (base) use case ${usecase4.name}"/><text x="310" y="520" fill = "black"><a><</a><a><</a><a>extend</a><a>></a><a>></a></text>
                <polyline points = "363 490 380 470 393 492" style = "fill: none; stroke: black" />
            </svg>`

    line5I = `<svg>
                <line x1="490" y1="487" x2="420" y2="570" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title=" base case ${usecase5.name} includes the use case ${usecase4.name}" /><text x="433" y="550" fill = "black"><a><</a><a><</a><a>include</a><a>></a><a>></a></text>
                <polyline points = "420 550 420 570 443 566" style = "fill: none; stroke: black" />
            </svg>`
    line5E = `<svg>
                <line x1="380" y1="470" x2="370" y2="550" style="fill: none; stroke-width:1; stroke:black; stroke-dasharray: 10" title="arrowhead directed from the extending use case ${usecase4.name} to the extended (base) use case ${usecase5.name}"/><text x="310" y="520" fill = "black"><a><</a><a><</a><a>extend</a><a>></a><a>></a></text>
                <polyline points = "363 490 380 470 393 492" style = "fill: none; stroke: black" />
            </svg>`
}


function addSvg(){
    currentSvg = "";
    if (actor.included) {
        currentSvg += ac;
    }
    if (frameBox.included) {
        currentSvg += frameBox;
    }

    if (usecase1.included) {
        currentSvg += uc1;
        if (actor.connections.To1) {
            currentSvg += lineA1;
        }
    }

    if (usecase2.included) {
        currentSvg += uc2;
        if (actor.connections.To2) {
            currentSvg += lineA2;
        }
    }

    if (usecase3.included) {
        currentSvg += uc3;
        if (actor.connections.To3) {
            currentSvg += lineA3;
        }
    }

    if (usecase4.included) {
        currentSvg += uc4;
        if (actor.connections.To4) {
            currentSvg += lineA4;
        }
        /*if (usecase5.included && usecase4.connections.In5_4) {
            currentSvg += line4I;
        }
        if (usecase5.included && usecase4.connections.Ex5_4) {
            currentSvg += line4E;
        }*/
    }

    if (usecase5.included) {
        currentSvg += uc5;
        if (actor.connections.To5) {
            currentSvg += lineA5;
        }
        if (usecase4.included && usecase5.connections.In4_5) {
            currentSvg += line5I;
        }
        if (usecase4.included && usecase5.connections.Ex3_4) {
            currentSvg += line5E;
        }
    }

    return currentSvg;
}

function getTitle(){
    tempTitle = [];
    if (actor.included) {
        tempTitle.push(actor.name);
    }
    if (frameBox.included) {
        tempTitle.push(frameBox.name);
    }
    if (usecase1.included) {
        tempTitle.push(usecase1.name);
    }
    if (usecase2.included) {
        tempTitle.push(usecase2.name);
    }
    if (usecase3.included) {
        tempTitle.push(usecase3.name);
    }
    if (usecase4.included) {
        tempTitle.push(usecase4.name);
    }
    if (usecase5.included) {
        tempTitle.push(usecase5.name);
    }
    return tempTitle.join(',');
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