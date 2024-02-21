# Git Branching

Branching is a great tool to use! Especially when we have a product pushed up to GitHub that people use regularly. If we wanted to make changes we would make a branch so we don't effect the code everyone else is using. Once we are done making our changes we can merge our changes to the master branch which is where the code is that everyone uses. Lets see how this works.

Go ahead and run the following commands which is cloning a repository with a file in it called about.txt.

```
git clone https://github.com/joybob22/gitDay2.git
git config --global user.name "test"
git config --global user.email "test@test.com"
```

Go ahead and change your directy into gitDay2:

```
cd gitDay2
```

Then type `ls` to see that we have an about.txt file in this directory that we just cloned. Now run this command:

```
git branch
```

This is the command to see what branches there are. When you run the command you will get this output:

`* master`

We see that we have one branch which is master and there is a star next to it meaning that is the current branch that we are on.

Now lets create our own branch and switch to it. This can be done in one command:

```
git checkout -b newBranch
```

After running this command lets see our new branch:

```
git branch
```

After running this command we see that there are two branches now! There is the master branch and our newBranch we just created. There is a * by newBranch telling us that we are currently on newBranch.

Lets make some changes on our newBranch. Go ahead and create two files names index.html and main.css

Run a git status to see we now have those untracked files. Lets track them:

```
git add .
```

Then commit them:

```
git commit -m "created index.html and main.css"
```

Now I want you to see the differences between our two branches. Run the following:

```
git checkout master
```

This will switch us two our master branch. Now run `ls`. Notice we only have about.txt now. The other two files you made are gone! This is because they are on our newBranch! Lets merge our changes. It is smart to first merge changes onto our newBranch then to master just incase if there are any merge conflicts. Lets switch back to newBranch.

```
git checkout newBranch
```

Now run the following to merge any changes from master onto our current branch:

```
git merge master
```

We get the output `Already up to date`. This is good. Switch back to our master branch `git checkout master` then run:

```
git merge newBranch
```

We see that our data is merged. Lets check just to make sure by running `ls`.
We see all of our files we made so we are good!

After merging our branch onto master it is decided we no longer want our newBranch to keep our working tree clean. Lets delete it:

```
git branch -d newBranch
```

Now when we run git branch to see our branches we will see we only have one branch which is the master branch.

## Submission
If you followed along the tests will pass.