---
title: "Proxmox"
date: "5-14-2025"
---

## Initial Discovery

I had an Arch Linux server running a whole bunch of VM shit on it and I nuked it after buying a 3080 and trying to install drivers (oops ; \). So I went and installed the trusty old Ubuntu to make up for the fumblings of my inexperience in Arch, auto-detect drivers, GUI-install complicated package yes please.

I used it for a while but wanted a true home server feel for that PC as it is not my main and was used as a NAS and small server for little workloads (ex: [Discord Bot](https://github.com/TeejMcSteez/NeilDegrasseDiscordBot/)) but I wanted to explore things like more VM's, more (but easier) control, and easier remote access. I had heard about Proxmox for a while and decided to test it out.

## Intro

Installing was a bit of a problem, that server runs an i7-7400 with a 3080 and 2 HDD's so probing hardware takes forever. I had to change the install config to run nomodeset to ensure it booted before installing drivers otherwise it would've taken ages.

Otherwise installing was great after that problem was fixed it booted and started installing GRUB and so on and so forth. Finally loaded into the terminal and could log into the web UI on my main PC.

## Current VM's 

- Ubuntu w/ Jellyfin
- TrueNAS Scale
- Home Assistant (.qcow2)

### Ubuntu + Jellyfin

The first VM I installed as Ubuntu as it was the easiest, familiar, and good to see how the software platform works. To also check network stuff I decided to intall Jellyfin with Docker.

Getting it up and running was easy enough with GPT and the docs/Reddit all in all though I probably will not be using jellyfin as it is a little too fragile for my liking.

For instance to test I wanted it to read some videos and photos of my NAS but those contain mp4's alongside .MOV and .HEIC files. It has issues parsing things and overall playing videos.

I don't know if this was due to the lack of access/bandwidth to the NAS server or if FFMPEG just crashes in their implementation for unsupported file extensions.

However, I really don't have any media to use it for as most of my media is stored behind a lovely DRM (Amazon, Youtube, etc.) so this was more proof of concept that I could connect to the WebUI. Might debug further to see what the actual issue is and to see if I can fix it but it was probably user configuration error. 

### TrueNAS Scale

Simple, effective, and easy just like TrueNAS Core was but more modern. Also the WebUI looks similar but again just more modern and has overall been fine and effective for my NAS solution.

### Home Assistant

This has been my favorite project so far in Proxmox, I have a lot of smart home devices and many of them use there own app or control which leads to my phone having a folder just dedicated to IoT apps.

#### Current Layout

| Device | Type |
|--------|------|
| Zigbee Connector 3 | Connection Interface |
| Phillips Bulb | Lamp |
| Phillips Bulb | Desk Lamp |
| ESP32+DHT11+ESPHome | Sensor |
| Shelly Plug US | Sensor (Main PC) |
| Shelly Plug US | Sensor (Server PC) |
| TPLink Tapo Outdoor Security Camera | Camera |
| Ring Doorbell Camera | Camera |
| Epson Printer | Sensor |
| Deco X25 | Sensor |
| Iphones (Mobile App) | Sensor |

#### Automations

1. When I leave or enter the house zone the desk lamp turns on and off respectively want to change to be actuated by a door sensor using ultrasonic sensors, ESP's, and ESPHome. Currently, it is actuated upon my iPhones geocoded location.

2. When the sun sets it turns on the living room lamp and when the sun rises or it is 6:30am it turns the lamp off. People stay up late in my household which is why I have it turn on and only turn off for super early in the morning or sunrise when you don't need it anymore.

## Conclusion

I will be using Proxmox for the foreseeable future as it is a powerful virtualization platform with many features that I both will and won't use. The ability to swap in and out operating systems within a well-built functional operating system is highly productive versus fighting OSes to run platforms within them. A true drop in operating system that works with everything because it is a true "bare metal" virtualization OS and I love it.

```Use proxmox when you don't know what you want to use for x solution because it runs it all with ease of change.```
