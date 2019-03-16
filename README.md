# Restart-Final ♺
Mobile &amp; web Application gamifying recycling with 🌟 points 🌟 . React (web) &amp; React Native (mobile) w/ Ruby on Rails Server
ReStart is an mobile application where users take pictures of itens and receive feedback about their recycling status,the specific place to dispose it, item brand and win discount coupons related to that brand. Brands can sign-up on a web platform and create discount coupons to incentive users continuing recycle their products.

Demo Mobile: 
[![Watch the video](https://j.gifs.com/71LjgQ.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/L78MRW.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/ZYVqRE.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/r8Rynk.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/yorQxw.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/VAPgK9.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/JyqGrl.gif)](https://youtu.be/Pkc_TBmWO0A)
[![Watch the video](https://j.gifs.com/gZL1Pl.gif)](https://youtu.be/Pkc_TBmWO0A)


Demo Web:
[![Watch the video](/Demo/WebRestartDemo.gif)](https://youtu.be/yFaRNi4TeVI)

High Level Diagram:
![HighLevelDiagram](/Demo/DiagramHLRestart.png)

ReStart mobile app is built for iOS with front-end frameworks such as:

- ReactJS
- React Native
- Expo [Expo](https://expo.io/)

ReStart web app is built with front-end frameworks such as:

- ReactJS

ReStart back-end is powered by:

- Ruby on Rails v5.2 [Rails Guide](https://guides.rubyonrails.org/v5.2/)
- PostgreSQL v9.5 [PostgreSQL Docs](https://www.postgresql.org/docs/9.5/index.html)

ReStart uses the following AI API's:

-[LogoGrab](https://www.logograb.com/developers)
-[Watson](https://www.ibm.com/watson/developer/)
-[Clarifai](https://clarifai.com/)

## Functionality

1. Users (mobile)

- Users will be able to take pictures of itens from their smartphones
- Pictures will be analysed by LogoGrab, Watson and Clarifai API
- Users will receive logo recognition, type of item, recycling category, correct place to dispose it
- Users will earn points and receive coupons for each item recycled this way if a logo was recognized
- Users can see all their discounts coupons
- Users can see their profile information and submit reviews about their experience
- Users can check how much they are recycling by accessing a monthly graph

2. Brands (web)

- Brands will be able to create accounts
- Brands will be able to create/edit discount coupons
- Brands can check how many coupons they are issuing
- Time messages were creates are displayed beside eache message

## Dependencies

- ReactJS
- React Native
- Expo
- Ruby on Rails
- PostgreSQL

## Getting Started

1. Create an empty folder
3. Install all dependencies for `Restart-Mobile-React-Native` & `Restart-Web-React`folder (run `npm install` command)
4. Install all dependencies for `Restart-Server-Ruby` folder (run `bundle install` command)
5. Install Expo on your local computer [Expo Guide](https://expo.io/learn)
6. Install Expo App on your iPhone [Expo App](https://itunes.apple.com/app/apple-store/id982107779)
7. Run `Restart-Server-Ruby` using `rails s` command
8. Run `Restart-Mobile-React-native` using `expo start` command & `Restart-Web-React` using `npm start`command
9. Follow expo instructions to load your app & local host should open in the browser automatically 


## Original Repositories 

- Mobile [React Native](https://github.com/PointCodeZero/ReStart/tree/master/react-native)
- Web [React](https://github.com/trabnett/ReStart-react-webapp)
- Server [Server](https://github.com/trabnett/ReStart-rails-api-server)

BIG shout out to @PointCodeZero & @trabnett we accomplished so much in >10 days! 
