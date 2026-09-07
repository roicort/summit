---
title: Astro for a greener web
description: What Astro and Starlight teach us about page weight, device power, caching, and digital emissions.
date: 2026-10-15
day: 2
startsAt: '13:00'
endsAt: '13:45'
room: studio
speakers:
  - tomas-alvarez
tags:
  - Sustainable web
  - Technology
  - Climate action
---

The web has a material footprint. Estimates place the internet industry somewhere between 2% and 4% of global carbon emissions, roughly comparable to the airline industry. Every page asks data centers, networks, and personal devices to do work, and that work uses energy. The most responsible digital products begin by asking how much of that work is truly necessary.

Astro offers a useful direction for that conversation. Starlight, Astro's documentation theme, reports that a first visit to its site transfers less than 50 KB of compressed data. With a good caching strategy, subsequent navigations can transfer around 10 KB. That is a small fraction of the more than 2,000 KB median web page measured by the HTTP Archive in April 2023.

The architecture helps make that possible. Astro renders content as HTML by default and sends JavaScript only where an interaction needs it. Its Islands model lets interactive components load zero client-side JavaScript until they are explicitly hydrated. That matters because parsing and compiling JavaScript can take more than 30 times longer than processing a JPEG image of the same size, adding work for the user's device.

The numbers are encouraging, but they need context. The Website Carbon Calculator measured the Starlight site at 0.01 g of CO2 per page visit and cleaner than 98% of tested pages. The same page compares similar documentation sites, not every kind of website, and a framework alone cannot guarantee the result. Images, analytics, video embeds, hosting, traffic, and caching strategy all change the footprint.

The practical work is ours: optimize images with Astro's asset tools, avoid unnecessary animation, defer video until a person asks for it, keep analytics lightweight, set long-lived cache headers for immutable assets, and choose hosting powered by renewable energy where possible. Measure the result with tools such as the [Website Carbon Calculator](https://www.websitecarbon.com/), [GreenFrame](https://greenframe.io/), [Ecograder](https://ecograder.com/), or [WebPageTest Carbon Control](https://www.webpagetest.org/carbon-control/).

At Summit, Astro is a useful example of a broader principle: a greener web is built from sensible defaults and many modest decisions, repeated across every page and every release. Astro does not solve digital emissions by itself, but it makes a lighter starting point feel practical.

Read the full [Astro Starlight guide to environmental impact](https://starlight.astro.build/environmental-impact/).
