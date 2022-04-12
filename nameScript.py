import os

file_list =  os.listdir("E:\School related\REDI site\Grayscale Logos")
for name in file_list:
    print("<div class='investor-logo'>")
    print(f'<img alt="{name}" class="lazyload"src="Grayscale Logos/{name}" alt="{name}">')
    print("</div>")