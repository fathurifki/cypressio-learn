# Cypress Training

## 1. Overview
**What is Cypress ?**
Cypress adalah tools yang generasi baru yang dibuat untuk menguji coba modern web. Yang memungkinkan untuk :

1.  Melakukan Setup
2.  Melakukan Scripting
3.  Melakukan Testing
4.  Melakukan Debugging

Cypress paling sering dibandingkan dengan Selenium Namun Cypress berbeda secara fundamental dan arsitektur.

Cypress memungkinkan Anda untuk menulis semua jenis tes yaitu :

1.  End-to-end tests
2.  Integration tests
3.  Unit tests
## 2. Installation Cypress
### Getting Started

**System Requirement**

-   **macOS**  10.9 and above  _(64-bit only)_
-   **Linux**  Ubuntu 12.04 and above, Fedora 21 and Debian 8  _(64-bit only)_
-   **Windows**  7 and above

**System Requirement**  Jika anda menggunakan  `npm`  untuk menginstall Cypress diharuskan :

-   **Node.js**  8 and above

### Linux

```
$ apt-get install libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

```

### [](https://github.com/fathurifki/cypressio-learn/blob/master/README.md#centos)Centos

```
$ yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

**Install Cypress via  `npm`**

```
$ cd /your/project/path
npm install cypress --save-dev

```

**Install Cypress via  `yarn add`**

```
$ cd /your/project/path
yarn add cypress --dev
```
### Direct Download

Download  [disini](https://download.cypress.io/desktop)  untuk versi Desktop

### [](https://github.com/fathurifki/cypressio-learn/blob/master/README.md#opening-cypress)Opening Cypress

Jika Anda menggunakan  `npm`  sewaktu menginstall, Cypress bisa dijalankan lewat  `./node_modules`  dan dapat diakses melalui binary executable dengan  `./node_modules/.bin`

```
$./node_modules/.bin/cypress open

```

**Open via  `npm bin`**

```
$(npm bin)/cypress open

```

**Open via  `npx`**

```
$ npx cypress open

```

**Open via  `yarn`**

```
$ yarn run cypress open

```

### [](https://github.com/fathurifki/cypressio-learn/blob/master/README.md#adding-npm-scripts)Adding npm scripts

Akan jauh lebih mudah dan cepat ketika menambahkan scripts ke  `package.json`  file

```
{  
    "scripts":  {  
	    "cypress:open":  "cypress open"  
    }  
}

```

Kemudian kita bisa menjalankannya dengan  `command`

```
$ npm run cypress:open
```
## 3. Basic Script Cypress 

Clone Repository 

```
https://github.com/fathurifki/cypressio-learn
```

Lalu jalankan dengan command `git clone`

Apabila menggunakan `SSH` :

```
$ git clone git@github.com:fathurifki/cypressio-learn.git
```

Apabila menggunakan `HTTPS` :

```
$ git clone https://github.com/fathurifki/cypressio-learn.git
```

Setelah itu lakukan installasi menggunakan `npm install`

Jalankan Project dengan command ``npx cypress open``

Setelah menjalankan dengan command ``npx cypress open``  membuka UI Console Cypress dan secara otomatis akan generate 4 folder ini  :

|	Folder	 	 | Description  |
------------ | ------------- |
Fixture | Menyimpan Static Data.
Integration | Semua file test berada di dalam folder integration ini dan file extension .js, sedangkan .spec hanya sebagai naming convention.
Plugins |  Plugin memungkinkan untuk memodifikasi behaviour  Cypress.
Support | Berisi command. js dan index.js, isi dari index.js menyimpan global configuration.

|	File	 	 | Description  |
------------ | ------------- |
Cypress.json | Untuk menyimpan base url, port, environment dll

Basic Script Cypress

Pertama kita buat terlebih dahulu file di dalam folder integration dengan format `<nama_file>.spec.js`
sebagai contoh :
```
BasicScript.spec.js
``` 
`BasicScript.spec.js`

```
///  <reference types="cypress" />

describe('First Test',  ()  =>  {  
		it('Google Visit',  ()  =>  {
			cy.visit('https://google.co.id')  
		})  
	})
```

Kita bisa menyerdahanakan script refrence  dengan cara membuat konfigurasi di root folder project dengan nama file `jsonconfig.json` lalu tuliskan configurasi script seperti ini :

```
{
	"includes":[

		"./node_modules/cypress",

		"cypress/**/*.js"
	]
}
```

Alhasil kita tidak perlu lagi untuk menulis reference berulang ketika kita akan menuliskan script

```
describe('First Test',  ()  =>  {  
		it('Google Visit',  ()  =>  {
			cy.visit('https://google.co.id')  
		})  
	})
