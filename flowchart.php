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
<?php include("sideNavStory.php") ?>





<div id="storychart"></div>


<?php include("about.php") ?>
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
            <td>Narrative Phase:</td>
            <td id="propertyPhase">type</td>
        </tr>
        <tr>
            <td>Info:</td>
            <td id="propertyInfo">info</td>
        </tr>


    </table>


</div>
    </body>

</html>
