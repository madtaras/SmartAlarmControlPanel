# Smart Alarm Control Panel

#### BLE module configuration

When the BLE module is waiting for connection it can be configured with `AT` commands. So if you have troubles trying to
make BLE module work as expected you can use following commands, but again, read a specifications! Here are some
commands that I use with CC41-A module:

* `AT+DEFAULT` — resets the module to the defaults;
* `AT+RESET` — resets the module softly;
* `AT+ROLE` — get the module's working mode;
* `AT+ROLE0` — makes the module to work in slave mode, waiting for connection from other devices;
* `AT+NAME` — gets the module's name;
* `AT+NAMESimon` — sets the module's name to `Simon`;
* `AT+PIN` — gets the module's pin (password);
* `AT+PIN123456` — sets the module's pin to `123456`;
* `AT+UUID` — gets the module's service UUID;
* `AT+CHAR` — gets the module's characteristic UUID.

Commands can be case insensitive and may needs to be terminated with `CR` (`\r`) and `LF` (`\n`).

### npm scripts (tasks)

After installing `npm` dependencies, you can use some simple scripts that can be helpful:

* `npm run build` copies used vendors' files and generates `css/style.css`;
* `npm run js:vendor` copies used vendors' javascript files to the `js` directory;
* `npm run styles` generates `css/style.css` from SCSS sources located in the `scss` directory;
* `npm run styles:vendor` copies used vendors' stylesheets to the `css` directory;
* `npm run watch:styles` watches for changes made to the files located in the `scss` directory and runs `npm run styles`
command.
