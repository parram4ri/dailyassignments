# Command Line Day 1 Part 1
## Introduction to repl.it
Welcome to the repl.it assignments! In each assignment there will be a file called `instructions.md` where you will find the instructions for that specific assignment.

To the right you will see the console. Please keep in mind this **is not the terminal.** You may be tempted to try out the commands you just learned in this console but they will not work!

Instead it is important that for every single assignment you open up the terminal using `cmd+shift+s` if you are on a mac or `ctrl+shift+s` if you are running windows.

Once you have done this you should have a terminal pop up in the bottom right hand side of your screen. Here you can test out ALL the commands you have learned today!

## Print Working Directory - pwd
Very first thing you are going to learn is how to see what directory you are currently in. 

Go ahead and type `pwd` and then press enter.

The output in the bottom terminal should be --> `/home/runner/Command-Line-Day-1-Pt-1`

This tells you that you are in the 'Command-Line-Day-1-Pt-1' directory which is in the 'runner' directory which is in the 'home' directory.
*Note: The words `directory` and `folder` are interchangeable and mean the same thing. In this example it could also be said that you are in theCommand-Line-Day-1-Pt-1 folder which is in the runner folder which is in the home folder.*

Visually it looks like this:
/home
---/runner
------/Command-Line-Day-1-Pt-1
---------You are here

## List - ls
What `ls` does is lists what files and directories are in your current scope. Which right now you are in the runner directory. Go ahead and type `ls` press enter.

Your output should then be:

`directory1  index.js  instructions.md  test.txt  tests`

Here we see that in our current directory(the Command-Line-Day-1-Pt-1 directory) we have two directories called 'directory1' and tests. We also see three files called 'index.js', 'instructions.md', and 'test.txt'.

Looking at this file system visually would look like this:
/home
---/runner
------/Command-Line-Day-1-Pt-1
---------You are here and can see --> directory1, index.js, instructions.md, test.txt, tests

## Change Directory - cd
It is super important to know how to change the directory that you are currently in. This allows you to traverse through the file system.

The syntax for `cd` is to first type the cd command and then type a space and then the directory name you want to move into. Example:

```
cd directory1
```

This will move you into directory1. Go ahead and try it yourself. Input the following into the terminal:

```
cd directory1
```

Then

```
ls
```

This time when the ls command runs it is going to show you what is inside the directory1 directory NOT the Command-Line-Day-1-Pt-1 directory we were just in.

Output should be:

`myTextFile.txt`

Visually this is where you are at now:
/home
---/runner
------/Command-Line-Day-1-Pt-1
---------/directory1
------------/You are here and can see --> myTextFile.txt

What if you want to be able to go back a directory? Simply say `cd ..` 
Instead of naming a file after cd you put two dots and that will bring you back a directory.

Try it!

Type: `cd ..` then press enter.
Then type `ls` to see the files in your current view(or scope).

## Submission

Make sure you feel comfortable with these commands before moving on. If you have any questions make sure you ask your instructor.

Once you feel comfortable with these commands click the submit button in the top right and move onto the next assignment.