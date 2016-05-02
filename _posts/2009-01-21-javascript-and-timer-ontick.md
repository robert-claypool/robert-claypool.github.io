---
layout: post
title: How to run JavaScript prior to System.Web.UI.Timer OnTick
date: 2009-01-21 01:07
tags: [C#, JavaScript, StackOverflow, Timer, UpdatePanel]
---

The short answer: you can't, or at least not easily, but there's a better
way anyway.

Let's say you have a page that needs to post back every X minutes.
In my case, I needed to develop an auto-save feature that the client
requested. Saving the data would happen server side, so I just used
a [Timer](https://msdn.microsoft.com/en-us/library/system.web.ui.timer.aspx)
to initiate regular post backs.

{% highlight aspx-cs %}
<%@ Page Language="C#" %>
<script runat="server">
    protected void Timer1_OnTick(object sender, EventArgs e)
    {
        Response.Write("Last Postback: " + DateTime.Now.ToString());
    }
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="sm" runat="server" />
        <asp:Timer ID="Timer1" runat="server"
                OnTick="Timer1_OnTick" Interval="4000" />
    </form>
</body>
</html>
{% endhighlight %}

The problem surfaced when they also wanted a client-side prompt to allow or
cancel the auto post back. System.Web.UI.Timer does not have any client
side events exposed, so I searched the web and asked StackOverflow
[what they would do](https://stackoverflow.com/questions/439677/how-to-run-javascript-prior-to-system-web-ui-timer-ontick).

The only response to my post confirmed that the Timer is a bad fit.
I could hack it, but there must be a better way.

{% include image.html url="/images/square-peg-round-hole.png" description="Square Peg in a Round Hole" %}

So instead of using a Timer to initiate post backs, I switched to a combination
of `setTimeout()` and `__doPostBack()`. It's pure HTML and JavaScript, even better.

In this example, I added an update panel to demonstrate how `__doPostBack()`
can also be used to create a partial post back (leaving some parts of the
page unchanged after the auto post back). That's not necessary, but if you
are posting back to the server automatically, an AJAX experience will
probably be better for the user.

{% highlight aspx-cs %}
<%@ Page Language="C#" %>
<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.IsPostBack)
        {
            string time = DateTime.Now.ToString();
            this.insidePanelLabel.Text = "Last Postback: " + time;
            this.outsidePanelLabel.Text = "blah blah"; // Does not show up after partial post back
        }
    }
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" language="javascript">
        window.onload = function() {
            // Start the auto postback timer
            setPostbackTimer(8);
        }
        function setPostbackTimer(seconds) {
            window.setTimeout("conditionalPostback()", seconds * 1000);
        }
        function canContinue() {
            return confirm('The page is requesting new data. OK or Cancel?');
        }
        function conditionalPostback() {
            if (canContinue()) {
                // User permits the postback; do it
                __doPostBack('UpdatePanel1', '');
            }
            else {
                // User denied the postback
                // Reset the timer (they will be prompted again)
                setPostbackTimer(8);
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="sm" runat="server" />
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Label ID="insidePanelLabel" runat="server"
                    Text="This text will change during auto postbacks."/>
            </ContentTemplate>
        </asp:UpdatePanel>
        <br />
        <asp:Label ID="outsidePanelLabel" runat="server"
            Text="This text will not change during auto postbacks."/>
    </form>
</body>
</html>
{% endhighlight %}
