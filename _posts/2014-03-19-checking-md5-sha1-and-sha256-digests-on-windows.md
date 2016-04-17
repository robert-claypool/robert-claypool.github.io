---
layout: post
title: Checking md5, sha1, and sha256 digests on Windows
date: 2014-03-19 15:49
tags: [digest, encryption, gpg, hash, Programming, quick tip]
---

Checking an installer's hash/digest is a good best practice, but
Windows doesn't have a built-in program for it. While PowerShell scripts can
do these calculations, [the commands are verbose](https://stackoverflow.com/a/10521162/23566)
and I don't like PowerShell anyway. Enter Gpg4win...

[Gpg4win](https://gpg4win.org/download.html) is a email and file encryption
package for Windows that includes the [Gnu Privacy Guard](https://www.gnupg.org).
It implements the OpenPGP standard and is widely used to sign, verify,
encrypt, and decrypt files.

`--print-md` is a command to calculate a hash using md5, sha1, sha256, and more:

* `gpg --print-md md5 .\setup.exe`
* `gpg --print-md sha1 .\setup.exe`
* `gpg --print-md sha256 .\setup.exe`

Or use the `*` parameter to show all formats:

* `gpg --print-md * .\setup.exe`
