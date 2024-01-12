from pathlib import Path
import pynput
import os
import webbrowser
import pyautogui
import time
import pyperclip
import urllib.request

siteloc = Path(__file__).with_name('YorkAuctionSite')
website = Path(__file__).with_name('yorkAuctions.htm')
print(website)
os.chdir(siteloc)

webbrowser.open('yorkAuctions.htm')

mouse_listener = pynput.mouse.Listener(suppress=True)
mouse_listener.start()
keyboard_listener = pynput.keyboard.Listener(suppress=True)
keyboard_listener.start()

time.sleep(5)

mouse_listener.stop()
keyboard_listener.stop()

pyautogui.hotkey('ctrl', 'l')
pyautogui.hotkey('ctrl', 'c')
pyautogui.hotkey('alt', 'esc')
data = pyperclip.paste()

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
