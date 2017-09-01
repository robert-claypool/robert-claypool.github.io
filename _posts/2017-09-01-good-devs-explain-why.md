---
layout: post
title: Good Developers Explain Why
date: 2017-09-01 17:00
tags: [code quality, security, rant]
---

Code is written once and read many times. Your code will live far longer
than you probably think, and some poor soul will need to change it long after
you've moved on.

While this should elevate the importance of genuinely useful comments,
I rarely see comments which explain why code exists, what else was
tried (that failed), and after minutes or hours of research, what
specifically convinced the dev that this *particular* implementation was
worth using.

#### Fake example:
{% highlight JavaScript %}
// We sync the history with local storage at this point because it's already
// filtered down to items which need to be persisted across page loads.
{% endhighlight %}

I feel like this topic is programming 101 -- good comments explain *why!* --
but even "good" developers consistently fail to do it.

#### And now a real example:
{% highlight YAML %}
# CartoDB installations assume UTF-8.
# https://github.com/docker-library/postgres/blob/master/9.5/Dockerfile#L31
# shows that localedef is already run when using the official Postgres image,
# but we must RUN IT AGAIN for some reason... initdb will otherwise fail.
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8
{% endhighlight %}

Without my comment, some clever dev might think *"This is wrong. Debian Jessie
sets the localedef and here Robert set again! This is safe to remove."*
But you know what? I spent over an hour tracking down `localedef` issues in
this particular container. I am absolutely sure that "cleaning up" those lines
will break the environment.

#### Another example:
{% highlight PLpgSQL %}
CREATE TABLE "public"."sys_organizations" (
  "organization_id" UUID NOT NULL,
  "name" VARCHAR(64) NOT NULL,
  -- We want the slug length limit = 20, but citext type does not
  -- support length modifiers.
  -- A RegEx constraint is used instead, see ck_organization_slug_must_match_regex.
  "slug" CITEXT NOT NULL,
  "created_date" TIMESTAMP NOT NULL,
  "last_modified_date" TIMESTAMP,
CONSTRAINT "pk_sys_organizations" PRIMARY KEY ("organization_id")
);
{% endhighlight %}

Again without comments, some hotshot (probably me, 8 months down the line)
will think *"The DB docs say that slugs have a max length 20. If
I constrain the length here, then our column will enforce the rule."* ...and
they would be wrong. It's not common knowledge that `citext` doesn't
support length modifiers. Sure, they'd find out after a quick Google search,
but how long will it take to figure out that we've used a RegEx constraint
instead? Too long.

#### Final example:
{% highlight JavaScript %}
// --------------------------------------------------------------------------
// -- This gateway is for members to get and change info within their org. --
// -- The caller MUST assert org-level permissions. These functions and    --
// -- stored procs filter data by the member's org, but they do not check  --
// -- the member's roles or permissions.                                   --
// --------------------------------------------------------------------------
{% endhighlight %}

This type of comment I consider most important. For anyone new to your
codebase, security decisions are most critical to understand. If your
decisions are locked away into some *"Security Architecture of Project ABC"*
PDF file, then you've failed. Make your security critical code read like a
book; it sets up the maintainers to win.
