<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Source+Sans+Pro:400i" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" type="text/css" href="SideMenu.css">
        <link rel="stylesheet" type="text/css" href="bootstrap.css">
    <link rel="shortcut icon" type="image/png" href="img/network/favicon.png"/>
        <title>New Web Project</title>



        <script type="text/javascript" src="vis.js"></script>
        <script src="jquery-3.2.0.min.js"></script>
        <script type="text/javascript" src="coreApp.js"></script>
    <script type="text/javascript" src="metricsCalc.js"></script>
        <script type="text/javascript" src="tabManagment.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link href="vis-network.min.css" rel="stylesheet" type="text/css" />
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">



</head>
<body onload="init('story');">
<?php
include("menu.php") ?>


<div id="node-popUp">
            <span id="nodeOperation">node</span>
            <br>
            <table style="margin:auto;">
                <tr>
                    <td>id</td><td>
                    <input id="node-id" disabled="true" value="new value" />
                </td>
                </tr>
                <tr>
                    <td>label</td><td>
                    <input id="node-label" value="new value" />
                </td>
                </tr>
                <tr>
                    <td>Node type</td><td>
                    <select id="node-type">
                        <option value="Start">Start</option>
                        <option value="Narrative">Narrative</option>
                        <option value="Goal">Goal</option>
                        <option value="Choice">Choice</option>
                        <option value="Good Ending">Good Ending</option>
                        <option value="Bad Ending">Bad Ending</option>
                    </select>
                </td>
                </tr>
                <tr>
                    <td>Other Info:</td>
                    <td>
                    <textarea id="node-info" style="resize: none" cols="20" rows="2" value="" /></textarea>
                    </td>
                </tr>
                <tr><td>Fixed Node:</td><td><input type="checkbox" id="nodeFix"  checked><br></td></tr>

            </table>
            <input type="button" value="save" id="nodeSaveButton" />
            <input type="button" value="cancel" id="nodeCancelButton" />
        </div>
<div id="edge-popUp">
            <span id="edgeOperation">edge</span>
            <br>
            <table style="margin:auto;">
                <tr>
                    <td>id</td><td>
                    <input id="edge-id" disabled="true" value="new value"/>
                </td>
                </tr>
                <tr>
                    <td>label</td><td>
                    <input id="edge-label" value="" />
                </td>
                </tr>
            </table>
            <input type="button" value="save" id="edgeSaveButton" />
            <input type="button" value="cancel" id="edgeCancelButton" />
        </div>


<div id="storychart"></div>

<?php include("sideNav.php") ?>

    <div class="namesPane" id="newCharPane">
        <span>New Character Model Name</span>
        <br>
        <table style="margin: auto">
            <tr><td> <input id="cname" type="text" name="name" value="New Project"></td></tr>

        </table>
        <input type="button" value="save" onclick="insertCharName('save');" id="CnodeSaveButton" />
        <input type="button" value="cancel" onclick="insertCharName('cancel');" id="CnodeCancelButton" />
    </div>
    <div class="namesPane" id="newStoryPane">
        <span>New Story Flow Chart Name</span>
        <br>
        <table style="margin: auto">
            <tr><td> <input id="sfname" type="text" name="name" value="New Project"></td></tr>

        </table>
        <input type="button" value="save" onclick="insertFlowName('save');" id="sFnodeSaveButton" />
        <input type="button" value="cancel" onclick="insertFlowName('cancel');" id="sFnodeCancelButton" />
    </div>
<div id="fileClose"  style="display:none" onclick="closeInfo()"><img  src="img/network/fileclose.png" alt="" align="bottom" style="width:38px;height:39px;"></div>
<div id="properties" style="display: none">

    <span>Node Properties</span>
    <br>

    <table style="margin:auto;">
        <tr>
            <td>ID:</td>
            <td id="propertyID">id</td>
        </tr>
        <tr>
            <td>Node Type:</td>
            <td id="propertyType">type</td>
        </tr>
        <tr>
            <td>Info:</td>
            <td id="propertyInfo">info</td>
        </tr>


    </table>


</div>
    </body>

</html>