```
Setelah itu jalankan `npx cypress open` dan jalankan testnya,

Mari kita coba dengan menuliskan test pertama kita,

1. Jalankan command dengan `npm start` atau `yarn start`
2. Kemudian buat file dengan nama yang bebas dengan naming convention yang sesuai dengan ekstensi `.spec.js`
3. Kembali ke halaman web dengan alamat `http://localhost:3000`
4. Disini ada tampilan halaman prototype login sebagai awal test coba kita menginputkan email dan password serta bisa melakukan action button submit
5. Lalu inputkan Script seperti berikut :
	```
		describe('Login', function  () {

			it('Sign in',  function  () {

				cy.visit('http://localhost:3000/')

				cy.get('input[type="text"]').type('jhondoe@gmail.com')

				cy.get('input[type="password"]').type('12345678')

				cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-submit-4.MuiButton-containedPrimary.MuiButton-fullWidth').contains('Sign In').click()

				cy.get('div.MuiBackdrop-root').click({force: true})

			})

	})
	```
6. Kemudian jalankan UI Console Cypress untuk menjalankan testnya dengan command `npx cypress open`


**Catatan :** 
	1. Get : Untuk mengambil DOM elements, 
	2. Contains: Untuk mendapatkan elemen DOM berupa spesifik teks yang 		inginkan


## 4. Identify Element Cypress

Pada bagian ini akan membahas lebih lanjut bagaimana mengidentifikasi sebuah element untuk melakukan testing

**Scenario Test :**
1. Jalankan terlebih dahulu websitenya dengan link https://ecstatic-mahavira-dcba2a.netlify.app
2. Kemudian membuat test mulai dari visit Link untuk Sign Up
3. Kemudian membuat test untuk mengisi halaman Login
4. Kemudian membuat test untuk mengisi halaman Profile

**Testing :**
5. Untuk mengidentifikasi Element cukup membuka console website, Kemudian kita arahkan componentnya,
6. Pada case ini, element textfield email dan password di wrap oleh form disarankan untuk menggunakan within( ), within pada cypress adalah **command yang digunakan ketika ada grouping pada sebuah element**    
7. Membuat Script untuk Sign Up :

		describe('Identify Element', ( ) => {
			it('Sign Up', ()  => {

				cy.visit('https://ecstatic-mahavira-dcba2a.netlify.app/')

				cy.contains(`Don't have an account? Sign Up`).click()

				cy.get('form').within(($form)  => {

						cy.fixture('userCredential').then(user  => {

							cy.get('input[type="text"]').type(user.email)

							cy.get('input[type="password"]').type(user.password)

							cy.root().submit()

					})

				})

				cy.wait(500)

				cy.contains('OK').click()

				cy.location().should((location)  => {

					expect(location.pathname).to.eq('/register')

					})

				})

		})	
		
	
8.  Membuat Script untuk Sign In :

		describe('Identify Element', ( ) => {
			 .... //Sign In
			 it('Sign in',  function  () {

					cy.visit('https://ecstatic-mahavira-dcba2a.netlify.app/')

					cy.get('form').within(($form)  => {
	
						cy.get('input[type="text"]').type('boboi@gmail.com')

						cy.get('input[type="password"]').type('boboi123')

						cy.root().submit()

					})

					cy.wait(500)

						cy.location().should((location)  => {

							expect(location.pathname).to.eq('/')

						})

					})
		})	
