#I forgor to make it watch for changes in the website. i fix later
import webbrowser
import urllib.request

page = urllib.request.urlopen('Scrapema-main/YorkAuctionSite/yorkAuctions.htm')
pageinfo = page.read()

pagelen = len(pageinfo)
trig = bytes('available', 'UTF-8')

triglen = len(trig)
check = 0

while check == 0:
    for x in range(0, pagelen - triglen):
        phrase = pageinfo[x:x + triglen]
    
    
        if phrase == trig:
            webbrowser.open_new_tab('Scrapema-main/YorkAuctionSite/yorkAuctions.htm')
            check += 1

