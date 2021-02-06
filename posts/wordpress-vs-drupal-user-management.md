---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "WordPress VS Drupal User Management"
date: "2009-05-11"
categories: 
  - "articles"
---

Having the ability to create different users and give each a different role is one of the most important things within a CMS, you need to be able to control all aspects of the site (super users) and also give other users the ability to control display or content within the site without breaking it.

In our CMS test I will have 6 type of users.

1. Super Administrator:
Responsible for all the aspects of the site, create/delete/edit/publish/unpublish content, change themes and create or edit other users2. Site Administrator:
Responsible for create/delete/edit/publish/unpublish any content from the site, change themes, create or edit other users but is not able to change the layout of the site.3. Author:
Creates/edits/publish/unpublish own content.4. Editor:
Creates/edits own content but can't publish the content, they notify the Site Administrator to do so.5. Subscriber:
Receives notifications when site content changes and is able to comment on content if content is enabled to receive content.6. Visitor:
Access to all content that is published but is not able to edit any part of the site

WordPress and Drupal do a good job in allowing you to create different kind of users and this is where we start to see some separation between the two systems and this might be one of the main reasons why you may choose one after the other but lets see them in detail:

## WordPress:

WordPress comes with 5 predefined roles (or user types) and one user, WordPress has a page that explain the roles in great detail but lets see their "Summary of Roles"

- Administrator - Somebody who has access to all the administration features
- Editor - Somebody who can publish posts, manage posts as well as manage other people's posts, etc.
- Author - Somebody who can publish and manage their own posts
- Contributor - Somebody who can write and manage their posts but not publish posts
- Subscriber - Somebody who can read comments/comment/receive news letters, etc.

This is great specially when you are starting and you want to create your content and define users rather quickly. In the default installation since I was the one installing the software I was automatically added as a site Administrator.

![Wordpress_Users_Default](images/3522573954_465e168e70.jpg)

I went ahead and created the different users that we need and with WordPress was a breeze since the roles were already defined as an option.

![Wordpress_Users_Added](images/3522635770_2216323204.jpg)

There was one major issue with the default set up and that is the Administrator role could not be edited in a way that the role was not able to edit the layout of the site. So I still wanted the site administrator to have full control of the site content and users but not to have control of the layout. I am sure I could go into the database and alter this setting by creating a new role and applying new rules but for this experiment I am not going to go that far. I went ahead and did a quick search in Google for a plugin or similar that would allow me to create custom roles and there were about 21,500,000 results on my search (wordpress+custom+roles), so it seems to be some sort of demand for the feature.

## Drupal:

Drupal has 2 predefined roles and one user each of the roles are explained within the role's page:

- Anonymous user: this role is used for users that don't have a user account or that are not authenticated.
- Authenticated user: this role is automatically granted to all logged in users.

Here is where we start to see a small gap between WordPress and Drupal. Drupal allows you to create custom roles where you can define and alter the different access levels for the users. Drupal starts to show some "muscle" here by giving you different categories for User Management, such as Access rules, Permissions and User settings.

![Drupal_Users_Roles](images/3522790752_fc70c60acd.jpg)  
![Drupal_Users_Default](images/3521983815_647c13c7ab.jpg)

Creating roles has a lot of advantages because you can customize exactly what each user is allowed to see and do, but also you are responsible for what you allow the user to do. It is a good idea to create test accounts that will allow you to see what the new role will be able to access.

![Drupal_Users_Roles_Edited](images/3522823642_7f969ef85c.jpg)

One more benefit for Drupal users is that you can customize the different emails that the user is going to recieve when new accounts are created, forgot password, no approval required, awaiting approval, blocked email and deleted email. For many of us this might not seem like a huge benefit but if your CMS is going to have your (or your client's) personality, it is great to see that you can customize these type of details.

If the administrator creates a new account you have an option to notify to the user of their new account, WordPress doesn't have this option.

![Drupal_Users_Added](images/3522848674_3719a06c91.jpg)

We can see how both systems have their own way of handling user management and it is evident that when it comes down to a robust CMS where you need detailed user management Drupal gives you the flexibility you need. WordPress is the "out-of-the-box" solution that allows you to create predefined users, in a blogging environment this is perfect but for a more complex setup you will need to rely on plugins or hack the software directly.

to be continued (templates)
