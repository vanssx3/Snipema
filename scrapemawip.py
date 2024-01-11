import webbrowser
import urllib.request

page = urllib.request.urlopen('file:///C:/Users/100038391/OneDrive%20-%20Clear%20Creek%20ISD/Desktop/Scrapema%20stuff/Scrapema-main/YorkAuctionSite/yorkAuctions.htm')
pageinfo = page.read()

pagelen = len(pageinfo)
trig = bytes('available', 'UTF-8')

triglen = len(trig)
check = 0

while check == 0:
    for x in range(0, pagelen - triglen):
        phrase = pageinfo[x:x + triglen]
    
    
        if phrase == trig:
            webbrowser.open_new_tab('file:///C:/Users/100038391/OneDrive%20-%20Clear%20Creek%20ISD/Desktop/Scrapema%20stuff/Scrapema-main/YorkAuctionSite/yorkAuctions.htm')
            check += 1


