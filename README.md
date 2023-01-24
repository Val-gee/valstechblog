# 14 Challenge: The Tech Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

I was assigned to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deployed it to Heroku. My app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

The following demonstrates a screenshot of the deployed application:

![The Tech Blog](./Assets/Screenshot%202023-01-24%20at%209.08.19%20AM.png) 

## Links

Unfortunately, I have some major issues when deploying this application to Heroku. Professor Han gave me a couple of links to try and troubleshoot the issue but I had no luck in figuring it out. I did submit a ticket through Heroku to see if they could help me figure it out so i can re-submit in the fututre. I decided to deploy the website to GitHub and provide both links to show my effort.

Link to GitHub Deployed webpage: [GitHub Application Link]()

Link to broken Hroku Site: [Broken Heroku Application Link](https://git.heroku.com/cooltechblog.git)

This is the error code I see in Heroku Logs after application failes to load:
2023-01-24T14:05:53.593006+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=cooltechblog.herokuapp.com request_id=d5c65271-c57f-4d4f-9c06-6da548f2def4 fwd="68.196.246.20" dyno= connect= service= status=503 bytes= protocol=https
2023-01-24T14:05:53.864355+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=cooltechblog.herokuapp.com request_id=641ddb82-d676-4ca5-910d-7b3cfe0b1aca fwd="68.196.246.20" dyno= connect= service= status=503 bytes= protocol=https
2023-01-24T14:06:45.337204+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=cooltechblog.herokuapp.com request_id=efeef989-fb1b-45bd-916f-8ebaffc6f152 fwd="68.196.246.20" dyno= connect= service= status=503 bytes= protocol=https
2023-01-24T14:06:45.614314+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/favicon.ico" host=cooltechblog.herokuapp.com request_id=9a079b96-8672-400f-b667-95ded78e8e37 fwd="68.196.246.20" dyno= connect= service= status=503 bytes= protocol=https


---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
