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

Сайт бесплатно размещён на GitHub Pages из ветки `gh-pages`:
https://emelanovemelanov-ui.github.io/stomatologia-evstigneev/

Обновить сайт после правок:

```powershell
.\scripts\publish.ps1
```

Свой домен: купите домен, в настройках репозитория **Settings → Pages → Custom domain** впишите его,
у регистратора добавьте DNS-записи по инструкции GitHub и публикуйте так:
`.\scripts\publish.ps1 -BasePath ""`.
