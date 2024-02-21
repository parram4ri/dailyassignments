# Git Day 2 Pt. 1

## Reminder

How to open the terminal - `cmd-shift-s`

How to run the tests - `npm test`

## Review

Remember the basic git flow? This will be something you use ALL THE TIME. Lets review it to make sure you have it down.

Follow along in the terminal.

To initialize a git repository run:

```
git init
```

After running that command run the config commands:

```
git config --global user.name "test"
git config --global user.email "test@test.com"
```

Run git status to see we now have untracked files to be added to the staging area. Now run:

```
git add .
```

Which will add our files to the staging area. Run git status again to see that our files have been staged. Now make a commit:

```
git commit -m "initial commit"
```

Now at this point since it is our first time pushing this code up to GitHub we would have to add the origin then push up our code. We won't be doing that for this example but this is what it would look like:

```
git remote add origin https://someurl.git
git push -u origin master
```

Then from now on we would only need to use:

```
git push
```

to push up our code to GitHub.

## Submission

After following the steps the tests will pass.