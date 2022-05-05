# Bounce 3d
## About
Make a ball bounce off all 6 walls of a cube.

The last time I did this demo it was in Pascal and Turtle Graphics!

This project uses three.js.
I.e. WebGL and GPUs.

## Current Status
I'm testing a lot of ideas at once.
Currently you see several different things that don't make sense together.
And other items are temporarily commented out.

I'd like to play with the lights and shadows and reflections more.

I want to make the shadows work!

## See it Running
* Run it yourself
  * [Without shadows](https://tradeideasphilip.github.io/bounce-3d/) (More efficient)
  * [With shadows](https://tradeideasphilip.github.io/bounce-3d/#shadows=1) (Better looking)
* [Watch on YouTube](https://youtu.be/OEnWbJ4_FKY) (_very_ old)
* [Watch a version with shadows](https://youtu.be/eXZiy4KwqwY)

## How to Run Locally
* Clone this project with git.
* `cd` into the project directory.
* `npm update`
* `npm run dev`
* Click on the link displayed in your terminal.
## How to Build for Production
`npm run build`

For more info:  https://vitejs.dev/guide/#command-line-interface.

## Soundtrack
[My balls are always bouncing.](https://www.youtube.com/watch?v=xPlqLHcphyw)

## Starting from Scratch
I just switched to a new mac laptop.
Here are some _quick_ notes on setting up a TypeScript / npm / git / VS Code environment from scratch.

* VS Code
  * I downloaded [VS Code](https://code.visualstudio.com/download) from their website.  I selected "Apple Silicon".
  * I installed the following extensions: [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next), [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) (The Anthony Fu version.)
  * Main menu > Code > Preferences > Settings.  Search for `git autofetch` and set it to true.
* `git`
  * I started from the terminal and typed `git`.  I clicked OK a few times and eventually an installer came up and did its job.
  * `git config --global user.name "John Doe"`. Add your own name and email.  These are recorded as part of every commit.
  * `git config --global user.email johndoe@example.com`
  * `git config --global alias.plog 'log --graph --oneline --all --decorate'` Not strictly required, but I like to type `git plog`.  "P" is for "Philip."
* `npm`
  * They are now recommending that you use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to bootstrap the install process.
  * At the terminal: `cd ; touch .zshrc .profile`. I did this the long way, but I think this is all you need. The install program (next line) should add things to _both_ of these scripts.  If you try to do a build and it can't find a command, check these scripts.
  * `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash` (Or check the nvm website for more current directions.)
  * Close that terminal window and start a new one.
  * `nvm install node`
* TypeScript
  * Make sure you are __not__ inside a project.  
  * Otherwise you will eventually get the "This is not the tsc command you are looking for" error with the oversized red background.
  * `npm install -g typescript`
* GitHub
  * Not required to download this project.
  * But if you have a GitHub account and you are installing dev tools on a new computer you probably want to do this.
  * At the terminal:  `ssh-keygen` and take all the defaults.
  * `cat ~/.ssh/id_rsa.pub`
  * Go to https://github.com/settings/keys and add the new key.
* This project (bounce-3d)
  * `cd ~/Documents`
  * `mkdir fun-git`
  * `cd fun-git`
  * `git clone https://github.com/TradeIdeasPhilip/bounce-3d`
  * `cd bounce-3d`
  * `git submodule update --init --recursive` Some tools will automatically take care of the submodules when cloning a repository.  But this time I had to do it myself.
  * You should now be able to open the project directory in VS Code.
  * If everything worked you'll see the program running in an embedded browser in VS Code.
  * To be sure, go into the project directory and type `npm run build`.  Verify that it completes without any errors.
