---
layout: post
title: Mecurial glob Patterns, * vs **
date: 2012-10-16 11:19
tags: [Mecurial, Mercurial, Programming, quick-tip]
---

Mercurial supports the "\*\*" syntax extension; it matches any string
*across path separators* while "\*" does not.

An Example in PowerShell:

{% highlight powershell %}
PS C:\hg> hg init my-repo
PS C:\hg> cd .\my-repo
PS C:\hg\my-repo> New-Item file1.txt -type file

    Directory: C:\hg\my-repo

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
-a---        10/16/2012  11:40 AM          0 file1.txt

PS C:\hg\my-repo> New-Item file2.txt -type file

    Directory: C:\hg\my-repo

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
-a---        10/16/2012  11:40 AM          0 file2.txt

PS C:\hg\my-repo> hg st
? file1.txt
? file2.txt
PS C:\hg\my-repo> hg add --exclude "**2**" # This will not add file2.txt
adding file1.txt
PS C:\hg\my-repo> hg add --exclude "*2*" # This will also not add file2.txt, because we are in the same directory!
PS C:\hg\my-repo> # Create another directory...
PS C:\hg\my-repo> New-Item my-subdirectory -type directory

    Directory: C:\hg\my-repo

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        10/16/2012  11:45 AM            my-subdirectory

PS C:\hg\my-repo> cd .\my-subdirectory
PS C:\hg\my-repo\my-subdirectory> hg add --exclude "*2*" # This will add file2.txt.  The pattern does not match because
we are NOT in the same directory!
adding ..\file2.txt
PS C:\hg\my-repo\my-subdirectory> hg st
A file1.txt
A file2.txt
PS C:\hg\my-repo\my-subdirectory>
{% endhighlight %}
