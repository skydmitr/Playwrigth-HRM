# Playwright-HRM 🚀

[![Tests](https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg)](https://github.com/skydmitr/Playwrigth-HRM/actions)
[![Allure Report](https://img.shields.io/badge/Allure-Report-brightgreen.svg)](https://github.com/skydmitr/Playwrigth-HRM/actions)
[![Playwright](https://img.shields.io/badge/playwright-latest-brightgreen.svg)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)

Автоматизированные тесты **OrangeHRM** на **Playwright + TypeScript** с **Page Object Model**, **Allure Reports** и **Builder Pattern**.

## ✨ Особенности

- 🎯 **Page Object Model** — чистая архитектура
- 🏗️ **Builder Pattern** — гибкая генерация данных (Faker.js)
- 🌍 **Global Setup** — авторизация один раз для всех тестов
- 📊 **Allure Reports** — скрины/видео/trace при ошибках 🎥📸
- 🔍 **Надёжные локаторы** — `getByRole`, `getByLabel`
- 💻 **WebStorm** + **GitHub Actions**

## 🛠️ Быстрый старт

```bash
git clone https://github.com/skydmitr/Playwrigth-HRM.git
cd Playwrigth-HRM
npm ci
```
## ЗАПУСК ТЕСТОВ
```bash
npm test                    # обычные тесты
npm run test:allure         # тесты + Allure отчёт (откроется автоматически!)
npx allure serve allure-results  # мгновенный Allure
```
###📁 Структура проекта
```bash
src/
├── pages/              # Page Objects
│   ├── NavigationPage.ts
│   ├── AdminPageMenu.ts
│   └── RegisterPage.ts
├── fixtures/           # Тестовые данные
│   └── builders/
│       └── BuildersAdminMenu.ts
├── globalSetup/        # Глобальная авторизация
└── tests/             # Тесты (.spec.ts)

allure-results/        # Allure сырые результаты
allure-report/         # Красивый HTML отчёт 🎨
```
## 🎬 Пример теста + Allure
```bash
test('Добавление Admin', async () => {
  await test.step('Переход → Admin → Add', async () => {
    await adminPage.goToAdmin();
    await adminPage.addUser.click();
  });

  await test.step('Заполнение формы', async () => {
    await adminPage.fillUserForm(creds);
    await adminPage.save();
  });

  await expect(adminPage.success).toBeVisible(); // ✅ Allure покажет!
});
```
## 🔧 Локальная разработка
```bash
# Обновить авторизацию
rm state.json && npm test

# Отладка
npm test -- --headed --slow-mo=500

# Allure после тестов
npm run test:allure
```
## 🔄 CI/CD (GitHub Actions)
```bash
# .github/workflows/test.yml
- name: Generate Allure report
  run: |
    npx allure generate allure-results --clean -o public/
- name: Upload Allure results
  uses: actions/upload-artifact@v4
  with: { path: public/ }
```
## Allure покажет:
```bash
📋 Все test.step() как шаги

📸 Скриншот при ошибке

🎥 Видео всего теста

🔍 Trace Viewer (реплей действий)
```