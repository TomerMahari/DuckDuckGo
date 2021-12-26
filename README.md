# Duck Duck Go Search Engine 
## ASP.Net Core BE, Angular 7 FE
### The challenge
Creating a server-side Api with **DotNet-Core**, implementing DiP, IoC and DI with the challenge of learning Core technology.
FrontEnd **Angular 7** with **Bootsrap 4**, including in it all the client-side ability, from 2way-Binding too pipe filters and Emitters.
## Installation && Run
- clone the project
- open **DuckDuckGo/DuckDuckGoApp** in the terminal
- run **'npm i'** command 


## Development server
- open **DuckDuckGo/DuckDuckGoAPI**  in the terminal
- run `dotnet run` command
- open **DuckDuckGo/DuckDuckGoApp** in the terminal
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### What this site do:
DuckDuckGo is a SPA of search engine.
Giving the user the option Searching (while save seach history), 
adding features like 'fine in text' and re-search old search queries.

![image](https://user-images.githubusercontent.com/37840748/147342291-b719adfb-68ed-4fa4-8fea-94fa4b0fe846.png)

# Code view
## DotNet.Core 
### Main code issues
##### Server-Side info
<code>interface ISearchEngineRepo </code> holds the logic and the connection to the data from 'DuckDuckGo' api.
<code>SearchEngineRepo</code> implements the **interface ISearchEngineRepo** for IoC and DIP principle usage.
**StartUp.cs** DIP:
![image](https://user-images.githubusercontent.com/37840748/147343823-85b2a9c3-64ad-4747-a6b2-ac2b18aa6bd6.png)

**SearchEngineController.cs** on the ctor we will inject instance of the ISearchEngineRepo
![image](https://user-images.githubusercontent.com/37840748/147344013-300148d6-4510-4678-adc9-f77c3c3a15e7.png)

for viewing the existing endpoints on the controller you can visit  http://localhost:5001/swagger/index.html
##### Client-Side info
App.component template contains, a search input. 
On search query running, few steps is made:
- Updating the Search-History on client side.
- duckService search function (HttpCall) is running.
When a valid respone returns, we update Array<RelatedTopic> app.component.ts
**ngIf on the Array<RelatedTopic> creates list of content.component filtering null response with remove-null.pipe and enable Pagination when relevant:
![image](https://user-images.githubusercontent.com/37840748/147345177-876e3739-ebad-4f96-9f1c-9ff5d38c5c59.png)
          
On loading, we run a HttpGet request, to retrive all Search-History.
Search-History is displayed on the Sidebar, with the option of re-search previous search, using EventEmitter<any> to update parent comp.
          
![image](https://user-images.githubusercontent.com/37840748/147345498-b9bb6963-0422-499a-a067-257c3c40adbf.png)

Last feature, Find input - Highlighting the entered chart on the current results.



## APP Structure (relevant files to view)
          DuckDuckGo/                                                                                                
          ├── DuckDuckGoAPI/                                                                        
          │   ├── Controllers.cs                                                                                                            
          │   │   └── SearchEngineController.cs                                                                                                            
          │   ├── Data                                                                                                                                    
          │   │   ├── ISearchEngineRepo.cs                                                                                                            
          │   │   └── SearchEngineRepo.cs                                                                                                            
          │   └──  Startup.cs                                                                                                            
          ├                                                                                                            
          └── DuckDuckGoApp/                                                                                                            
            ├── styles.css                                                                                                            
            ├── index.html                                                                                                            
            └── src/app/                                                                                                            
                ├── content                                                                                                            
                │    ├── content.component.ts                                                                                                            
                │    └── content.component.html                                                                                                            
                ├── related-topics                                                                                                            
                │    └── related-topics.component.ts                                                                                                            
                ├── sidebar                                                                                                            
                │    ├── sidebar.component.html                                                                                                            
                │    └── sidebar.component.ts                                                                                                            
                ├── app.component.html                                                                                                            
                ├── app.component.ts                                                                                                            
                ├── app.module.ts                                                                                                            
                ├── duck.service.ts                                                                                                            
                └── remove-null.pipe.ts                                                                                                            


