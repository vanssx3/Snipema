#imports
import webbrowser
import urllib.request
import sys
import platform
from colorama import Fore, Style



#storing website url
web = 'https://vanssx3.github.io/Snipema/'
os = platform.system()
#sets trigger phrase and converts it into bytes
trig = bytes('<a href="accountPage.html">', 'UTF-8')

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
print(Fore.LIGHTYELLOW_EX + '\nWelcome to Snipema.py')

if arg1 == '-c':
    browser = 'Google Chrome'
if arg1 == '-f':
    browser = 'Firefox'
if arg1 == '-e':
    browser = 'Microsoft Edge'
if arg1 != '-c' and arg1 != '-f' and arg1 != '-e' or arg1 == " ":
    browser = 'your default browser'

print('\nWhen item is available, open website on ' + browser + ' for ' + os)
if(browser == 'your default browser'):
    print('\nWARNING: PROGRAM MAY NOT RUN PROPERLY IF DEFAULT BROWSER HAS NOT BEEN ESTABLISHED')
if(os == "Linux"):
    print("\nMake sure to use an X11 Desktop instead of Wayland for proper results")
print("\nPress [y] to confirm or [n] to cancel")

while (True):
    value = input()
    if value == 'n':
            print(Style.RESET_ALL)
            sys.exit("program terminated")
    if value == 'y':
        break
        
print(Style.RESET_ALL)

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
                if arg1 != 'c' and arg1 != '-f' and arg1 != '-e':
                    print(Fore.LIGHTYELLOW_EX + "\nuse the proper command line arguments you dumb ape")
                    print("[-c for Google Chrome | -f for Firefox | -e for Microsoft Edge]")
                    print(Style.RESET_ALL)
                if os == 'Windows':
                    if arg1 == '-c':
                        webbrowser.get('"C:/Program Files/Google/Chrome/Application/chrome.exe" %s').open('https://vanssx3.github.io/Snipema/accountPage.html')
                    if arg1 == '-f':
                        webbrowser.get('"C:/Program Files/Mozilla Firefox/Firefox.exe" %s').open('https://vanssx3.github.io/Snipema/accountPage.html')
                    if arg1 == '-e':
                        webbrowser.get('"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" %s').open('https://vanssx3.github.io/Snipema/accountPage.html')
                if os == 'Linux':
                    if arg1 == '-c':
                        webbrowser.get('/usr/bin/google-chrome').open('https://vanssx3.github.io/Snipema/accountPage.html')
                    if arg1 == '-f':
                        webbrowser.get('/usr/bin/firefox').open('https://vanssx3.github.io/Snipema/accountPage.html')
                    if arg1 == '-e':
                        print("to use edge, execute 'chmod 755 epicCrack.sh', then execute './epicCrack.sh'")
            else:
                webbrowser.open('https://vanssx3.github.io/Snipema/accountPage.html')  
            #makes the while-condition false 
            check += 1
