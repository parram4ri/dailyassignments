
# Git Installation Guide

This guide provides step-by-step instructions for installing Git on Windows, macOS, and Linux. Git is a distributed version control system that helps you track changes in your source code during software development.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installing on Windows](#installing-on-windows)
- [Installing on macOS](#installing-on-macos)
- [Installing on Linux](#installing-on-linux)
- [Verifying Installation](#verifying-installation)
- [Configuring Git](#configuring-git)
- [Additional Resources](#additional-resources)

## Prerequisites

Before you begin, ensure you have administrative access to your computer and an internet connection to download Git.

## Installing on Windows

1. Download the latest Git for Windows installer from the [official Git website](https://git-scm.com/download/win).
2. Run the downloaded `.exe` file to start the installation.
3. Follow the on-screen instructions, choosing the default options for the best compatibility.
4. Click `Finish` to complete the installation.

## Installing on macOS

1. The easiest way to install Git on macOS is to install the Xcode Command Line Tools. Open a terminal and type:
   ```
   xcode-select --install
   ```
2. Click `Install` when prompted to begin the installation process.
3. Alternatively, you can use Homebrew to install Git:
   ```
   brew install git
   ```

## Installing on Linux

### Debian/Ubuntu

1. Open a terminal.
2. Update your package list:
   ```
   sudo apt update
   ```
3. Install Git:
   ```
   sudo apt install git
   ```

### Fedora

1. Open a terminal.
2. Install Git:
   ```
   sudo dnf install git
   ```

### Arch Linux

1. Open a terminal.
2. Install Git:
   ```
   sudo pacman -S git
   ```

## Verifying Installation

To verify that Git has been installed correctly, open a terminal or command prompt and type:
```
git --version
```
You should see the Git version number if it was successfully installed.

## Configuring Git

After installing Git, you should configure your user name and email address, which will be used in your commits:
```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Additional Resources

For more detailed information on using Git, visit the [official Git documentation](https://git-scm.com/doc).

---
End of README
