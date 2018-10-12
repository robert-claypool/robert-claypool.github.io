---
layout: post
title: ArcPy Lines To Endpoints
date: 2018-10-11 21:18
tags: [arcgis, python]
---

This copies the start and end point vertices of lines into a new feature class.

{% highlight python %}
# Use a polyline feature class as input.
# Use a points feature class as the destination output.
import arcpy
lines_fc = "c:/my_geodatabase.gdb/my_feature_dataset/my_lines"
points_fc = "c:/my_geodatabase.gdb/my_feature_dataset/my_points"
insert_cursor = arcpy.InsertCursor(points_fc)
for row in arcpy.da.SearchCursor(lines_fc, ["SHAPE@"]):
    # No validation here: we assume it's a polyline, and we assume it has only one part.
    line = row[0]
    # Save the line's start point.
    feature = insert_cursor.newRow()
    feature.shape = line.firstPoint
    insert_cursor.insertRow(feature)
    # Save the line's end point.
    feature = insert_cursor.newRow()
    feature.shape = line.lastPoint
    insert_cursor.insertRow(feature)
{% endhighlight %}
