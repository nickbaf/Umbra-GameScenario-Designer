//GLOBAL VARIABLES

var result=[];
var forks=[];
var edges=[];
var nodes=[];
var wForks=[];
var visited=[];
function numberOfMetrics(nodes) {
    var noC=0;
    var noE=0;
    var noA=0;
    var noG=0;
    var i;
    var temp;
    for(i=0;i<nodes.length;i++){
        temp=nodes[i];
        if(temp.type=="Choice"){
            noC++;
        }else if(temp.type=="Good Ending" || temp.type=="Bad Ending"){
            noE++;
        }else if(temp.type=="Narrative"){
            noA++;
        }else if(temp.type=="Goal"){
            noG++;
        }
    }
    return {noC:noC,noE:noE,noA:noA,noG:noG};
}

function aphe(nodes,edges) {
    var apHE=0;
    var total=0;
    var temp;
    var i;
    for(i=0;i<nodes.length;i++){
        temp=nodes[i];
        if(temp.type=="Good Ending"){
            total++;
            apHE+=getDestinationEdges(edges,temp.id);
        }
    }
    apHE=apHE/total;
    //alert(apHE);
    return {apHE:Math.round(apHE*100)/100};
}

function getDestinationEdges(edges,id) {
    var i;
    var r=0;
    for(i=0;i<edges.length;i++){
        if(edges[i].to==id){
            r++;
        }
    }
    return r;
}


function apc(nodes,edges) {
    var apC=0;
    var total=0;
    var temp;
    var i;
    for(i=0;i<nodes.length;i++){
        temp=nodes[i];
        if(temp.type=="Choice"){
            total++;
            apC+=getStartPointEdges(edges,temp.id);
        }
    }
    apC=apC/total;
    //alert(apC);
    return {apC:Math.round(apC*100)/100};
}

function getStartPointEdges(edges,id) {
    var i;
    var r=0;
    for(i=0;i<edges.length;i++){
        if(edges[i].from==id){
            r++;
        }
    }
    return r;
}

function findWeights(theNodes,theEdges){
    edges=theEdges;
    nodes=theNodes;
    var i;
    for(i=0;i<nodes.length;i++){
        if(nodes[i].type=="Choice"){
            forks.push(nodes[i].id);
        }
    }
    alert(forks[0]);
    compute(forks[0]);
    sessionStorage.setItem("forks",JSON.stringify(wForks));
    alert(JSON.stringify(wForks));
    for(i=0;i<wForks.length;i++){
        console.log(wForks[i]);
    }
    alert(wForks.length);
    return wForks;
}
/**
 *
 * @param fork, a choice node
 */
function compute(fork){
    if(exists(fork)==false) {
        var t = getNodeType(fork);
        //console.log(t);
        if (t == "Good Ending" || t == "Bad Ending") {
            // alert("end");
            return {w: 5, type: "ending"};
        } else if (t == "Narrative" || t == "Goal") {
            // alert("narrative or goal");
            return compute(getDestinations(fork)); //narrative or goal have only 1 destination

        } else if (t == "Choice") {
            var r = getDestinations(fork);
            var i;
            var topResult = [];
            var netWeight = -1;
            var flagEnding = false;
            for (i = 0; i < r.length; i++) {
                // alert("compute!!");
                //if(exists(r[i])==false) {
                    topResult.push(compute(r[i]));
                //}
            }

            for(i=0;i<nodes.length;i++){
                if(nodes[i].id==fork){
                    console.log(nodes[i].label+" =="+netWeight);
                    console.log(topResult.length);
                    break;
                }
            }


           // alert(topResult.length);
            for (i = 0; i < topResult.length; i++) {
               // alert(topResult[i]["type"]);
                if (topResult[i]["w"] == 5 && topResult[i]["type"]=="ending") { //fork leads directly to an end.
                    flagEnding = true;
                    netWeight=5;
                }
            }
            for (i = 0; i < topResult.length; i++) {
                if (topResult[i]["w"] == 5 && topResult[i]["type"] == "fork") {
                    if (flagEnding) {
                        netWeight = 4;
                    } else {
                        netWeight = 2;
                    }
                } else if (topResult[i]["w"] == 4 && topResult[i]["type"] == "fork") {
                    if (flagEnding) {
                        netWeight = 3;
                    } else {
                        netWeight = 2;
                    }
                } else if (topResult[i]["w"] == 3 && topResult[i]["type"] == "fork") {
                    if (flagEnding) {
                        netWeight = 3;
                    } else {
                        netWeight = 2;
                    }
                }
                else if (topResult[i]["w"] == 1 && topResult[i]["type"] == "fork") {
                    if (flagEnding) {
                        netWeight = 3;
                    } else {
                        netWeight = 2;
                    }
                }
            }
            if(netWeight==-1){
                netWeight=1;
            }
            if (exists(fork) == false) {
                wForks.push({id: fork, w: netWeight});
            }
            for(i=0;i<nodes.length;i++){
                if(nodes[i].id==fork){
                      console.log(nodes[i].label+" =="+netWeight);
                      console.log("**********");
                      for(var k=0;k<topResult.length;k++){
                          console.log(topResult[k]["w"]+" "+topResult[k]["type"]);
                      }
                      console.log("---------------");
                    break;
                }
            }

            return {w: netWeight, type: "fork"};

        }
    }else{
        console.log("there is"+fork);
        for(i=0;i<wForks.length;i++){
            if(wForks[i]["id"]==fork.toString()){
                return {w:wForks[i]["w"] , type: getNodeType(fork)};
            }
        }
    }


}


function getDestinations(id) {
    var i;
    var r=[];
    for(i=0;i<edges.length;i++){
        if(edges[i].from==id){
            r.push(edges[i].to);
        }
    }
    return r;
}

function getNodeType(id) {
    for(i=0;i<nodes.length;i++){
        if(nodes[i].id==id) {
            return nodes[i].type;
        }
    }
}

function exists(id) {
    var i;
    for(i=0;i<wForks.length;i++){
        if(wForks[i]["id"]==id.toString()){
            return true;
        }
    }
    return false;
}