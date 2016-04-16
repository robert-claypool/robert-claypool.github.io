---
layout: post
title: How to Add a Windows Domain User to SQL Server as 'sysadmin'
date: 2013-03-15 12:31
tags: [programming, quick-tip, SQL, T-SQL]
---

{% highlight sql %}
USE master
GO
CREATE LOGIN [domain\username] FROM WINDOWS WITH DEFAULT_DATABASE = [Master]
GO
EXEC sp_addsrvrolemember @loginame=N'domain\username', @rolename=N'sysadmin'
GO
{% endhighlight %}

[msdn.microsoft.com/en-us/library/ms186320.aspx](https://msdn.microsoft.com/en-us/library/ms186320.aspx)
