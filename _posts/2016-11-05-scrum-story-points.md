---
layout: post
title: Scrum Story Points
date: 2016-11-05 22:00
tags: [agile, scrum, project planning]
---

Scrum teams often separate **estimation** (which is used for measuring the size
of a backlog and calculating velocity) from **tracking** (which is often the
burndown of hours used during the Sprint to be sure we're not way off the
pace necessary to complete the stories in the Sprint timebox), and use
different units for each. A common approach is to estimate tasks in
Story Points, then track tasks using hours.

Product teams often need to be able to estimate how long a product will
take to deliver. This is tough because the backlog may stretch months
into the future, so the team can only provide a rough estimate in conditions
of uncertainty unless they work for days breaking the tasks down.
However, from sprint to sprint as they work through the stories, the team
will develop a cadence of completing <x> units of work they had
'rough estimated', i.e. their **velocity**. This means that they can
relatively accurately estimate how long portions of the backlog will take
to get done with simple rough estimates that the team can produce long
before they even consider doing them. However, to make this work the
team needs to estimate stories with a consistent level of uncertainty.
The team also needs to track the amount of estimation units they have
actually fully completed from sprint to sprint because this number is
the one that tells us with relative certainty how much can be fit into each
future sprint.

Story points estimations work well to follow a Fibonacci sequence:
**1, 2, 3, 5, 8, 13, 21**

Story points are numbered this way to account for the fact that the longer
an estimate is, the more uncertainty it contains. If a developer wants to
estimate a **6**, he's forced to reconsider that some of the perceived
uncertainty does not exist (and
[play a 5](https://en.wikipedia.org/wiki/Planning_poker)), or accept a
conservative estimate which accounts for the uncertainty (and then
[play an 8](https://en.wikipedia.org/wiki/Planning_poker)).

|Points|How Much Work?|
|:-:|---|
|1   |This is trivial.|
|2   |This is small.|
|3   |This is 1-2 days of work.|
|5   |This is could take half of my week.|
|8   |This is a full week's worth of work. We should probably break it down into smaller tasks.|
|13   |A week or two. This should probably be an epic, break it down.|
|21   |Seriously? This is going to take at least a month!|

Purists would argue that I shouldn't describe story points in relation to days
or weeks, but I think it's important to start off by relating points to
time. Eventually, and very quickly, you'll be able to think abstractly about
how many points of *effort******** are involved without going though a time-to-points
mental translation.
