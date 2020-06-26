# Cherry URL Shortener ✂️
Red, Cherry 🍒 Themed Web Service for Shortening urls

# How it works ❓
For example: we have our inital link which we need to short - ```github.com``` <br>
And we have our domen which is for instance - ```short.me``` <br>
We generate a unique token for our URL and save it into DB. In my case i used [shortid](https://www.npmjs.com/package/shortid) library to generate it for me <br>
And we get a token - ```1kDdvurHW```. Then we have to hookup this token to our domen <br>
After this we compose our short URL by adding token after domen - ```short.me/1kDdvurHW``` <br>
If URL is in DB we return it to user, Else we just create a new one by assembling our ```domen``` and ```token``` together.<br>
Finally when user enters this URL we redirect him to our initial site by checking the token from the DB and comparing it to our URL.  ```short.me/1kDdvurHW  ->  github.com``` <br>
So our DB Schema has URL collection which contains: ```Full URL, URL Token, Short URL``` <br>
And we store our Full URL together with unique URL Token

# Technologies 🧾
* Node.js 
  * koa
  * shortid
  * mongoose
* Tailwind CSS

# Preview 🔍
<img src="https://i.imgur.com/O1of7X4.png"> 
<img src="https://i.imgur.com/eM9B8jQ.png">

# Quick Start 🚀
```git clone https://github.com/irevenko/url-shortener.git``` <br>
```cd url-shortener``` <br>
```npm install``` <br>
```touch .env (Add your variables)``` <br>
```npm start```

# What I Learned 🧠
* koa, koa-router, koa-bodyparser
* ejs Engine
* MongoDB

# ToDo
* Deploy
* Update Front-End

# License 📑 
(c) 2020 Ilya Revenko. [MIT License](https://tldrlegal.com/license/mit-license)