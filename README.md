# JavaScript CLI Challenge @Refactory

NodeJS Command Line App using `Caporal`

29 March 2018

https://bit.ly/cli-challenge

## Getting Started

`npm install`

`npm start <command> <argument> <options>`

## Challenge Description

### #1 String Transformation

> Status: Done

Command

```sh
npm start lowercase "I aM CrAzY TeXT"
# Output "i am crazy text"

npm start uppercase "I aM CrAzY TeXT"
# Output "I AM CRAZY TEXT"

npm start capitalize "I aM CrAzY TeXT"
# Output "I Am Crazy Text"
```

### #2 Arithmetic

> Status: Not Done

Command

```sh
npm start add 1 4 5 2 3
# Output 15

npm start subtract 10 2 4
# Output 4

npm start multiply 3 5 8
# Output 120

npm start divide 100 5 2
# Output 10
```

All of arithmetic commands should accepts infinite parameters.

### #3 Palindrome

> Status: Done

Command

```sh
npm start palindrome "Saya ingin pergi ke pasar"

npm start palindrome "Ibu Ratna antar ubi"
```

Output example

```
String: "Saya ingin pergi ke pasar"
Is palindrome? No

String: "Ibu Ratna antar ubi"
Is palindrome? Yes
```

### #4 Obfuscator

> Status: Done

Command

```sh
npm start obfuscate "email@example.com"
```

Output example

```
&#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;
```

### #5 Random String

> Status: Done

> Should be run with `node app.js` (`npm build` first), options won't work if run with `npm start`

By default will generate 32 random alphanumeric.

```sh
node app.js random
# Output Nf2HZlmJ9TItezKL1EcVrstKjxzLaQj8

node app.js random --length=10
# Output l1BgUotRmS

node app.js random --letters=false
# Output 83628194739182748381981283721982

node app.js random --numbers=false
# Output kdBOsSSFvqLCRvommVauHzmPdvSoYRIs

node app.js random --uppercase
# Output 9JWSY6OOTNPJ6LZLUQE9JIXWPQTLC0K2

node app.js random --numbers=false --lowercase --length=20
# Output ljmuoyopwxcvhycowqqi
```

### #6 Get IP Address in private network

> Status: Done

Command

```sh
npm start ip
```

Output example

```
192.168.100.11
```

### #7 Get External IP Address

> Status: Done

> Should be run with `node app.js` (`npm build` first)

Command

```sh
npm start ip-external
```

Output example

```
125.163.90.49
```

### #8 Get headlines from https://www.kompas.com/

> Status: Done

Command

```sh
npm start headlines
```

Output example

```
Title: Cerita Sripun, Dara Asal Semarang yang Taklukkan Hati David Beckham (1)
URL: https://regional.kompas.com/read/2018/03/29/07265661/cerita-sripun-dara-asal-semarang-yang-taklukkan-hati-david-beckham-1

Title: Aplikator Sepakat Tingkatkan Pendapatan Ojek "Online", Pengemudi Ngotot di Angka Rp 3.500
URL: https://nasional.kompas.com/read/2018/03/29/08514041/aplikator-sepakat-tingkatkan-pendapatan-ojek-online-pengemudi-ngotot-di

Title: Penampilan Modis Istri Kim Jong Un Saat Berkunjung ke China
URL: https://lifestyle.kompas.com/read/2018/03/29/063700020/penampilan-modis-istri-kim-jong-un-saat-berkunjung-ke-china

Title: Rusia Tantang Balik Inggris untuk Buktikan Tak Terlibat Racuni Skripal 
URL: https://internasional.kompas.com/read/2018/03/29/10534231/rusia-tantang-balik-inggris-untuk-buktikan-tak-terlibat-racuni-skripal
```

### #9 Import/Export CSV/XLS/XLSX file.

> Status: Not Done

Command

```sh
npm start convert report2018.xlsx report2018.csv

npm start convert data.csv mydata.xlsx
```

### #10 Get a screenshot from a URL

> Status: Not Done

```sh
npm start screenshot https://google.com --format=png
```

The output should saved in a file. File name example `screenshot-001.png`. 
If the file already exists, it should create new file name such as `screenshot-002.png`

By default the output format is `png`. But user should be able to change the format to `jpg` and `pdf` by
passing `--format` parameter, OR by detect the extension of `--output` parameter.

Here is the example when using `--output`

```sh
npm start screenshot https://google.com --output=gambar.jpg
```

### #11 Get screenshots from a list of file

> Status: Not Done

```sh
npm start screenshot-list list.txt --format=jpg
```

Content of `list.txt` file:

```
https://google.com
https://en.wikipedia.org/wiki/JavaScript
https://en.wikipedia.org/wiki/ECMAScript
```

The output file name should based on URL and safe for all OS. For example in \*nix file system, you should not use `/` as part of file name.

### #12 Get all information about new movies in theaters for today from CGV website

> Status: Not Done

Command

```
npm start movies
```

Output example

```
A WRINKLE IN TIME

Jenis Film: Adventure, Family, Fantasy
Produser: Catherine Hand, Jim Whitaker
Sutradara: Ava Duvernay
Penulis: Jennifer Lee, Madeleine L'engle
Produksi: Walt Disney Pictures
Casts: Storm Reid, Oprah Winfrey, Chris Pine, Gugu Mbatha-raw, Reese Witherspoon, Michael Pea
Trailer: http://www.21cineplex.com/video/trailer-hd/a-wrinkle-in-time,4799.htm

Sinopsis
Diangkat dari novel fantasi karya Madeline L’Engle. A Wrinkle in Time menyuguhkan petualangan menakjubkan seorang anak bernama Meg Murrry (Storm Reid) menjelajahi ruang dan waktu untuk menemukan sang ayah yang menghilang secara misterius.
Disana ia menemukan tiga sosok ajaib yang membantu dirinya melewati berbagai rintangan dalam melintasi dunia..

------------------------------------------------------------------------------------------------------

JUNGLE

Jenis Film: Action, Adventure, Drama
Produser: Todd Fellman, Mike Gabrawy Gary Hamilton, Mark Lazarus, Dana Lustig, Greg Mclean
Sutradara: Greg Mclean
Penulis: Justin Monjo, Yossi Ghinsberg
Produksi: Momentum Pictures
Casts: Daniel Radcliffe, Alex Russell, Thomas Kretschmann, Yasmin Kassim, Joel Jackson, Jacek Koman
Trailer: http://www.21cineplex.com/video/trailer-hd/jungle,4815.htm

Sinopsis
Empat pelancong berangkat ke jantung hutan Amazon. Namun petualangan itu berubah menjadi mimpi buruk saat sebuah kecelakaan terjadi. Yossi (Daniel Radcliffe) harus bertahan hidup sendirian di tengah hutan selama berminggu-minggu.

Terdampar tanpa pisau, peta atau keterampilan bertahan hidup. Yossi mulai menyerah, ia bertanya-tanya apakah dia akan berhasil keluar dari hutan hidup-hidup.
```