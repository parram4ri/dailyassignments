let fs = require('fs');
let path = require('path');

describe('Create files', () => {
  it('index.html should have been created using touch', () => {
    expect(fs.existsSync('./index.html')).toBe(true);
  });
  it('main.css should have been created using touch', () => {
    expect(fs.existsSync('./main.css')).toBe(true);
  });
  it('app.js should have been created using touch', () => {
    expect(fs.existsSync('./app.js')).toBe(true);
  });
});

describe('Create Directories', () => {
  it('The directory myFiles should have been created', () => {
    expect(fs.existsSync('./myFiles')).toBe(true);
  });
});

describe('Move files', () => {
  it('program.txt should be in the myFiles directory', () => {
    expect(fs.existsSync('./myFiles/program.txt')).toBe(true);
  });
});