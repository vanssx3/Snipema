import webbrowser
import urllib.request

page = urllib.request.urlopen('file:///C:/Users/100038391/OneDrive%20-%20Clear%20Creek%20ISD/Desktop/Scrapema%20stuff/Scrapema-main/YorkAuctionSite/yorkAuctions.htm')
pageinfo = page.read()

pagelen = len(pageinfo)
trig = bytes('available', 'UTF-8')

triglen = len(trig)
exist = 0

while exist == 0:
    for x in range(0, pagelen - triglen):
        phrase = pageinfo[x:x + triglen]
    
    
        if phrase == trig:
            exist += 1

if exist > 0:
    webbrowser.open_new_tab('file:///C:/Users/100038391/OneDrive%20-%20Clear%20Creek%20ISD/Desktop/Scrapema%20stuff/Scrapema-main/YorkAuctionSite/yorkAuctions.htm')

#turn website info into a string
#make for loop to check for when string has available set to true
#when for loop is triggered open the web page