---
layout: post
title: Public Key Encryption with OpenPGP (on Windows)
date: 2014-04-30 11:19
tags: [cryptography, encryption, gpg, pgp]
---

Here's a Windows command line example for `gpg` message encryption.

{% highlight batch %}
echo "Hi John," "Here's our admin info:" "uname=admin" "pw=2d!5-e9.e8:AA~/V" | gpg --encrypt --sign --armor -r john.doe@example.com --output c:\temp\message.txt
{% endhighlight %}

Install the open source [Gpg4win](https://gpg4win.org/download.html) to use gpg.
Gpg4win is a email and file encryption package for Windows that includes
the open source [Gnu Privacy Guard](https://www.gnupg.org/). It implements
the OpenPGP standard and is widely used to sign, verify, encrypt, and
decrypt data.
