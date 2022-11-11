---
title: "A guide to Input methods"
description: "Comprehensive guide to Input methods"
url: /articles/input-methods
author: Ashik Salahudeen
---

> This article is a work in progress. It currently tells you how to enable Malayalam in Ubuntu and Fedora.

- [Terminology](#terminology)
  - [Fonts](#fonts)
  - [Input methods](#input-methods)
  - [Keyboard layouts](#keyboard-layouts)
  - [Localisation](#localisation)
- [How to : Using Malayalam on GNU/Linux](#how-to--using-malayalam-on-gnulinux)
  - [Fedora](#fedora)
    - [Enabling Malayalam fonts](#enabling-malayalam-fonts)
    - [Enabling Malayalam input](#enabling-malayalam-input)
    - [Enabling Malayalam language UI](#enabling-malayalam-language-ui)
  - [Ubuntu](#ubuntu)
    - [Enabling Malayalam fonts in Ubuntu](#enabling-malayalam-fonts-in-ubuntu)
    - [Enabling Malayalam input in Ubuntu](#enabling-malayalam-input-in-ubuntu)
    - [Enabling Malayalam language UI in Ubuntu](#enabling-malayalam-language-ui-in-ubuntu)

## Terminology

Before we go into details, it would be good to explain some terminology. You can skip it entirely if you are not interested in details.

In general, getting a language to work in an operating system requires that we take care of the following aspects.

1. Fonts (Displaying the language).
2. Input (Getting the computers to accept keystrokes in the chosen language).
3. Localisation (Displaying the operating systems' interface in the language).

### Fonts

Fonts in a computer are files that contain graphic data about one or more sets of related characters (English, Malayalam etc).

The graphical data in the file determines how the computers draws a letter (or combinations of letters) on the screen.

A font file can contain many languages, or only one.

If you ask the computer's operating system to use a particular font and its file does not contain a certain language, the computer will fall back to pre-set defaults.

### Input methods

"Input method" is the generic name for software that interprets the keystrokes you make and translate them into appropriate Unicode characters.

The following image roughly explains what an input method does.

![img](./images/Input_Methods.png)

Almost all operating systems have an input method application for typing characters other than English.

Windows has a built-in input method, but there are Free and Open Source alternatives that provide better facilities such as Keyman.

Mac OS also has a built-in input method. Keyman is available for Mac OS too.

GNU/Linux systems have many to choose from. The most commonly used ones are "ibus" and "fcitx"

Android also has many input methods to choose from. We support SMC's Indic Keyboard.

### Keyboard layouts

Keyboard layouts are software schemes that tell input methods how to interpret individual keystrokes or combinations.

For example, if you want the result of typing "a" in a keyboard to be translated to "അ" then that "mapping" is stored in a keyboard layout file that the input method software can understand.

The Input method sits between a program and the keyboard, takes the keystrokes, then looks at the character and its target mapping on the keyboard layout. It then gives the resulting characters to the program that receives the input, like a text editor.

There are several keyboard layouts for Malayalam available on most operating systems.

- Swanalekha (Transliteration)
- Inscript (India government's standard layout)
- Lalitha (Transliteration)
- Mozhi (Transliteration)
- Remington (Typewriter scheme)

### Localisation

Localisation (often shortened to L10n) is the process of translating the UI presented by the computer into the user's language. Even though people interact with computers in English, some would prefer their mother tongue.

The setting that we choose to set the language of the operationg system is called "Locale" or "Language". Most applications and operating systems support more than one "locale" or language. Large populations in other countries do have entire operationg systems and interfaces available in their locale. E.g: German, Arabic etc.

As far as we know,

- Windows has a Malayalam locale and language pack.
- GNU/Linux distributions have KDE and GNOME Desktops that support Malayalam locales.
- Debian distribution has an installer in Malayalam.
- Mac OS has no Malayalam user interface support (unverified).
- Android phones have Malayalam user interfaces.
- Firefox on Androids have Malayalam user interfaces.

Even if your operating system is set to use say, Malayalam, not all programs you install would have user interfaces translated to Malayalam and will fall back to English.

These days, we use web applications a lot, for example, Google search or GMail, and they can detect the operating systems' locale and show an appropriately translated interface.

The rest of the document is split up into sections, each describing one operating system or application.

## How to : Using Malayalam on GNU/Linux

Most major distributions come with language/localistation support these days. Usually installing them is enough, but for Malayalam's transliteration schemes and fonts, some additional configuration is needed.

The following is mostly screenshots of current editions of Fedora, Ubuntu and Debian. Make sure you have updated versions of your OS before you start.

### Fedora

The following instructions are made from a Fedora 31 default installation.

#### Enabling Malayalam fonts

It is highly likely that Malayalam fonts are already installed. If not, they are available from Software centre. Launch it by clicking on its icon and just search for "smc-"

You can install it from there.

![img](./images/fedora.31/font_installation.png)

#### Enabling Malayalam input

Click "Setting > Region and Language > Languages".

![img](./images/fedora.31/region_and_language_screen.png)

Click the "+" sign under "Input Sources"

![img](./images/fedora.31/input_sources_menu_1.png)

Now click on the "more" button, it looks like three vertical dots.

Search for "Malayalam"

![img](./images/fedora.31/input_sources_menu_2.png)

Click on "Malayalam" menu item to reveal additional options.

![img](./images/fedora.31/input_sources_menu_3.png)

Click on the layout you want and click Add. The following screenshot shows selecting "Swanalekha", a transliteration (Manglish) layout.

![img](./images/fedora.31/input_sources_menu_4.png)

Once you add it, it should be visible under "Input Sources" in "Setting > Region and Language > Languages".

![img](./images/fedora.31/input_sources_menu_5.png)

To test, launch a text editor, and click on the input switcher as shown in screenshot. Select the layout you want. You can see Swanalekha in the list in the screenshot.

![img](./images/fedora.31/input_method_switching_1.png)

Now type in the editor. Be sure to choose a font to your liking. The screenshot shows text in Meera font.

![img](./images/fedora.31/input_method_switching_2.png)

#### Enabling Malayalam language UI

Click "Setting > Region and Language > Languages".

![img](./images/fedora.31/region_and_language_screen.png)

From the menu that pops up, scroll down to the end and find the "more" button. It looks like three vertical dots.

![img](./images/fedora.31/language_selection_screen_1.png)

Search for "Malayalam". You should see the following screen. Click on the "Malayalam" menu item as shown.

![img](./images/fedora.31/language_selection_screen_2.png)

This will enable the Malayalam UI. You'd need to restart your session (not the computer itself). Clicking on the restart button will log you out.

![img](./images/fedora.31/language_selection_screen_3.png)

You should be able to use Malayalam user interface when you log back in.

### Ubuntu

#### Enabling Malayalam fonts in Ubuntu

It is highly likely that Malayalam fonts are already installed. If not, they are available from Software centre. Launch it by clicking on its icon and just search for "fonts-smc".

![img](./images/ubuntu.20.04/software_centre_fonts.png)

Due to a bug in packaging, some fonts such as Manjari are not shown this way, even though they are installed. To verify, run the following command from a Terminal.

```lang=bash
apt search fonts-smc-
```

![img](./images/ubuntu.20.04/smc_fonts_listing_cli.png)

#### Enabling Malayalam input in Ubuntu

Ubuntu does not have all malayalam inputs by default. To fix this, run the following command in a Terminal.

```lang=bash
sudo apt install ibus-m17n m17n-db
```

![img](./images/ubuntu.20.04/install_m17n_ibus.png)

Now logout and log back in.

Click "Setting > Region and Language > Languages".

![img](./images/ubuntu.20.04/region_and_language_screen.png)

Click the "+" sign under "Input Sources".

![img](./images/ubuntu.20.04/input_sources_menu_1.png)

Click on the "more" button, which looks like three vertical dots.

![img](./images/ubuntu.20.04/input_sources_menu_2.png)

Now search for "Malayalam" and the list should only show "Others".

![img](./images/ubuntu.20.04/input_sources_menu_3.png)

Clicking on "Others" will reveal all the Malayalam input. Select whatever you want and click "Add". Here "Swanalekha", a transliteration input is chosen.

![img](./images/ubuntu.20.04/input_sources_menu_4.png)

Your screen should now look like below.

![img](./images/ubuntu.20.04/input_sources_menu_5.png)

To test, launch a text editor and select "Swanalekha" (or whatever you chose earlier) from the input switcher.

![img](./images/ubuntu.20.04/input_method_switching_1.png)

Now try typing in something

![img](./images/ubuntu.20.04/input_method_switching_2.png)

#### Enabling Malayalam language UI in Ubuntu

Click "Setting > Region and Language > Manage installed languages ".

![img](./images/ubuntu.20.04/language_support_1.png)

You can click "Remind me later". Otherwise you can install the additional recommendations and return to this screen.

![img](./images/ubuntu.20.04/language_support_2.png)

Now click on "Install/Remove languages" and scroll till you find Malayalam.

![img](./images/ubuntu.20.04/language_support_3.png)

Make sure the "Malayalam" is selected. Now click "Apply". It will ask your password for permission to install language support.

Once it finishes, make sure മലയാളം is visible in the list as per below.

![img](./images/ubuntu.20.04/language_support_4.png)

Now click close, and you should be back at Region and Language screen. Close this screen, and launch "Settings" again, and click on "Region and Languages > Languages".

![img](./images/ubuntu.20.04/language_support_5.png)

Select "മലയാളം" in the screen and click on the "Select" button.

This will enable the Malayalam UI. You'd need to restart your session (not the computer itself). Clicking on the restart button will log you out.

![img](./images/ubuntu.20.04/language_support_6.png)

When you log back in, you should see Malayalam user interface.
