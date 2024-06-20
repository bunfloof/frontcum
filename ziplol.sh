#!/bin/bash

current_date=$(date +%Y-%m-%d)
random_str=$(tr -dc 'a-z' < /dev/urandom | head -c4)
filename="out-archive-$current_date-$random_str.zip"
cd out
zip -r "$filename" *
