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
![image](https://cloud.githubusercontent.com/assets/8877242/5469979/55bf8f92-85da-11e4-9b6a-ce1645ec00b6.png)

I was modifying this code:
https://github.com/jfromaniello/teamcity-badges

and getting the icons from here:
http://shields.io/

Check issue https://github.com/eVisionSoftware/eVision.PnID/issues/29

