---
layout: post
image: img/writing.jpg
author: [Helmut]
tags:
  - Migration
exc: Work In Progress Migration
title: "How do you install Vim plugins? - Wikianswers - Find and edit the best answers. How to? What? Is it? Can I? Where is?"
date: "2011-05-07"
categories: 
  - "as-burst"
---

> - The "plugin" directory is for plugins that should always be loaded whenever Vim starts. These define global commands, interface tweaks, or new functionality useful for all or many file types.
> - The "ftplugin" directory is for filetype-specific plugins, such as autocompletion or highlight-errors-as-you-edit plugins.
> - The "syntax" directory is for updated syntax highlighting rules specific to a file type.
> - The "indent" directory is for filetype-specific indentation rules.
> - The "ftdetect" directory is for filetype-detection rules. Files that go here should usually do nothing but set the filetype so that files in the ftplugin, indent, or syntax directories are loaded for a new filetype.
> - The "colors" directory is for color scheme files.
> - The "doc" directory is for any help file documentation.
> - The "after" directory contains another tree with directories like "plugin", "ftplugin", and "syntax" that can be used to override settings in the system-wide settings or other plugins placed in the normal version of these directories. These files will always be loaded after their counterparts in other directories.

via [answers.wikia.com](http://answers.wikia.com/wiki/How_do_you_install_Vim_plugins)

All about the VIM Folder structure
