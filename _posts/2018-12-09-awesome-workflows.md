---
layout: post
title: Awesome Workflows
date: 2018-12-09 12:55
tags: [workflows, code quality]
---

Here I will focus on tools and techniques almost any dev can adopt.

## Reduce The Friction Between Your Brain And Your Code

1.) Work on a machine that responds instantly to most of your commands.
**A slow machine kills productivity.**

2.) We constantly work with text, lots of text! Finding text quickly,
before short term memory loss, is a critical skill:

* Can I find all matches of `getState()` in 3 seconds?
* Can I delete all lines having `<span[\s]*data.+>.+<\/span>` without looking
into every file?

For this, learn tools like `grep` and `sed` plus regular expressions and IDE
shortcuts. I hated regex until I understood it, now it's like a super power.

3.) **Modal editors** (Vim, Emacs) have a steep learning curve, but their
payback is huge over a 20+ year career. Once you learn the meta-language
of Vim or Emacs, **macros** are just a few keystrokes away. Tasks like
refactoring are easier and less error prone.

4.) The mouse doesn't just slow us down, it interrupts our flow. Can you
**switch windows and launch programs** without a mouse?
Accessibility features of the OS are not only for disabled users. Learn
**shortcuts** for tasks you constantly do, like switching between an IDE
and browser.

5.) Adopt Infrastructure as Code (IaC): If our shared testing and production
resources are
[disposable](https://medium.com/@Joachim8675309/devops-concepts-pets-vs-cattle-2380b5aab313),
then we are forced to automate the processes which replace them. Why not
extend this principal to your local desktop? Use Docker locally as a kind of
[**dogfooding**](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) against
what DevOps does for production.

Source control your [**dotfiles**](https://github.com/robert-claypool/dotfiles)
and push more stuff into containers. [Cloud native](https://www.cncf.io/)
technologies are not just for the cloud. They also bring predictability and
resilience to a desktop environment - saving you time and possibly
eliminating "works on my machine" errors.

## Avoid Magic

Magic is when something works and I don't know why. It's fine for most of
what my computer is doing -- I don't know
[how a Google search *actually* works](https://github.com/alex/what-happens-when),
for example -- but I avoid magic for code and configurations I own.

One way to stamp out magic is to read **official documentation**. Often it's
surprisingly good!

Another way is to **use the terminal** for programs designed to be used on
the terminal. GUIs are great for visual tasks like 3-way merges, but
don't use a GUI for all Git tasks just because a few are confusing in the
terminal. The terminal gives direct access to inputs and outputs of the program
itself. This is
[The Unix Way](https://dev.to/gypsydave5/the-unix-way-or-why-you-actually-want-to-use-vim-3n8p).

## Document Why (And Sometimes How)

I have, many times, changed my mind when writing code-level documentation.
To give an example:

{% highlight JavaScript %}
// We sync the payoad with local storage at this point because it's already
// filtered down to items which should be persisted across page loads.
{% endhighlight %}

* Do we really want this data to remain across page loads?
* What if the filter settings are changed?

Writing [useful comments]({% post_url 2017-09-01-on-writing-useful-comments %})
forces me to think through the implementation enough to explain it to others
and maybe convince them it's a good idea. I try to imagine my comments
are **written for a skeptic** -- for someone who assumes I'm bad at my job
and will want to rewrite my code.

If my comments can get the next developer into the same headspace as I was
in when writing the code, then they are less likely to dismiss all my hard
work and redo it just because they don't understand it. In comments,
try to demonstrate that, yes, you considered alternate implementations and
this one you picked was reasonable and good. If that's too hard, then maybe
your implementation is *not* reasonable, or *not* good, or you don't yet know
enough to make that determination.
