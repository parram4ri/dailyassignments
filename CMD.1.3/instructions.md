# Command Line Day 1 Part 3

## Reminder

How to open the terminal - `cmd-shift-s`

How to run the tests - `npm test`

## Copy - cp

Just like the heading says we are going to start off with copying a file. The syntax is as follows:

```
cp fileName.txt newFile.txt
```

The first file is the file we want to be copied and then the newFile.txt is going to be the name of our new copy

Go ahead and try it! Right now there is a file called index.html in your scope. Copy it and name the copy resume.html

Run the ls command to see if you have a resume.html file now!

## Remove - rm

To remove a file is very simple. But be careful because once the file is removed there is no turning back! The syntax is as follows:

```
rm fileName.txt
```

Simply you use the remove command and then the file you would like to remove.

Try it yourself by removing the index.html file.

Run the ls command to see if it worked!

## Write to a file and see its contents - echo, cat

This command is really fun! Before we were creating empty files. What if we wanted to put stuff inside the files we create? Simply do:

```
echo "Some Content" >> myFile.txt
```

Here is what is happening piece by piece:
echo is the command
"Some Content" is the content you want to put in your file. It is VERY IMPORTANT that you have quotes around the content of the file.
`>>` means to append to the file. So if there is already content in the file it will just add the content from your command at the end of the file.
myFile.txt is the file you want to write to. If there is no file by that name it will create it for you!

Go ahead and append to the resume.html file you created by adding something interesting about yourself that you would put on a resume.

To see what is inside your resume file use the cat command with the name of your file like so:

```
cat resume.html
```

That will then show you the contents you just put in it.

## Submission

To pass the tests you should have:
- Copied index.html as resume.html
- Removed index.html
- Added content to the resume.html file