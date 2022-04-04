<p align="center">
	<img src="https://telegra.ph/file/8498b727d19499438c5c1.jpg" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Tohka Yatogami</h1>

## Recode BY : [`Iyann Ganteng`](https://github.com/IyanZ-XcX)


## FOR DEPLOY HEROKU USER

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/IyanZ-XcX/BotWhatsapp)

## FOR DEPLOY RAILWAY USER

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FIyanZ-XcX%2FBotWhatsapp)

## FOR DEPLOY REPLIT USER

[![Run on Repl.it](https://repl.it/badge/github/FadliDarmawan/haruno)](https://repl.it/github/IyanZ-XcX/BotWhatsapp)

## GRUP WHATSAPP

[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/BET5aPmPiMAJ1LWPPaSTxa)


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/IyanZ-XcX/BotWhatsapp
cd BotWhatsapp
npm i
npm update
node .
```

---------

## UNTUK PENGGUNA TERMUX
```bash
termux-setup-storage
git clone https://github.com/IyanZ-XcX/BotWhatsapp --branch termux
bash install.sh
npm install -g npm@6.14.14
npm i @adiwajshing/baileys@latest
npm start
```

---------

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git

---------

## Arguments `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

 [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Ariffb](https://github.com/ariffb25.png?size=100)](https://github.com/ariffb25) | [![Kangsad01](https://github.com/Kangsad01.png?size=100)](https://github.com/Kangsad01) | [![Iyann](https://github.com/IyanZ-XcX.png?size=100)](https://github.com/IyanZ-XcX)
----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ariffb](https://github.com/ariffb25) | [Kangsad01](https://github.com/Kangsad01) | [IyannGanz](https://github.com/IyanZ-XcX)
 Penulis / Pencipta | Penulis ulang Ke-1 | Penulis ulang Ke-2 | Penulis ulang ke-3
