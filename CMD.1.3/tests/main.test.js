const fs = require('fs');

describe('Copy Remove and Update', () => {
  it('resume.html should have been created', () => {
    expect(fs.existsSync('./resume.html')).toBe(true);
  });

  it('index.html should have been removed', () => {
    expect(fs.existsSync('./index.html')).toBe(false);
  });

  it('There should be content in resume.html', () => {
    let data = fs.readFileSync('./resume.html');
    expect(data).toBeTruthy;
  });
});