# Astronaut

_This is a starter template for static site generator [Astro](https://astro.build/)._

I'm a big fan of Astro, as it combines two things I really like: A component-based approach and zero client-side JavaScript! This template is pretty opinionated, as it's composed how I would set up my projects. But sharing is caring, so feel free to use it for your own projects or customise it. After cloning it, run `npm install` to install all necessary dependencies and then `npm start` to start your local dev server. Here are all the features:

## Absolute imports

Tired of imports looking like this?

```javascript
import Layout from "../../../../../layouts/Layout.astro";
```

Me too, which is why I'm using absolute imports to make it look nice and clean:

```javascript
import Layout from "@layouts/Layout.astro";
```

## CSS reset

I never start a project without Andy Bell's (more) modern CSS reset! It lays the foundation for what I'm about to do with Utopia's fluid responsive design. Click here for more info about these settings: [A (more) modern CSS reset](https://andy-bell.co.uk/a-more-modern-css-reset/)

## Custom fonts

Using system fonts is a safe and performant way to add some identity to your typography, but let's be honest: They're overused and quite boring. Which is why I like to use custom fonts, usually one for headlines and one for body text. You can of course always change them to Lobster or Papyrus, I won't judge.

## Fluid design

I need you to sit down for this one. You don't really need breakpoints to define your layout for mobile, tablet and desktop devices. How could you even anticipate what device will be used to gaze upon your beautiful website?

Wouldn't make it more sense if you had a fluid, yet robust design which works for every viewport? Which requires less code and no `breakpoints.css` nearing 1000 lines of code? Let me introduce you to [Utopia](https://utopia.fyi/), which is used to generate adaptive font sizes and spacing.

You should also check out [The ideal viewport doesn’t exist](https://viewports.fyi/) for a deep-dive into this topic. And while you're at it, have a look at [Be the browser’s mentor, not its micromanager.](https://buildexcellentwebsit.es/) as well.

## Pre-commit hooks

Committing to something can sometimes take a lot of effort. Committing code is no exception, but at least here we can pull out the safety net to soften our fall in case we made a mistake. When committing your changes, it's running `npm run build`, which will look for the following things in your project before building it:

- Errors
- Warnings
- Hints

When your pipeline is free of errors AND the build was successful, it'll commit your changes. You're welcome. 🤗

## Preference detection

This template automatically changes the theme based on your operating settings by utilizing `prefers-color-scheme`. It also checks if you prefer reduced motion via `prefers-reduced-motion`. Look and behold, the power of CSS!

## Prettier

I don't know about you, but if my code is not nicely formatted after hitting save, I'm starting to feel very weird. Which is why this comes with a Prettier configuration, in case you're using it. Or a you one of those people who do this manually?!

## Search engine optimization (SEO)

Predefined values for improved SEO can be found in `Layout.astro`. These settings have been my reliable companion for a couple of years now and I put a lot of research, work and testing into it.

## Security headers

Better safe than sorry, am I right? There are multiple ways to add security headers to your website and I decided to store them in a `netlify.toml` file, cause this website was deployed to (you guessed it) [Netlify](https://netlify.com/). It contains the following headers, feel free to adjust them to your needs:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Usability

I've added a bunch of handy utilities which will not only improve usability, but accessibility as well. Here's a list of them:

1. "Back to top" button
2. External link (showing icon)
3. Improved focus behaviour (thanks to [Stephanie Eckles](https://css-tricks.com/standardizing-focus-styles-with-css-custom-properties/) & [Adam Argyle](https://codepen.io/argyleink/pen/JjEzeLp))
4. Skip link

Very proud of the the `ExternalLink.astro` component, as it handles a couple of use cases:

- `aria-label` info for external link
- Adjustable font and icon size
- Lets you configure the `rel` attribute
