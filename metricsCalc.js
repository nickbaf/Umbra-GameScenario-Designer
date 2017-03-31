/**
 * Created by Baf on 30/3/17.
 */



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
