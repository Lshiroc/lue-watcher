# LUE Watcher

Utility to help analyze behavioural user actions

[![npm version](https://img.shields.io/npm/v/lue-watcher.svg?style=flat-square)](https://www.npmjs.org/package/lue-watcher)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=lue-watcher&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=lue-watcher)
[![npm downloads](https://img.shields.io/npm/dm/lue-watcher.svg?style=flat-square)](https://npm-stat.com/charts.html?package=lue-watcher)

## Table of Contents

  - [Structure](#structure)
  - [Purpose](#purpose)
  - [Goal](#goal)

## Structure

This monorepo currently contains:
- `client` which will be the main website for LUE and an example on how to use the lue-watcher package
- `lue` which contains the main npm package for LUE
- `server` which contains the backend used for `client` which also supports websocket that lue-watcher requires

## Purpose

Main purpose of LUE is to propose an open-source solution to allow website owners to records their user's actions.

I want to allow developer to build their own solutions using this package.

## Goal

My current goal with this project is to solidifiy the base of the lue-watcher package and make a website for lue which will be an example on how to use the lue-watcher.
