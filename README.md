# robert-claypool.github.io

http://robert-claypool.github.io
http://robertclaypool.info

The site is auto-generated as a bunch of static files;
When you push master branch changes to GitHub, they run a Jekyll build
and serve the content.

### Updating dependencies

*Dependencies are already in the repo because GitHub uses them to build the
site. Read on only if you want to change the dependencies or add more.*

1. Our SASS files import stuff from [Bourbon](bourbon.io), e.g. `font-face`.
Dependencies like Bourban are managed with [Bower](bower.io) and
[Gulp](gulpjs.com).

Bower is a command line utility. Install it globally with npm:

```shell
$ npm install --global bower
```

Install packages with `bower install`. Read `bower.json` to see which packages
are required.

2. Bower will download more files to `bower_components` than we need to build
the site. For this reason, we use gulp to copy only the files we need into
other project folders like `_sass`. These files are checked into source
control since GitHub needs them for a successful build (and they rarely change
anyway).

Gulp is another command line utility. Install it globally.

```shell
$ npm install --global gulp-cli
```

Gulp (not gulp-cli) is a part of our `devDependencies` because they recommend
a local install. Run `npm install` to install all of the project's dev
dependencies, including gulp. Then enter `gulp` to run the script.

To summarize: Bower throws files into `bower_components` and (as needed) we
run a gulp script to copy only what we need into various project folders.
