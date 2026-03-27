---
title: My experience running an AI agent inside a container
description: In 2026/03/27, I made an AI container image.
---

# My experience running an AI agent inside a container

Hello there, I'm _K-Chimi_, a hobby programmer from Japan.

In this article, I write my experiences on running an ai agent inside a container.

[Repository is here](https://github.com/k-chimi/agents-environment)

Let's go!

## Image Architecture

The ai container contains gemini-cli, and it depends on base image of debian with Nix.

Reason for Nix within the container, I thought containers are hard to save current workspace.

Because, Docker and Podman containers don't save data when remove the container by default. <br/>
And, Git isn't suitable to manage part of Linux's root filesystem.

Therefore, I chose to use Nix.

And, This image is based on debian, You can use apt instead of Nix.

Probably, The agent will use Nix correctly than me.

## Troubles

I ran into issues with setup permission for the agent home directory.

I did `chown -R` agent home directory in base image, But agent home directory is owned by root in gemini image.

I was confused, and forced agent home permission in gemini image.

I should relearn podman.
