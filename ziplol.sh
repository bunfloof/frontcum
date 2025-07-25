#!/bin/bash

current_date=$(date +%Y-%m-%d)
random_str=$(tr -dc 'a-z' < /dev/urandom | head -c4)
filename="out-archive-$current_date-$random_str.zip"

cd out || { echo "Failed to change directory to 'out'. Exiting."; exit 1; }

echo "Creating zip file: $filename..."
zip -r "$filename" * || { echo "Failed to create zip file. Exiting."; exit 1; }

echo "Uploading $filename to https://temp.sh/upload..."
upload_response=$(curl -s -F "file=@$filename" https://temp.sh/upload)

if [[ $upload_response == *"temp.sh"* ]]; then
    echo "Upload successful! File URL: $upload_response"
else
    echo "Upload failed. Response: $upload_response"
    exit 1
fi
