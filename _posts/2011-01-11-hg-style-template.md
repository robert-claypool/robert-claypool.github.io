---
layout: post
title: HG Style Template
date: 2011-01-11 22:15
tags: [Mercurial, programming, quick-tip]
---
The hg red-bean guide
[has examples](http://hgbook.red-bean.com/read/customizing-the-output-of-mercurial.html)
to customize the output of Mecurial. It's easy to create your own.

Here's one of mine...

{% highlight powershell %}
# This template prints the files included in each changeset.
changeset = "{node|short}: {desc}\n{files}\n"
file = "  {file}\n"
{% endhighlight %}

Which formats the output like this...

{% highlight powershell %}
e9f2c463e105: increment version for push
  setup.py

98c2272ab7ff: apparently sdist was broken.
repair MANIFEST to include ez_setup properly
  MANIFEST
  MANIFEST.in
  setup.py
{% endhighlight %}
