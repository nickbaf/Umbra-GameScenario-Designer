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
    var start;
    for(i=0;i<nodes.length;i++){
        if(nodes[i].type=="Start"){
            start=nodes[i].id;
            break;
        }
    }
    for(i=0;i<nodes.length;i++){
        if(getNodeType(getDestinations(start))!="Choice"){
            start=getDestinations(start);
            continue;
        }else{
            start=getDestinations(start);
            break;
        }
    }
    for(i=0;i<nodes.length;i++){
        if(nodes[i].type=="Choice"){
            forks.push(nodes[i].id);
        }
    }
   // alert(forks[0]);
    //compute(forks[0]);
    compute(start);
    sessionStorage.setItem("forks",JSON.stringify(wForks));
   // alert(JSON.stringify(wForks));
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
var checked=[];
function compute(fork,previousNode){
    console.log("begin=="+toLabel(fork));
    if(exists(fork)==false) {
        var t = getNodeType(fork);
        //console.log(t);
        if (t == "Good Ending" || t == "Bad Ending") {
            // alert("end");
            var visit=[];
            visit.push(fork);
            console.log(toLabel(fork)+" is visited");
            checked.push(fork);
            return {w: 5, type: "ending",path:visit};
        } else if (t == "Narrative" || t == "Goal") {
            // alert("narrative or goal");
            //put a try-catch if u find a narrative alone without destination
            var r=getDestinations(fork);
           /* for(var l=0;l<checked.length;l++){
                if (checked[l]==r){

                }
            }*/
            var temp=compute(r,fork); //narrative or goal have only 1 destination
            console.log(getDestinations(fork).length);
            temp["path"].push(fork);
            //console.log(temp);
            console.log(toLabel(fork)+" is visited with path length "+temp["path"].length);
            return temp;

        } else if (t == "Choice") {

            var r = getDestinations(fork);
            var i;
            var topResult = [];
            var netWeight = -1;
            var flagEnding = false;
            for (i = 0; i < r.length; i++) {
                // alert("compute!!");
                //if(exists(r[i])==false) {
                    topResult.push(compute(r[i],null));
                //}
            }



           // alert(topResult.length);
            var visit=[];
            var flag=false;
            var flagFound=false;
            var returned=[];
            console.log("In fork no."+toLabel(fork));
            console.log("evaluating "+topResult.length);

            for (i = 0; i < topResult.length; i++) {
                console.log("path weight=="+topResult[i]["w"]+' type=='+topResult[i]["type"]);
                for(var s=0;s<topResult[i]["path"].length;s++){
                    visit.push(topResult[i]["path"][s]);
                }
                //visit.concat(topResult[i]["path"]);
                if(topResult[i]["returned"]!=null){
                    flag=true;
                    for(var e=0;e<topResult[i]["returned"].length;e++){
                        returned.push(topResult[i]["returned"][e]);
                        console.log("found a return node, new length=="+returned.length);
                    }





                  //  console.log("RETURNEDD FROM "+toLabel(returned));
                }
                if (topResult[i]["w"] == 5 && topResult[i]["type"]=="ending") { //fork leads directly to an end.
                    flagEnding = true;
                    netWeight=5;
                }
            }
            //visit.push(previousNode);
            visit.push(fork);
            //FINDING DUPLICATES
            if (flag){
                var count=0;
                for(var g=0;g<returned.length;g++){
                    console.log(toLabel(fork)+" looking for=="+toLabel(returned[g]));
                    for(var m=0;m<visit.length;m++){
                        // console.log(toLabel(visit[m]));
                        if(visit[m].toString()==returned[g].toString()){
                            count++;
                            console.log("count");
                        }
                    }
                    if(count>1){
                        flag=false;
                        console.log("FOUND"+toLabel(returned[g]));
                        returned.splice(g,1);

                        netWeight=1;
                    }else {
                        flagFound=true;
                    }
                }

            }else{
                flag=true;
            }

            //EVALUATION PROCESS
            if(flag) {
                for (i = 0; i < topResult.length; i++) {
                    if (topResult[i]["w"] == 5 && topResult[i]["type"] == "Choice") {
                        if (flagEnding) {
                            netWeight = 4;
                        } else {
                            netWeight = 2;
                        }
                    } else if (topResult[i]["w"] == 4 /*&& topResult[i]["type"] == "fork"*/) {
                        if (flagEnding) {
                            netWeight = 3;
                        } else {
                            netWeight = 2;
                        }
                    } else if (topResult[i]["w"] == 3 /*&& topResult[i]["type"] == "fork"*/) {
                        console.log("bika");
                        if (flagEnding) {
                            netWeight = 3;
                        } else {
                            netWeight = 2;
                        }
                    } else if (topResult[i]["w"] == 2 /*&& topResult[i]["type"] == "fork"*/) { //TBD
                        if (flagEnding) {
                            netWeight = 3;
                        } else {
                            netWeight = 2;
                        }
                    }
                    else if (topResult[i]["w"] == 1 /*&& topResult[i]["type"] == "fork"*/) {
                        if (flagEnding) {
                            netWeight = 3;
                        } else {
                            netWeight = 2;
                        }
                    }
                }
            }
            if(netWeight==-1){ //will be deleted oncy the changes are implemented
                //alert('FAULT');
               // netWeight=1;
            }



            if (exists(fork) == false) { //maybe this is obsolete
                wForks.push({id: fork, w: netWeight,path:visit});
            }
            for(i=0;i<nodes.length;i++){
                if(nodes[i].id==fork){
                    //  console.log(nodes[i].label+" =="+netWeight);
                     // console.log("**********");
                      for(var k=0;k<topResult.length;k++){
                       //   console.log(topResult[k]["w"]+" "+topResult[k]["type"]);
                      }
                     // console.log("---------------");
                    break;
                }
            }
            console.log(toLabel(fork)+" is visited with path legnth "+visit.length);
            if(returned.length>0){
                console.log("Didn't found two paths to-"+toLabel(returned)+" sending onwards...")
                return {w: netWeight, type: "Choice",path:visit,returned:returned};
            }
            return {w: netWeight, type:"Choice",path:visit};

        }
    }else{
        console.log("the node has been visited..we have a no.1 fork among us "+ toLabel(fork));
        for(i=0;i<wForks.length;i++){
            if(wForks[i]["id"]==fork.toString()){
                //returned is the node that has been visited again
                var temp=[];
                temp.push(fork);
                return {w:wForks[i]["w"] , type: getNodeType(fork),path:wForks[i]["path"],returned:temp};
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

function toLabel(fork) {
    for(i=0;i<nodes.length;i++){
        if(nodes[i].id==fork) {
            return nodes[i].label;
        }
    }
}