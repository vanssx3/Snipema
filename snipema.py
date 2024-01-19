#imports
import webbrowser
import urllib.request
import sys
import platform


#storing website url
web = 'https://vanssx3.github.io/Snipema/'
os = platform.system()
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
                if os == 'Windows':
                    if arg1 == '-c':
                        webbrowser.get('"C:/Program Files/Google/Chrome/Application/chrome.exe" %s').open(web)
                    if arg1 == '-f':
                        print('not available yet. cry.')
                    if arg1 == '-e':
                        webbrowser.get('"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" %s').open(web)
                if os == 'Linux':
                    if arg1 == '-c':
                        webbrowser.get('/usr/bin/google-chrome').open(web)
                    if arg1 == '-f':
                        webbrowser.get('/usr/bin/firefox').open(web)
                    if arg1 == '-e':
                        webbrowser.get('/usr/bin/microsoft-edge-stable')
            else:
                print('Welcome to Snipema.py')
            
            #makes the while-condition false 
            check += 1
