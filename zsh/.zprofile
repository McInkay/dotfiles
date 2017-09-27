source ~/.env_vars


if ! ps -aux | grep file-watch-upload | grep -v grep > /dev/null
then
	file-watch-upload.js -d Uploads -a $UPLOAD_API_KEY &
fi
