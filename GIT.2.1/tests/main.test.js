const fs = require('fs');

describe('Requirements', () => {
  it('Should have initialized a git repository', () => {
    expect(fs.existsSync('./.git')).toBe(true);
  });

  it('Should have added and committed all the files.', () => {
    expect(fs.existsSync('./.git/COMMIT_EDITMSG')).toBe(true);
  });
});