---
layout: post
title: Install ArcGIS at C:\ArcGIS
date: 2012-06-18 15:18
tags: [ArcGIS, Oracle 10g, Uncategorized]
---

> Error: Failed to connect to the specified server.
> Underlying DBMS error
> [ORA-12154: TNS:could not resolve the connect identifier specified. No extended error]

"Install ArcGIS in a folder like C:\ArcGIS"... This is advice I have heard
yet always ignored. It seemed like dumb advice; if Windows has
dedicated folders for program files, then that's where program files should
go, right?

Well, today I found the issue when an ArcGIS installation at
`C:\Program Files (x86)` wasted about 3 hours of my afternoon.

`Error: Failed to connect to the specified server`: This error can be caused
by having *parentheses* in the ArcGIS installation path. You will see this
in ArcCatalog when trying to connect to an Oracle database with
the Oracle 10.2.0.1 32-bit client on a 64-bit machine.

If the ArcGIS installation path has parentheses, the Oracle 10g 32-bit
client (version 10.2.0.1) will fail.

More info here: [support.esri.com/knowledgebase/techarticles/detail/31875](http://support.esri.com/knowledgebase/techarticles/detail/31875)