10. Membuat Script untuk Profile :

		describe('Identify Element', ( ) => {
			... // Sign Up
			... // Sign In
			it('Create Profile',  function  () {

					cy.contains('Profile').click({ force: true })

					cy.get('form').within(($form)  => {

						cy.get('input').first().type('boboi@gmail.com')

						cy.get('input').eq(1).type('08571529181')

						cy.get('input').eq(2).type('Kauman')

						cy.get('input').eq(3).type('Yogyakarta')

						cy.get('input').eq(4).type('BCA')

						cy.get('input').eq(5).type('02020911111')

						cy.get('input').eq(6).type('Mandiri')

						cy.get('input').last().type('01019484849')

						cy.root().submit()

					})

					cy.contains('OK').click()

					cy.location().should((location)  => {

						expect(location.pathname).to.eq('/products')

					})
			})	

## 5. Custom Commands Cypress
Tujuan untuk membuat *Custom Commands* ini membuat function dan dapat digunakan kembali tanpa harus teman-teman membuat ulang script tersebut (**Reusable Function**)

**Step :**
1. Buka terlebih dahulu folder *Support* => file *Commands*
2. Lalu tambahkan *command* :
	```
	Cypress.Commands.add(() => {

		...//script

	})
	```
	Sebagai contoh Function Sign In :

		Cypress.Commands.add('SignIn', ()  => {

				cy.visit('https://ecstatic-mahavira-dcba2a.netlify.app/')

				cy.get('form').within(($form)  => {

					cy.get('input[type="text"]').type('jhondoe@gmail.com')

					cy.get('input[type="password"]').type('12345678')

					cy.root().submit()

				})

				cy.wait(500)

				cy.location().should((location)  => {

					expect(location.pathname).to.eq('/')

				})

		})
3. Penggunaan Custom Commands sama seperti memanggil Commands Cypress umumnya :
	```
	describe('Sign In', ( )  => { 
		cy.SignIn( )
	})
	```
## 6. Project Configuration Cypress
Pada Configuration Cypress memberikan ruang leluasa untuk membuat konfigurasi secara dinamis , Bisa menginputkan secara global :
	1. *baseUrl* 
	2. *Timeout Value*  
	3. *Folders / Files* 
	4. *Screenshots & video*
	5. Serta *Manipulate Browser Settings*



**Steps :**
1.  Membuka file `cypress.json` 
2.  Lalu tambahkan saja value yang diinginkan di dalam `cypress.json`  (**sebagai contoh disini adalah** **baseUrl**) :
	 ```
	{
		“baseUrl” : “https://ecstatic-mahavira-dcba2a.netlify.app”
	}
	 ```
3. Lalu kita rubah value cy.visit sesuai dengan prefix routes web yang kita inginkan atau sudah ditentukan pada website tersebut sebagai contoh : 
	```
	describe('SignIn', ()  => {
		cy.visit('/')
	})
	```
4. Lalu *apply* disemua file yang menggunakan base Url 
## 7. Fixtures / Files Cypress
Pada fixture bisa menaruh file test file berbentuk image, video ,audio, serta file test yang berekstensi .json yang nantinya kita cukup memanggil file fixture tersebut sesuai kebutuhan

Sebagai contoh kita membuat sebuah *Credential* untuk *Login*, buat file **userLoginCredential.json** lalu isikan script
```
//cypress > fixture > userLoginCredential.json
	{

		email: ... //describe your email

		password: ... //describe your password

	}
```
Lalu kita buat script testnya : 
```
//cypress > integration > ConfigurationScript.json

	describe('Login', function () {

		it('Sign in', function () {

		cy.visit('[http://localhost:3000/](http://localhost:3000/)')

		cy.fixture(‘userLoginCredential’).then(user => {

			cy.get('input[type="text"]').type(user.Email)

			cy.get('input[type="password"]').type(user.Password)

		}) 
		
		cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-submit-4.MuiButton-containedPrimary.MuiButton-fullWidth').contains('Sign In').click()
		
		})

	})
```
Jalankan testing `npx cypress open` untuk membuka ui consolenya
## 8. Plugin File Upload Cypress
Pertama-tama Install terlebih dahulu library dari *NPM* ****cypress-file-upload****

```
npm install cypress-file-upload
```
Cara penggunaannya (**Syntax**) : 

```
	const  picture  =  'melon.jpg' // simpan terlebih dahulu filenya di dalam folder Fixture

	cy.get('input[type=file]') // Get element untuk input

		.attachFile(picture) // attach file dari variable yang kita declare diatas 
```

Contoh penggunaan

```
//cypress > integration > CreateProduct.spec.json

describe('Input Product' , ( ) => {
	it('Create Product', ()  => {

		cy.contains('Input Product').click()

		cy.get('form').within(($form)  => {

			cy.get('input').first().type('Buah Melon')

			cy.get('input').eq(1).type('Buah-Buahan')

			cy.get('input').eq(2).type('10000')

			cy.get('input').eq(3).type('20')

			cy.get('input').eq(4).type('10')

			cy.get('input').eq(5).type('Buah Melon Yang Segar')

			const  picture  =  'melon.jpg'

				cy.get('input[type=file]')

				.attachFile(picture)

				cy.root().submit()

		})

		cy.wait(600)

		cy.contains('OK').click()

		cy.location().should((location)  => {

			expect(location.pathname).to.eq('/products')

			})

		})
})
```
Jalankan testing `npx cypress open` untuk membuka ui consolenya

## 9. Mochawesome Report Cypress
Pertama instalasi terlebih dahulu library dibawah ini :

**Install mocha :** 
``npm install mocha --save-dev``

**Install cypress-multi-reporters :**
``npm install cypress-multi-reporters --save-dev``

**Install mochawesome  :**
``npm install mochawesome --save-dev``

**Install mochawesome-merge :**
``npm install mochawesome-merge --save-dev``

**Install mochawesome-report-generator :**
`` install mochawesome-report-generator --save-dev``

Inputkan Script Konfigurasi ke ``cypress.json``

```
{

…

	“reporter”: “cypress-multi-reporter”,

	“reporterOptions”: {

	“reporterEnabled: “cypress/reports/mocha”,

	“mochawesomeReporterOptions”: {
	
			“reportDir”: “cypress/reports/mocha”,

			“quite”:true,

			“overwrite”: false,

			“html”: false,

			“Json”: true

		},
		"videosFolder": "integration-reports/integration/public/videos",
        "screenshotsFolder": "integration-reports/integration/public/screenshots",
        "videoCompression": false,
        "browser": "chrome",
        "chromeWebSecurity": false
	}

}
```

Pada file package.json inputkan konfigurasi

**Steps :**
1.  Buat script untuk combine report dan generate report (combine & generate report)
    
2.  Lalu kita gabungkan scriptnya dengan membuat script baru dengan menggabungkan menggunakan tanda *&&* **ampersand** (posttest)
    
3.  Kemudian kita membuat clean report dan pretest script untuk membersihkan report yang sudah ada dan membuat report yang baru
    
4.  Apabila test script yang kita jalankan gagal, pasti otomatis terhenti dan otomatis si posttestnya tidak akan berjalan maka kita membuat script lagi untuk menjalankan **npm run scripts || npm run posttest**


**Windows**
```
{
	"scripts": {
	    "clean:reports": "rmdir /S /Q cypress\\report && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports",
	    "pretest": "npm run clean:reports",
	    "scripts": "cypress run",
	    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json cypress/reports/mochareports/report.json",
	    "generate-report": "marge cypress/reports/mochareports/ report.json -f report -o cypress/reports/mochareports",
	    "posttest": "npm run combine-reports && npm run generate-report",
	    "test" : "npm run scripts || npm run posttest"
	  }
}
```
**Linux or Mac**

```
{
	"scripts": {
		"clean:reports": "rm -R -f cypress/reports && mkdir cypress/reports && mkdir cypress/reports/mochareports",
	    "pretest": "npm run clean:reports",
	    "scripts": "cypress run",
	    "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
	    "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
	    "posttest": "npm run combine-reports && npm run generate-report",
	    "test": "npm run scripts || npm run posttest"
	}
}
```

lalu jalankan commad dengan **npm run test**, secara otomatis nanti akan melakukan generate folder berdasarkan yang sudah kita configurasikan di file **cypress.json**

## 10. Api Testing Cypress

Pada cypress disediakan features untuk melakukan API testing, yaitu dengan menggunakan commadn **cy.request( )**

**Syntax :**
```
cy.request(url)
cy.request(url, body) 
cy.request(method, url) 
cy.request(method, url, body) 
cy.request(options)
```

Untuk mockup API akan menggunakan **[jsonplaceholder](https://jsonplaceholder.typicode.com/)**

Berikut adalah cara penerapan API Testing menggunakan Cypress :
```
describe('API Testing with Cypress', ()  => {
	
	var  result

	//Testing Header
		it('Validate the header', ()  => {

			result  =  cy.request('https://jsonplaceholder.typicode.com/posts')

			result.its('headers')

				.its('content-type')

				.should('include', 'application/json')
		})

		//Testing Status
		it('Validate the status', ()  => {

			result  =  cy.request('https://jsonplaceholder.typicode.com/posts')

			result.its('status')

				.should('equal',200);

		})

		//Testing Body
		it('Validate the body ', ()  => {

		result  =  cy.request('https://jsonplaceholder.typicode.com/posts/1')

		result.its('body')

		result.should((response)  => {

			expect(response).to.have.property('title')

			expect(response).to.have.property('body')

		})

	})

})
```


