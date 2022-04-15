import os

file_list =  os.listdir("E:\School related\REDI site\Color Logos")
for name in file_list:
    print("<a class='logo-items'>")
    print(f'<img alt="{name} (opens in a new tab)" data-src="./Color Logos/{name}" class="logo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="><noscript><img class="logo" src="./Color Logos/{name}" alt="{name} (opens in a new tab)"></noscript>')
    print("</a>")
     