const fs = require('fs');

describe('Requirements', () => {
  it('The directory "public" should have been created in the home directory', () => {
    expect(fs.existsSync('./public')).toBe(true);
  });

  it('The directory "hello" should have been created in the home directory', () => {
    expect(fs.existsSync('./hello')).toBe(true);
  });
  
  it('index.html should have been created and moved to the public direcotory', () => {
    expect(fs.existsSync('./public/index.html')).toBe(true);
  });

  it('about.html should have been created and moved to the public direcotory', () => {
    expect(fs.existsSync('./public/about.html')).toBe(true);
  });

  it('main.css should have been created in the public directory', () => {
    expect(fs.existsSync('./public/main.css')).toBe(true);
  });
})