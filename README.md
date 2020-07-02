 ### Create Testing with CYPRESS.IO
 Cypress adalah tools yang generasi baru yang dibuat untuk menguji coba modern web. Yang memungkinkan untuk :

1.	Melakukan Setup
2.	Melakukan Scripting
3.	Melakukan Testing
4.	Melakukan Debugging

Cypress paling sering dibandingkan dengan Selenium Namun Cypress berbeda secara fundamental dan arsitektur. 

Cypress memungkinkan Anda untuk menulis semua jenis tes yaitu :
1. End-to-end tests
2. Integration tests
3. Unit tests

### Getting Started
**System Requirement**
-   **macOS**  10.9 and above  _(64-bit only)_
-   **Linux**  Ubuntu 12.04 and above, Fedora 21 and Debian 8  _(64-bit only)_
-   **Windows**  7 and above

**System Requirement**
	Jika anda menggunakan  `npm` untuk menginstall Cypress diharuskan :
-   **Node.js**  8 and above
### Linux

    $ apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
### Centos

    $ yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
**Install Cypress via `npm`** 

    $ cd /your/project/path
    npm install cypress --save-dev

  **Install Cypress via `yarn add`** 

    $ cd /your/project/path
    yarn add cypress --dev

### Direct Download
Download [disini](https://download.cypress.io/desktop) untuk versi Desktop
  
### Opening Cypress
Jika Anda menggunakan `npm`  sewaktu menginstall, Cypress bisa dijalankan lewat `./node_modules` dan dapat diakses melalui binary executable dengan `./node_modules/.bin`


    $./node_modules/.bin/cypress open

**Open via  `npm bin`**

    $(npm bin)/cypress open
**Open via  `npx`**

    $ npx cypress open
    
**Open via  `yarn`**

    $ yarn run cypress open
### Adding npm scripts
Akan jauh lebih mudah dan cepat ketika menambahkan scripts ke `package.json` file

    {  
	    "scripts":  {  
		    "cypress:open":  "cypress open"  
	    }  
	}
Kemudian kita bisa menjalankannya dengan `command`

    $ npm run cypress:open
