# Command Line Day 1 Part 2

## Tests

Going forward most assignments will have tests for you to run to see if you will get credit for doing the assignment.

Open up the terminal `cmd-shift-s` and type in `npm test`

You should see:
```
 FAIL  tests/main.test.js
  Create files
    ✕ index.html should have been created using touch (10 ms)
    ✕ main.css should have been created using touch (3 ms)
    ✕ app.js should have been created using touch (2 ms)
  Create Directories
    ✕ The directory myFiles should have been created (2 ms)
  Move files
    ✕ program.txt should be in the myFiles directory (2 ms)

  ● Create files › index.html should have been created using touch

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      4 | describe('Create files', () => {
      5 |   it('index.html should have been created using touch', () => {
    > 6 |     expect(fs.existsSync('./index.html')).toBe(true);
        |                                           ^
      7 |   });
      8 |   it('main.css should have been created using touch', () => {
      9 |     expect(fs.existsSync('./main.css')).toBe(true);

      at Object.<anonymous> (tests/main.test.js:6:43)

  ● Create files › main.css should have been created using touch

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

       7 |   });
       8 |   it('main.css should have been created using touch', () => {
    >  9 |     expect(fs.existsSync('./main.css')).toBe(true);
         |                                         ^
      10 |   });
      11 |   it('app.js should have been created using touch', () => {
      12 |     expect(fs.existsSync('./app.js')).toBe(true);

      at Object.<anonymous> (tests/main.test.js:9:41)

  ● Create files › app.js should have been created using touch

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      10 |   });
      11 |   it('app.js should have been created using touch', () => {
    > 12 |     expect(fs.existsSync('./app.js')).toBe(true);
         |                                       ^
      13 |   });
      14 | });
      15 | 

      at Object.<anonymous> (tests/main.test.js:12:39)

  ● Create Directories › The directory myFiles should have been created

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      16 | describe('Create Directories', () => {
      17 |   it('The directory myFiles should have been created', () => {
    > 18 |     expect(fs.existsSync('./myFiles')).toBe(true);
         |                                        ^
      19 |   });
      20 | });
      21 | 

      at Object.<anonymous> (tests/main.test.js:18:40)

  ● Move files › program.txt should be in the myFiles directory

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      22 | describe('Move files', () => {
      23 |   it('program.txt should be in the myFiles directory', () => {
    > 24 |     expect(fs.existsSync('./myFiles/program.txt')).toBe(true);
         |                                                    ^
      25 |   });
      26 | });

      at Object.<anonymous> (tests/main.test.js:24:52)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 5 total
Snapshots:   0 total
Time:        2.866 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
Now this is a lot of information to take in! Whenever you run the tests to see if your code will recieve credit scroll up to the top of the test output:
```
 FAIL  tests/main.test.js
  Create files
    ✕ index.html should have been created using touch (10 ms)
    ✕ main.css should have been created using touch (3 ms)
    ✕ app.js should have been created using touch (2 ms)
  Create Directories
    ✕ The directory myFiles should have been created (2 ms)
  Move files
    ✕ program.txt should be in the myFiles directory (2 ms)
```

This is the condensed version of what the rest of the test output is trying to say. It is best to ignore the detailed output as it will cause confusion. The condensed output will tell you what it is expecting your code to do. If there is a red X next to the text then that means your code does not meet all the requirements yet. If there is a green check mark next to the text then that means you have correctly completed the task.

When you see all green check marks and no red X's that means your code is ready to be submitted!

With this in mind lets get coding!

## Creating a new file - touch

REMINDER: To open the terminal - `cmd-shift-s`

To create a new file all you need to do is use the touch command and then the name of the file after it.

Example:

```
touch test.txt
```

This command will create a new text file called test.txt

Go ahead and make 3 new files using touch called index.html main.css and app.js

Once those are made go ahead and list out the files that are in your current scope. Remember how to do that? Use ls then press enter.

Your output should have the following files(May not be in order):

`main.css app.js index.html index.js tests instruction.md`

## Create a new directory - mkdir

Now you know how to make a file. What about making your own directory? It's similar to making a new file but instead of using touch you will use mkdir and then the name of the directory.

Example:

```
mkdir directory1
```

This will create a directory called directory1.

Go ahead and make a directory called `myFiles`.

List out the files and directories and you will see the directory you just made.

## Move a file - mv

What if you want to be able to move a file? Maybe we made it in the wrong directory and want it in a different directory. This command is a little more tricky than the previous commands.

If I wanted to move index.html into the myFiles directory it would look like this:

```
mv index.html ./myFiles
```

The first file that we give(index.html) is the file that we want moved. The second argument we give(./myFiles) is the file path to where we want to move our index.html file too.

The dot forward slash(./) in the file path just means that we are starting in our current directory. Afterwards we give the directory name myFiles because in our current scope we can see that directory. What if we wanted to move the file into a directory that is a few layers deep? Simply add another forward slash in the file path then the other directories.

Example:

Lets say we have the following file system
/app test1.txt We are here
---/textFiles
------/favoriteTextFiles
---------/mostFavorite

Here we have an app directory that we are currently in with a test1.txt file in it. We also have a directory called textFiles inside our app directory. Inside textFiles we have another directory called favoriteTextFiles inside that directory we have another directory called mostFavorite.

To move our text file into the mostFavorite directory we would do it like so:

```
mv test1.txt ./textFiles/favoriteTextFiles/mostFavorite
```

We start the file path with the dot forward slash(./) to specify to start in our current scope (the app directory) then we tell it to go into textFiles then favoriteTextFiles then mostFavorite and put our test1.txt file in the mostFavorite directory.

Try this out yourself by first creating a file using touch called `program.txt` once you have created this file use the `mv` command to move program.txt into the `myFiles` directory you created above.

## Submission

After going through these instructions you should have:
1) Created the files index.html, app.js, and main.css
2) Created the directory myFiles
3) Created the file program.txt and moved it to the myFiles directory

After doing so run `npm test` in the terminal. All tests should pass. If all tests pass go ahead and submit the assignment. If the tests do not pass make sure you followed the instructions exactly. Ask your instructor if you need help.