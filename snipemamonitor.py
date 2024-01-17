

import webbrowser

import urllib.request

data = 'https://vanssx3.github.io/Snipema/'

page = urllib.request.urlopen(data)
pageinfo = page.read()


pagelen = len(pageinfo)
trig = bytes('available', 'UTF-8')

triglen = len(trig)
check = 0

while check == 0:
    page = urllib.request.urlopen(data)
    pageinfo = page.read()

    pagelen = len(pageinfo)
    for x in range(0, pagelen - triglen):
        phrase = pageinfo[x:x + triglen]
    
    
        if phrase == trig:
            webbrowser.open_new_tab(data)
            check += 1

