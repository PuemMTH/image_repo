# Install

## Install dependencies

```bash
yarn install
yarn dev
```
## Install dependencies laravel
#### ให้ตั้งค่าไฟล์ .env ให้เรียบร้อยก่อน
```bash
composer install
php artisan migrate
php artisan serve
```

## การใช้งาน
#### แทนที่ id ด้วย id ที่ต้องการ
```bash
http://localhost:5173/show_image/<id>
```
#### หน้า save image
```bash
http://localhost:5173/save_image
```