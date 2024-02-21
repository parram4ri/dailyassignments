const fs = require('fs');

describe('File Creations', () => {
  it('index.html should have been created in gitDay2', () => {
    expect(fs.existsSync('./gitDay2/index.html')).toBe(true);
  });
  it('main.css should have been created in gitDay2', () => {
    expect(fs.existsSync('./gitDay2/main.css')).toBe(true);
  });
});

describe('Git Commands', () => {
  it('Should have cloned the gitDay2 repository', () => {
    let data = fs.readFileSync('./gitDay2/.git/logs/HEAD', 'utf-8');
    let regexp = new RegExp('clone: from https://github.com/joybob22/gitDay2.git');
    expect(regexp.test(data)).toBe(true);
  });
  it('Should have made a commit', () => {
    let data = fs.readFileSync('./gitDay2/.git/logs/HEAD', 'utf-8');
    let regexp = new RegExp('commit');
    expect(regexp.test(data)).toBe(true);
  });
  it('Should have created a branch called newBranch and moved to it', () => {
    let data = fs.readFileSync('./gitDay2/.git/logs/HEAD', 'utf-8');
    let regexp = new RegExp('to newBranch');
    expect(regexp.test(data)).toBe(true);
  });
  it('Should have merged newBranch', () => {
    let data = fs.readFileSync('./gitDay2/.git/logs/HEAD', 'utf-8');
    let regexp = new RegExp('merge newBranch');
    expect(regexp.test(data)).toBe(true);
  });
});
