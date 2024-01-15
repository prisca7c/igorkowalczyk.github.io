![Portfolio header](https://github.com/IgorKowalczyk/igorkowalczyk.github.io/assets/49127376/59642eac-4ac5-4d03-931c-2513d46655d3)

<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/igorkowalczyk.github.io/blob/master/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/igorkowalczyk.github.io?color=%2334D058&logo=github&style=flat-square&label=License">
  </a>
  <a aria-label="Version" href="https://github.com/igorkowalczyk/igorkowalczyk.github.io/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/igorkowalczyk.github.io?color=%2334D058&logo=github&style=flat-square&label=Version">
  </a>
  <a aria-label="Discord" href="https://igorkowalczyk.dev/discord">
    <img src="https://img.shields.io/discord/695282860399001640?color=%2334D058&logo=discord&style=flat-square&logoColor=fff&label=Discord">
  </a>
</div>

---

<!-- prettier-ignore-start -->
> [!IMPORTANT]
> **Remember to change pre-defined values in `config.js`** file (like `name`, `description`, `socials` etc.) before deploying your website! Change them in your forked repository.
<!-- prettier-ignore-end -->

## 🖥️ Hosting

### ▲ Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Figorkowalczyk%2Figorkowalczyk.github.io&env=GITHUB_ACCESS_TOKEN,DISCORD_WEBHOOK_URL&envDescription=Environment%20Variables%20Docs&envLink=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.github.io%23-self-hosting&project-name=portfolio&repo-name=igorkowalczyk-portfolio&demo-title=Example%20deploy&demo-description=Example%20production%20deploy%20from%20Github%20Repository&demo-url=https%3A%2F%2Figorkowalczyk.dev&demo-image=https%3A%2F%2Fi.imgur.com%2FT4VsRuy.png)

1. Click on the button above or go to [Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Figorkowalczyk%2Figorkowalczyk.github.io&env=GITHUB_ACCESS_TOKEN,DISCORD_WEBHOOK_URL&envDescription=Environment%20Variables%20Docs&envLink=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.github.io%23-self-hosting&project-name=portfolio&repo-name=igorkowalczyk-portfolio&demo-title=Example%20deploy&demo-description=Example%20production%20deploy%20from%20Github%20Repository&demo-url=https%3A%2F%2Figorkowalczyk.dev&demo-image=https%3A%2F%2Fi.imgur.com%2FT4VsRuy.png)
2. Fill `GITHUB_ACCESS_TOKEN` with your GitHub access token with public repositories permission
3. Fill `DISCORD_WEBHOOK_URL` with your Discord Webhook URL for contact form
4. Click on `Deploy` button and wait for deploy
5. Click on `Visit` button to see your deployed website
6. In your forked repository change pre-defined values in `config.js` file (like `name`, `description`, `socials` etc.)

### 🔩 Self Hosting

1. Clone [this repository](https://github.com/igorkowalczyk/igorkowalczyk.github.io) `git clone https://github.com/IgorKowalczyk/igorkowalczyk.github.io.git`
2. Run `pnpm i` to install all dependencies,
3. Copy `.env.example` file and rename it to `.env`
4. In `.env` file set this values:
   - `GITHUB_ACCESS_TOKEN` - Your GitHub access token with public repositories permission
   - `DISCORD_WEBHOOK_URL` - Discord Webhook URL for contact form
5. Edit pre-defined values in `config.js` file (like `name`, `description`, `socials` etc.)
6. Run `pnpm build` to build the project or `pnpm dev` to run the project in development mode.

> [!NOTE]
> You can also use `npm` or `yarn` instead of `pnpm`

## 📝 `.env` configuration

| Variable              | Description                                                      | Required |
| --------------------- | ---------------------------------------------------------------- | -------- |
| `GITHUB_ACCESS_TOKEN` | Your GitHub access token with public repositories permission     | `☑️ Yes` |
| `DISCORD_WEBHOOK_URL` | Discord Webhook URL for contact form                             | `☑️ Yes` |
| `HOTJAR_ID`           | Your [Hotjar](https://www.hotjar.com) website ID (for analytics) | `❌ No`  |

> [!NOTE]
> You can set these **optional** values:
>
> - `HOTJAR_ID` - Your [Hotjar](https://www.hotjar.com) website ID (for analytics)

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/igorkowalczyk.github.io/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repository `git clone https://github.com/igorkowalczyk/igorkowalczyk.github.io`
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/igorkowalczyk.github.io/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/igorkowalczyk.github.io/blob/master/license.md) file for details

