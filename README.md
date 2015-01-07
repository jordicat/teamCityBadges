## How to configure it: 

```
{
    "TEAMCITY"   : "{TeamCity_Build_Server}"
}
```
    2. Add that code to the Readme project page:
```
<a href="http://{server_app_path}/{teamCityBuildName_branch}/link" target="_blank">
 ![Build Status](http://{server_app_path}/{teamCityBuildName_branch}/status.png)
</a>
```
![image](https://cloud.githubusercontent.com/assets/8877242/5469979/55bf8f92-85da-11e4-9b6a-ce1645ec00b6.png)

I was modifying this code:
https://github.com/jfromaniello/teamcity-badges

and getting the icons from here:
http://shields.io/


Install the service with nssm:
https://nssm.cc/commands
```
nssm install TCBadge node "{apppath}server.js" {TeamCityUser} {password}
```
