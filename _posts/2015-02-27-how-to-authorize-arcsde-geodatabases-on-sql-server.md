---
layout: post
title: How to authorize ArcSDE geodatabases on SQL Server
date: 2015-02-27 08:55
tags: [ArcGIS, ArcSDE, keycodes, SQL]
---

ArcSDE stores authorization/license info in a table called `SDE_server_config`.
Use the template below to update this table when a new authorization is needed:

{% highlight sql %}
UPDATE [MyGDB].[dbo].[SDE_server_config]
SET [char_prop_value] = 'arcsdeserver,101,ecp000000000,31-dec-2016,JA4FAKE3RA9DJLMAP105'
WHERE prop_name = 'AUTH_KEY'
{% endhighlight %}

The keycode above is *fake*. A real code can be found in the `keycodes` file
after you authorize ArcGIS Server. This file is typically in
`\\Program Files\ESRI\License<release>\sysgen` on Windows or
`/arcgis/server/framework/runtime/.wine/drive_c/Program Files/ESRI/License<release>/sysgen`
on Linux.
