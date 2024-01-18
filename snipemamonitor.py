#imports
import webbrowser
import urllib.request

#storing website url
web = 'https://vanssx3.github.io/Snipema/'

#sets trigger phrase and converts it into bytes
trig = bytes('available', 'UTF-8')

#gets length of encoded trigger phrase
triglen = len(trig)

#stores initial value for while-loop condition
check = 0

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
            webbrowser.open_new_tab(web)
            
            #makes the while-condition false 
            check += 1
#automatic product sniper coming soon
