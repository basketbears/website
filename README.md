# website
test for a new website for basketbears

# Jekyll Development Setup

This guide will help you set up Ruby, Bundler, and Jekyll on a MacBook using Homebrew and `chruby`, and provide the necessary commands to develop your Jekyll site locally.

## Prerequisites

- macOS
- Homebrew installed

## Installation Steps

### 1. **Install Homebrew**
If you haven't installed Homebrew yet, open Terminal and run the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. **Install chruby and ruby-install**
```sh
brew install chruby ruby-install
```

### 3. **Install ruby**
```sh
ruby-install ruby 3.1.3
```

### 4. **Setup `chruby`**
Add the following lines to your .zshrc file:
```sh
source /opt/homebrew/opt/chruby/share/chruby/chruby.sh
source /opt/homebrew/opt/chruby/share/chruby/auto.sh
chruby ruby-3.1.3
```
Then, reload your shell configuration:
```sh
source ~/.zshrc
```

### 5. **Install Bundler and Jekyll**
```sh
gem install bundler jekyll
```

### 6. **Install Jekyll Dependencies**
```sh
bundle install
```

### 7. **Build and Serve the Jekyll Site**
```sh
bundle exec jekyll serve
```

### Building:
- run `bundle exec jekyll build`
- copy the content of _site to the `gh-pages` branch
- run `npm ci`, `npm run purgecss` and `rm -r node_modules`
- commit the finished update
