---
id: Git-and-GitHub-Basics
title: Git and GitHub Basics
description: A list of git commands I use on a daily basis
---

---

![whyIusegit](/img/docimages/Git/whyIusegit.jpg)

![GitHub](/img/docimages/Git/github.jpg)

## Git Configs

```bash
# Tell git how you are

git config --global user.name jeansn

git config --global user.email jeansn123@gmail.com

git config user.name

```

## How Git works

![repo](/img/docimages/Git/repo.jpg)

![commits](/img/docimages/Git/commits.jpg)

![commits](/img/docimages/Git/commits2.jpg)

## Create a New Git Repository

This creates a .git folder in the root directory that tracks all the changes to the files.

```bash
git init
```

To exclude any files from being tracked you need to add a .gitinore file in the root of you project and add the files or folders that should be excluded.

```bash
# In the file you can add thing like this
node_modules
dist
.cache
```

## Staging Files

![staging1](/img/docimages/Git/staging1.jpg)

```bash
#Check which files are in the staging area
git status
# staged files will be in green

# Add file to staging
git add <path to file>  # git add src\assets\images\Git\github.jpg

# remove file from staging
git rm --cache <path to file>  # git rm --cache src/assets/images/Git/github.jpg

# Add all files to staging at once
git add .
```

## Commiting Files

![commiting](/img/docimages/Git/commiting.jpg)

```bash
# Commiting staged files
git commit -m "created git blog post"

# review commit history
git log

# condenced
git log --oneline
```

## Undoing Things

![undoingThings](/img/docimages/Git/undoingThings.jpg)

```bash
# Checkout commit ( Shows the code at a point in time )
git log --oneline
git checkout 5bb549d
# go back to current
git checkout master

# Revert commit ( Undo commit )
git revert 5bb549d
# to get out of the file
:wq

# Reset commit  ( Remove all commits to a point in time, files become uncommited )
git reset 5bb549d

```

## Branches

![branches](/img/docimages/Git/branches.jpg)

```bash
# create a branch
git branch <name> # git branch feature-1

# list branches
git branch -a

# switch to different branch
git checkout <branch name> # git checkout feature-1

# delete a branch
 git branch -D <branch name> #  git branch -D feature-1

 # create branch and switch to it
 git checkout -b <branch name> # git checkout -b feature-1

```

## Merging Branches

```bash
# first check out the branch where you are merging into
git checkout master

git merge feature-1

```

## GitHub

![github2](/img/docimages/Git/github2.jpg)

## Add remote branch in VSCode ( when remote repository already exists )

```bash
#Start new local repository
git init
git remote add origin https://github.com/user/repo.git
# Set a new remote

git remote -v
# Verify new remote
> origin  https://github.com/user/repo.git (fetch)
> origin  https://github.com/user/repo.git (push)

git pull origin master
```

**_ Remote name already exists_**

## Rename remote

```bash
git remote -v
# View existing remotes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)

git remote rename origin destination
# Change remote name from 'origin' to 'destination'

git remote -v
# Verify remote's new name
> destination  https://github.com/OWNER/REPOSITORY.git (fetch)
> destination  https://github.com/OWNER/REPOSITORY.git (push)
```

## Delete remote

```bash
git remote -v
# View current remotes
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
> destination  https://github.com/FORKER/REPOSITORY.git (fetch)
> destination  https://github.com/FORKER/REPOSITORY.git (push)

git remote rm destination
# Remove remote
git remote -v
# Verify it's gone
> origin  https://github.com/OWNER/REPOSITORY.git (fetch)
> origin  https://github.com/OWNER/REPOSITORY.git (push)
```

## Clone a Repo

```bash
git clone <repo link>
```

## Push Code to Repo

```bash
git push origin master
```

## Pull Code Changes from Remote Repo

```bash
git pull origin master
```

Thanks for reading!
