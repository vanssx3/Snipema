from pathlib import Path
import os
import webbrowser
import pyautogui
import time
import win32clipboard
import urllib.request

siteloc = Path(__file__).with_name('YorkAuctionSite')
website = Path(__file__).with_name('yorkAuctions.htm')
print(website)
os.chdir(siteloc)

webbrowser.open('yorkAuctions.htm')
time.sleep(5)
pyautogui.hotkey('ctrl', 'l')
pyautogui.hotkey('ctrl', 'c')
pyautogui.hotkey('alt', 'f4')
win32clipboard.OpenClipboard()
data = win32clipboard.GetClipboardData()
win32clipboard.CloseClipboard()

page = urllib.request.urlopen(data)
pageinfo = page.read()

pagelen = len(pageinfo)
trig = bytes('available', 'UTF-8')

triglen = len(trig)
check = 0

while check == 0:
    for x in range(0, pagelen - triglen):
        phrase = pageinfo[x:x + triglen]
    
    
        if phrase == trig:
            webbrowser.open_new_tab(data)
            check += 1

