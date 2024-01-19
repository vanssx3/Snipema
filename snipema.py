#imports
import webbrowser
import urllib.request
import sys


#storing website url
web = 'https://vanssx3.github.io/Snipema/'

#sets trigger phrase and converts it into bytes
trig = bytes('">BUY NOW!!</button', 'UTF-8')

#gets length of encoded trigger phrase
triglen = len(trig)
extra = False
#stores initial value for while-loop condition
check = 0
args = len(sys.argv)

if args > 1:
    arg1 = sys.argv[1]
    
    if args > 2:
        arg2 = sys.argv[2]
        extra = True
else:
    arg1 = " "
#initializes while-loop 
while check == 0:
    
    #requests data from url
    page = urllib.request.urlopen(web)
    
    #stores data from url as bytes
    pageinfo = page.read()

    #stores length of provided data
    pagelen = len(pageinfo)
    
    #initializes for-loop traversing the url data
    for x in range(0, pagelen - triglen):
        
        #gets data between x and x + trigger length
        phrase = pageinfo[x:x + triglen]

        #checks if data chunk is 
        if phrase == trig:

            #opens url in new tab
            if extra == True:
                if arg1 == '-w':
                    if arg2 == '-c':
                        webbrowser.get('"C:/Program Files/Google/Chrome/Application/chrome.exe" %s').open(web)
                    if arg2 == '-e':
                        webbrowser.get('"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" %s').open(web)
                if arg1 == '-l':
                    if arg2 == '-c':
                        webbrowser.get('/usr/bin/google-chrome').open(web)
                    if arg2 == '-f':
                        webbrowser.get('/usr/bin/firefox').open(web)
            else:
                print('Welcome to Snipema.py')
            
            #makes the while-condition false 
            check += 1
