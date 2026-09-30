# Семейная стоматология доктора Евстигнеева

Сайт-визитка клиники: главная, услуги и цены, врачи, контакты. Запись по телефону и в WhatsApp.
Онлайн-записи, кабинета и базы данных нет: сайт полностью статический.

Контент и прайс взяты со страницы [vk.ru/dr.evstigneev](https://vk.ru/dr.evstigneev).
Все тексты, врачи и цены лежат в `src/lib/clinic.ts`.

## Локально

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
npm run build      # статическая сборка в ./out
npm run preview    # просмотр ./out на http://localhost:3200
npm run test:e2e   # проверка страниц (после build)
```

## Публикация

Сайт бесплатно размещён на GitHub Pages из ветки `gh-pages`: https://devstigneev.ru

Домен зарегистрирован в Selectel, DNS там же: A-записи `@` → `185.199.108.153`, `185.199.109.153`,
`185.199.110.153`, `185.199.111.153`; CNAME `www` → `emelanovemelanov-ui.github.io`.

Обновить сайт после правок:

```powershell
.\scripts\publish.ps1
```
