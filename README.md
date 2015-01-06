## How to configure it: 
    1. Add build name to the BuildTypes list
```
{
    "BUILDTYPES" : "EVisionScheduler_Damian,EVisionPnID_Main",
    "AUTH"       : "{userTeamCity}:{password}",
    "TEAMCITY"   : "http://builds.evision.io"
}
```
    2. Add that code to the Readme project page:
```
<a href="http://test.eptw.nl/{teamCityBuildName}/link" target="_blank">
 ![Build Status](http://test.eptw.nl/{teamCityBuildName}/status.png)
</a>
```
<a href="http://test.eptw.nl/EVisionPnID_Main/link" target="_blank">
 ![Build Status](http://test.eptw.nl/EVisionPnID_Main/status.png)
</a>

I was modifying this code:
https://github.com/jfromaniello/teamcity-badges

and getting the icons from here:
http://shields.io/

Check issue https://github.com/eVisionSoftware/eVision.PnID/issues/29

