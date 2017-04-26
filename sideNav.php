<span id="spanNav" style="font-size:20px;position:absolute;top:10px;right:25px;cursor:pointer" onclick="openNav()">
        <img src="img/network/gear.png" alt="" align="left"  style="width:35px;height:35px;"></span>

    <div id="mySidenav" class="sidenav">
        <p class="sidenavTitle" id="title">Customizer (TODO)</p>
        <p class="sidenavTitle" id="sidetitle">Customize your Network prefrences</p>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="line-separator"></div>
        <a href="#">About</a>
        <a href="#">Network Physics</a>
        <a href="#">Other info (TBD)</a>
        <br>
        <input type="button" value="Fork Weight" onclick="sideWeight();" id="nodeSaveButton" />
        <input type="button" value="Delete Tab" onclick="deleteTab();" id="tabDel" />
        <div id="pricing-table" class="clear">
            <div class="plan" id="most-popular">
                <h3>Number of Choices-NoC <span id="choices">NaN</span></h3>
            </div>
            <div class="plan" id="most-popular">
                <h3>Number of Actions-NoA <span id="actions">NaN</span></h3>
            </div>
            <div class="plan" id="most-popular">
                <h3>Number of Ends-NoE   <br></br><span id="ends">NaN</span></h3>
            </div>
        </div>
    </div>