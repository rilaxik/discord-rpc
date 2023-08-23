## Custom discord activity
_example below or ([link](https://i.imgur.com/iUmd3tE.png))_

![activity example](https://i.imgur.com/iUmd3tE.png "activity example")

### [requires NodeJS](https://nodejs.org/en)

### faq
1. clone repository into any local folder
   - qwrqrw
3. install packages using ``npm i``
   - open cmd and navigate to your local folder ([guide](https://www.geeksforgeeks.org/cd-cmd-command/)), run ``npm i`` command there
4. head to [Discord Dev Portal](https://discord.com/developers/applications) create or open an application and grab client id in OAuth2 section
5. open CONFIG.json file and insert your client id in corresponding field
6. change other desired fields in CONFIG.json
   - go back to [Discord Dev Portal](https://discord.com/developers/applications), open your application and go to Rich Presence > Visualizer for more details
7. run ``rpc.bat`` directly or create a shortcut for it. make sure not to move original .bat file

### notes
 - title of your rpc is an application name on [Discord Dev Portal](https://discord.com/developers/applications)
 - while repo is not archive feel free to do pull requests or forks <3
