const fs = require('fs');

describe('Requirements', () => {
  it('Should have cloned the repository', () => {
    let data = fs.readFileSync('./gitDay2/.git/logs/HEAD', 'utf-8');
    let regex = new RegExp('https://github.com/joybob22/gitDay2.git', 'i');
    let regex1 = new RegExp('https://github.com/joybob22/gitDay2', 'i');
    expect(regex.test(data) || regex1.test(data)).toBe(true);
  });
});