<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="SideMenu.css">
    <link rel="stylesheet" type="text/css" href="bootstrap.css">
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Source+Sans+Pro:400i" rel="stylesheet">
    <script src="jquery-3.2.0.min.js"></script>
    <script type="text/javascript" src="coreApp.js"></script>
    <script type="text/javascript" src="tabManagment.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-Side menu icons-->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="img/network/favicon.png"/>
    <title>Untitled Thesis App</title>


</head>
<body onload="">
<?php include("menu.php") ?>


<!-- HOME SCREEN ASSETS -->


<table id="theTable">
    <tr>
        <td>
<table class="metricTable" style="margin:auto;">
    <tr>
        <th class="bigone">Re-playability</th>
    </tr>
    <tr>
        <td >Number of Choices- NoC</td>
        <td>NaN</td>
    </tr>
    <tr>
        <td >Number of Ends- NoE</td>
        <td>NaN</td>
    </tr>
</table>
        </td>
        <td>
<table class="metricTable" style="margin:auto;">
    <tr>
        <th class="bigone">Interactivity</th>
    </tr>
    <tr>
        <td >Number of Importand Choices- NIC</td>
        <td>NaN</td>
    </tr>
    <tr>
        <td >Average Choice Importance- ACI</td>
        <td>NaN</td>
    </tr>
    <tr>
        <td >Average Paths after Importand Choices -APIC</td>
        <td>NaN</td>
    </tr>
</table>
        </td>
        <td>
            <table class="metricTable" style="margin:auto;">
                <tr>
                    <th class="bigone">Characters' Interaction</th>
                </tr>
                <tr>
                    <td >Characters Coupling Factor- CCF</td>
                    <td>NaN</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table class="metricTable" style="margin:auto;">
                <tr>
                    <th class="bigone">Content</th>
                </tr>
                <tr>
                    <td >Number of Actions- NoA</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Number of Choices- NoC</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Number of Goals- NoG</td>
                    <td>NaN</td>
                </tr>
            </table>
        </td>
        <td>
            <table class="metricTable" style="margin:auto;">
                <tr>
                    <th class="bigone">Achieved Duriosity</th>
                </tr>
                <tr>
                    <td >Number of Choices- NoC</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Number of Ends- NoE</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Average Paths to Happy Endings- APHE</td>
                    <td>NaN</td>
                </tr>
            </table>
        </td>
        <td>
            <table class="metricTable" style="margin:auto;">
                <tr>
                    <th class="bigone">Achieved Duriosity</th>
                </tr>
                <tr>
                    <td >Number of Choices- NoC</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Number of Ends- NoE</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Average Paths to Happy Endings- APHE</td>
                    <td>NaN</td>
                </tr>
            </table>
        </td>
        <td>
            <table class="metricTable" style="margin:auto;">
                <tr>
                    <th class="bigone">Desirability</th>
                </tr>
                <tr>
                    <td >Number of Actions- NoA</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Average Paths after Choices- APC</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td >Average Distance Between Choices- ADbC</td>
                    <td>NaN</td>
                </tr>
            </table>
        </td>


    </tr>
</table>

<h2 id="metricsTitle">Metrics about story ταδε..</h2>



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
<footer>
    <p>Made by: <br> Nick Baf (Bafatakis)</p>
    <!--p>Made with <img src="img/network/heart.png" alt="love"  style="width:15px;height:15px;"> by:<br> Nick Baf(Bafatakis) in SKG.</p-->
</footer>
</body>
</html>
