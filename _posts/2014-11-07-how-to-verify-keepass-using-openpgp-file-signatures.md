---
layout: post
title: How to Verify KeePass Installers Using OpenPGP File Signatures
date: 2014-11-07 07:00
tags: [encryption, KeePass, pgp]
---

Let's say you have an installer, and before you run it, you'd
like to prove it was packaged by a developer you trust. It's not enough to
download from the app's official download page... maybe the server was
hacked, maybe someone is rerouting your traffic... To better
verify the source of this installer, use PGP's
[web of trust](https://en.wikipedia.org/wiki/Web_of_trust):
Provided you have the developer's public key and no reason to
think his *private* key was compromised, then you can
authenticate the file as his.

Since KeePass is a program to store passwords, it's one
we ought to verify and I'll use it as an example:

1.\ [Here's the official download page](http://keepass.info/download.html).
The download buttons redirects to SourceForge.

2.\ Now [go to the file signatures page](http://keepass.info/integrity_sig.html)
and download your file's corresponding key. I'm going to install
`KeePass-2.28-Setup.exe`, so I downloaded `KeePass-2.28-Setup.exe.asc`

Take note of the developer's public key. This is the public identity that
will be embedded in files they sign. For KeePass, the developer's name
is '`Dominik Reichl`' and his key fingerprint
is '`2171 BEEA D0DD 92A1 8065 5626 DCCA A5B3 FEB7 C7BC`'.

His key looks like this:

{% highlight text %}
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1.4.7 (MingW32)

mQGiBEbSjVQRBAC3IxVUWORso25
[ blah blah blah blah ]
NzoOW+vC+qtcam37/J/3PiWA=
=KcOE
-----END PGP PUBLIC KEY BLOCK-----
{% endhighlight %}

... without the 'blah blah blah', of course.

Here we assume that anything signed by this key was signed by the guy
Dominik Reichl whom we trust for KeePass installers.  If that's confusing,
see Wikipedia's [web of trust](https://en.wikipedia.org/wiki/Web_of_trust).

Encryption is not magic -- it can't tell you if someone forced Dominik to
sign a malicious file. It can't tell you that he keeps his key safe or that
he is trustworthy to begin with. Encryption can only prove that this
particular file was signed by someone who had access to "Dominik"'s private
key. I put his name in scare quotes because "Dominik" could be
a pseudonym, or a group, etc. This part of public key cryptography seems
to confuse a lot of people. Anyway...

3.\ The last step is to verify the file.  I will use Windows PowerShell:

{% highlight powershell %}
PS C:\Users\rc\Downloads> gpg --verify .\KeePass-2.28-Setup.exe.asc .\KeePass-2.28-Setup.exe
gpg: Signature made 10/07/14 11:11:53 Central Daylight Time using DSA key ID FEB7C7BC
gpg: Good signature from "Dominik Reichl <dominik.reichl@gmx.de>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 2171 BEEA D0DD 92A1 8065  5626 DCCA A5B3 FEB7 C7BC
PS C:\Users\rc\Downloads>
{% endhighlight %}

I've yet to sign Dominik's key, so `WARNING: This key is not certified with
a trusted signature!` reminds me that his key is not part of my web of trust.
Should I ever want to add his key, I would ask him to tell me the fingerprint
in person, over the phone, or in some other offline communication. Then I have
a real world identity to go with that key.
