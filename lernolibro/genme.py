#!/usr/bin/env python3
"""
This is just a script to convert a bunch of md files into html, as if it's a wiki,
while it's really not. Those md files ought to be rearranged in a book manner, but for
now it is what it is.
"""

import os
import tempfile

style = '<body style="max-width:800px; margin:40px;">\n'
prologue = '<h1>%s</h1>\nDepends on... '
index = '<hr><a href="index.htm">Index</a> '
link = '<a href="%s.htm">%s</a> '
el_link = '<li><a href="%s.htm">%s</a>\n'

src_files = os.listdir("src/")

all_tags = {}
all_articles = []

for fname in src_files:
	tgtname = fname[:-3]
	tmpfile = tempfile.NamedTemporaryFile("w",delete=False)
	tmpname = tmpfile.name
	content = open("src/"+fname).read()
	tags = content.split("\n")[0]
	if tags.startswith("tags:"):
		# process tags
		content = content[content.find("\n") + 1:]
		tags = tags[5:].split(":")
		print(tags)
		for tag in tags:
			if tag in all_tags:
				all_tags[tag].append(tgtname)
			else:
				all_tags[tag] = [tgtname]
	deps = content.split("\n")[0]
	if deps.startswith("deps:"):
		# process deps
		content = content[content.find("\n") + 1:]
		deps = deps[5:].split(":")
		print(deps)
	else:
		deps = []
	
	all_articles.append(tgtname)

	tmpfile.write(content)
	tmpfile.close()
	
	tgt = open(tgtname+".htm", "w")
	tgt.write(style)
	tgt.write(prologue % tgtname)
	for dep in deps:
		try:
			os.stat("src/%s.md" % dep)
			tgt.write(link % (dep, dep))
		except FileNotFoundError:
			tgt.write(link % ("#", "?"+dep+"?"))
	tgt.write("<hr>\n")
	tgt.close()
	os.system("md2html %s >> %s.htm" % (tmpname, tgtname))
	epilogue = index
	for tag in tags:
		epilogue += link % (tag, tag)
	open(tgtname+".htm", "a").write(epilogue)

# Okay, now we just need to create a list of tags
print(all_tags)
for tag in all_tags:
	tagf = open(tag+".htm", "w")
	tagf.write(style)
	tagf.write("<h1>Tag: %s</h1><hr>\n" % tag)
	tagf.write("<ul>")
	for article in sorted(all_tags[tag]):
		tagf.write(el_link % (article, article))
	tagf.write("</ul>")
	tagf.write(index)
	tagf.close()

# and a final index
idx = open("index.htm", "w")
idx.write(style)
idx.write("<h1>Knowledge book Index</h1><h4>alpha - don't trust blindly</h4><hr>\n")
idx.write("<h2>Tags</h2>\n")
idx.write("<ul>")
for tag in sorted(all_tags):
	idx.write(el_link % (tag, tag))
idx.write("</ul>\n<h2>Articles</h2>\n")
idx.write("<ul>")
for article in sorted(all_articles):
	idx.write(el_link % (article, article))
idx.close()
	 



