#Witchypedia :crystal_ball:#

####A project by [Ilaria](https://github.com/ilaria-orlando) and [Steph](https://github.com/Steeeeeph)

##Assignment :page_with_curl:

For our course at BeCode we could make a kingsize group project where we could decide the technology
ourselves. 

> Disclaimer: this project is still very much in development. Before you dive into the live version, check out our list of todo's

##So what is it exactly? :question:
We decided on making a spiritual portal where a visitor can filter different kinds of crystals and herbs according to their healing properties. This accompanied by a digital Book of Shadows or Grimoire app, where visitors can make notes and save them to their profile.

##Main technologies :computer:
We wanted to dive further into React so this was the main technology chosen. Because both crystals and herb collections are extensive we needed something to display the entries without needing to make a page for every entry.
Below you can read about what we used and why.

    
- #####Gatsby
    - Gatsby had a lot of choices in plugins and add ons, which gave us a lot of options
- #####Contentful
    - Served as a way to store all the crystals and herbs, to extract it and dynamicly create pages with gatsby.node
- #####GraphQL
    - Used to query content from Contentful, query data from mongoDB database
- #####MongoDB
    - All the user information is stored in a MongoDB Atlas database
    
####Other resources and technologies

- Scss
- Photoshop & Illustrator (illustrations and artwork by Ilaria)
- Pixabay (images)


##On our To Do list :construction:
Since this is a big project where a lot of research was involved, there are a number of things we still want to add and improve.

####Main focus
- Mobile friendly menu & landing page
- Create a login page
- Ability to edit Grimoire entries
- Add herb collection
- Add search bar
- Make an about/info page
- Refactor code

####Nice to haves
- Lunar and holiday calendar in Grimoire
- Ability to favorite herbs and crystals (when logged in)
- Care and charging info for crystals
- Further styling, icons and page fillers

##Deployment :fireworks:
Our project is deployed on Netlify, with Contentful webhook included. So all the changes will be build automatically.

####Check it out [here](https://witchypedia.netlify.app/)  :star2:
    

    
         