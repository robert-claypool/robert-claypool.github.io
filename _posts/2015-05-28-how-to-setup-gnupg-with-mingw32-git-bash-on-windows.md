---
layout: post
title: How to setup GNUPG with MINGW32 (Git BASH) on Windows
date: 2015-05-28 13:13
tags: [Cryptography, git, gpg, quick tip]
---
In switching from Windows PowerShell to [Git Bash](https://git-for-windows.github.io/), I ran into this error:

{% highlight bash %}
gpg: keyblock resource 'c:/Users/Dev1/.gnupg\secring.gpg': file open error
gpg: keyblock resource 'c:/Users/Dev1/.gnupg\pubring.gpg': file open error
gpg: skipped "0x6af2bf57992f19ed": secret key not available
gpg: signing failed: secret key not available
error: gpg failed to sign the data
error: unable to sign the tag
{% endhighlight %}

`0x6af2bf57992f19ed` refers to <a href="http://pgp.mit.edu/pks/lookup?op=vindex&search=0x6AF2BF57992F19ED">my PGP key</a>, and BASH is not able to find it. PowerShell never has this problem, so apparently PowerShell searches the HOME directory and finds the GPG files in <code>c:/Users/Dev1/AppData/Roaming/gnupg</code> instead.

To setup the path for BASH, just [assign and export](https://stackoverflow.com/a/7411509/23566) GNUPGHOME to whatever it needs to be:

{% highlight bash %}
$ export GNUPGHOME="/c/Users/Dev1/AppData/Roaming/gnupg"
{% endhighlight %}

There you go!
