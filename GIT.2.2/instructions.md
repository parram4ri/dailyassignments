# Git Day 2 Part 2

## Reminders

To open the terminal - `cmd-shift-s`

To run the tests - `npm test`

## Git Clone

Git has this amazing feature where people can create a repository with a project in it and we can clone down ALL the code to our computer and start using that code and push it up to our own GitHub account.

If we have permissions to the repository that we clone it from we could even change the code to the original repository and start collaborating with others.

We are going to demonstrate how to clone by first going to this link --> https://github.com/joybob22/gitDay2

This is a repository with a text file in it that we are going to clone. To do so click the green button that says 'Clone or download' and go ahead and copy the link.

Now in the bottom left terminal go ahead and type this command:

```
git clone TheURLYouCopiedGoesHere
```

This will clone the repository to our workspace here. Type the following into the terminal:

```
ls
```

You will see that we now have a folder called gitDay2. This is where our text file was saved to. Change your directory to gitDay2 and type ls again and you will see that the text file is there.

```
cd gitDay2 && ls
```

The above command will run both commands.

If we wanted to edit this project(gitDay2) and push it up to our own repository all we would have to do is set our own remote origin that GitHub gives when we create a new repository:

```
git remote add origin aURLGoesHere
```

Anytime we push our code it will then go to our own repository on GitHub.

# Submission
If you cloned the repository the tests will pass.
