#!/bin/bash
cp style.t table.htm
for i in *.md ;
do
  flnm=$(basename -- "$i")
  firstnm=${flnm%.*}
  cp style.t "$firstnm".htm
  md2html "$firstnm".md >> "$firstnm".htm
  echo "<a href='$firstnm.htm' target='content'>$firstnm</a><br>" >> table.htm
done
