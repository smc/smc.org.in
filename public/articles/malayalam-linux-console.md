---
title: "Broken rendering in Linux console"
url: /articles/malayalam-linux-console
author: Santhosh Thottingal
---

Most of the linux console(also knowns as terminal) applications often render Malayalam in broken way. This is because of missing complex script rendering support. Malayalam is one of the complex script languages in the world.

An exception for this is KDE's [Konsole][1]. It can render Malayalam without much issues(though not perfect). This feature was [broken][2] in version 18.08 and got [fixed][2] again in 20.08 version onwards.

[1]: https://kde.org/applications/en/system/org.kde.konsole
[2]: https://bugs.kde.org/show_bug.cgi?id=401094
