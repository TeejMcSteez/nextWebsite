---
title: "Rebuilding My Website with React + Next"
date: "2025-03-28"
---
# Webhooks

A friend at my [University](https://www.charlotte.edu/), [Phil](https://pvi.sh) had posted a successful project using webhooks and I was curious what he was using it for.

This led into a long conversation about some frameworks and libraries but also talking about Next.js, I had never used React before a week ago but started playing with it by re-building my Svelte website with it. Then he showed me his website (linked above) and it used React with Next.js and it was a clean and very cool website. 

Since my Svelte website was already hosted on Vercel and Next is made by Vercel so I fully committed to re-writing my website with React+Next instead of Svelte and Vite.

## Learning React

React itself was a bit of a headache but once one becomes React brained it all starts making since (like a good cult), having different UI components are nice especially for things like navbars and footers. Otherwise the syntax took getting used to such as declaring things with state as a value and a setter for that value (I think) when using state and the idea of state and effects in general. Otherwise once you get used to it, it's nice to use.

## Learning React + Next

This was the interesting part as Next has the idea of server and client components while I don't know if this carries to React (I dont think it does) that is a confusing concept to understand. Being able to use a server component as long as one wraps it in a client component which you can pass props to from the server response is a little mind boggling. 

### File Based Routing

I have never built a large app but have used express plenty and have dealt with routing "manually" and file based routing that Svelte and Next use is amazing. Not having to worry about creating an entire listening interface for each route on the frontend on the backend and it working when being done for me is awesome.

### Hooks

I've never actually used a hook with Javascript but the re-usable useScroll function to track window location for my scroll button is beautiful.

## Final Thoughts

It makes you do the right things, but it is learnig an entirely other architecture to right a website. While enjoyable very different from basic html, css, and JS application with a Node server or something. Will have to make a new post or edit this one to see if I truly enjoy it more or not.