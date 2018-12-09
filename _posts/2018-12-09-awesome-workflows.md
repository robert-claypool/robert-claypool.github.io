---
layout: post
title: Awesome Workflows
date: 2018-12-09 12:55
tags: [workflows, code quality]
---

I love software development for its blend of art and science. While design
patterns train us to see elegant, *artful solutions*, debugging and
troubleshooting are constant reminders of the *exacting nature* of machines we
try to control.

Successful developers are both skillful and knowledgeable, but often
overlooked is the importance of their *environment*. It may not matter how
much you know if you can't focus, or if your team lead forces the wrong
technology stack on everyone else. Unfortunately, it seems most software
devs have little control over their physical work environment -- they
commute long distances only to enter a noisy office rife with a dozen
interruptions throughout the day -- but when it comes to workflow and dev
environment, there usually is a lot of flexibility.

Here I will focus on tools and techniques almost any dev can adopt.
The workflows I describe are not just good in theory; they are changes
which have made the most impact on my own productivity and work happiness
since around 2010.

## Goal: Reduce The Friction Between Your Brain And Your Code

1.) If at all possible, work on a machine which responds instantly to most of
your commands. **A slow machine kills productivity.**

2.) We constantly work with text, lots of text! Our ability to find text
quickly, before short term memory is lost, is critical:

* Can I find all instances of `getState()` in 3 seconds?
* Can I delete all lines having `<span[\s]*data.+>.+<\/span>` in 15 seconds?
* Can I drop to the bottom of a 7000 line file using muscle memory, without
  hardly thinking?

For this, learn tools like `grep` and `sed` plus regular expressions and IDE
shortcuts. I hated regex until I understood it. Now it's like a butler
available at any moment to fetch whatever I need.

3.) **Modal editors** (Vim, Emacs) have a steep learning curve, but their
payback is enormous over a 20+ year career. Once you learn the meta-language
of Vim or Emacs, **macros** are always just a few keystrokes away. Tasks like
refactoring are easier, and dare I say fun! Manual repetition of complex
editing sequences is boring and error prone, but writing a macro is a fun
little mini-challenge that pays off immediately when you run it.

4.) The mouse doesn't just slow us down, it interrupts our flow. Can you
**switch windows and launch programs** without clicking on the screen?
Accessibility features of the OS are not only for disabled users! Learn
**shortcuts** for tasks you constantly do, like switching between an IDE
and browser.

5.) A big push recently has been on Infrastructure as Code (IaC), and for good
reason: If our shared testing and production resources are
[disposable](https://medium.com/@Joachim8675309/devops-concepts-pets-vs-cattle-2380b5aab313),
then we are forced to automate the processes which replace them. Why not
extend this principal to your local desktop? Use tools
like Docker and Kubernetes locally as a kind of
[**dogfooding**](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) against
what DevOps is doing in production.

Source control your [**dotfiles**](https://github.com/robert-claypool/dotfiles)
and push more stuff into containers. [Cloud native](https://www.cncf.io/)
technologies are not just for the cloud. They also bring predictability and
resilience to a desktop environment - saving you time and possibly
eliminating "works on my machine" errors.

## Goal: Avoid Magic

Magic is when something works and I don't know why. It's fine for most of
what my computer is doing -- I don't know
[how a Google search *actually* works](https://github.com/alex/what-happens-when),
for example -- but we should avoid magic for the code and configurations we
write. My latest font-end project has `node_modules` with 50ish
dependencies that have dependencies that have dependencies. Do I understand
them all? No, magic abounds! But as much as possible, I limit this
craziness and understand at least how the build system converts everything
into bundles that make my app.

One way to stamp out magic is to read **official documentation**. Often it's
surprisingly good!

Another way is to **use the terminal** for programs designed to be used on
the terminal. GUIs are great for very visual tasks, e.g. 3-way merges, but
don't use a GUI for all Git tasks just because a few are confusing in the
terminal. The terminal gives direct access to inputs and outputs of the program
itself. This leads to powerful **composeability**: The heart of
[The Unix Way](https://dev.to/gypsydave5/the-unix-way-or-why-you-actually-want-to-use-vim-3n8p).

## Goal: Document Why (And Sometimes How)

I have, many times, changed my mind when writing code-level documentation.
To give an example:

{% highlight JavaScript %}
// We sync the payoad with local storage at this point because it's already
// filtered down to items which should be persisted across page loads.
{% endhighlight %}

* Do we really want this data to remain across page loads?
* What if the filter settings are changed?
* Local storage or session storage, am I sure?

Writing useful comments forces me to think through the implementation
enough to explain it to others and maybe convince them it's a good idea.
I try to imagine my comments are **written for a skeptic**;
for someone who assumes I'm bad at my job and will want to rewrite my code.

If my comments can get the next developer into the same "head space" as I was
in when writing the code, then they are less likely to dismiss all my hard
work and redo it just because they don't understand it. In comments,
try to demonstrate that, yes, you considered alternate implementations and
this one you picked was reasonable and good. If that's too hard, then maybe
your implementation is *not* reasonable, or *not* good, or you don't yet know
enough to make that determination.

## Goal: Have Peers Review Your Code

If my code is flawless and awesome, then asking for a review lets
me show off. If my code is flawed, then a review might catch the flaws.

Teams don't practice code reviews because (1) they're bad at Git
or (2) managers are pushing for a stupid, unrealistic schedule
or (3) the devs wrongly expect reviews to take a lot of time and effort.

There are other reasons, like lack of trust, but let's examine just these
three:

1.) Code reviews are easier if I have mastered **the fundamentals of Git**.
Most of the time, I won't need to pull down a topic branch to
run it locally or rebase conflicting changes, but when I do, a mastery
of Git makes it a breeze.

2.) If project managers are pushing so much that a few hours
on code review is not possible, then the project is **already at risk**.
Project managers won't say, "skip the review", but they will
say, "the demo is at 4pm" (which might imply, "skip the review").
I don't have a one-liner advice to fix this, sorry.

3.) Code reviews are usually easy (think: 30 seconds). If I change an
Nginx config to add `X-Forwarded-For`, and I include a comment on
why `X-Forwarded-For` is needed, then you can review and accept my
pull request in 15 seconds. This assumes that my commits don't mix
15 different concerns into an unreviewable mess.

I have found that even very quick and hasty code reviews will catch technical
debt. Just the expectation of a review will make me even more careful.

## Final Goal: Take Care Of Yourself

We aren't machines, we work with machines, so take breaks and set boundaries!
This will improve your work as much as any other goal above.

## TL;DR

1. Get a fast machine.
2. Know what your code is doing, even if it works before you know.
3. Learn RegEx, Git, Vim, Docker and Bash or PowerShell as best you can.
4. Write good comments, get code reviews, and take care of yourself.

