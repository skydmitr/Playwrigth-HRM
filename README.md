# Playwright-HRM 🚀


[![Playwright Version](https://img.shields.io/badge/playwright-latest-brightgreen.svg)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)

Автоматизированные тесты **OrangeHRM** на **Playwright + TypeScript** с **Page Object Model** и **Builder Pattern** для тест-данных.

## ✨ Особенности

- 🎯 **Page Object Model** — чистая архитектура
- 🏗️ **Builder Pattern** — гибкая генерация данных (Faker.js)
- 🌍 **Global Setup** — авторизация один раз для всех тестов
- 🔍 **Надёжные локаторы** — `getByRole`, `getByLabel`
- 📊 **Полный HTML Report** — `npx playwright show-report`
- 💻 **WebStorm** + **GitHub Actions**

## 🛠️ Быстрый старт

```bash
# Клонировать
git clone https://github.com/skydmitr/Playwrigth-HRM.git
cd Playwrigth-HRM

# Установить зависимости
npm ci

# Запустить тесты (с state.json)
npm test

# С отчётом
npm run report

# Codegen для новых страниц
npx playwright codegen https://opensource-demo.orangehrmlive.com
