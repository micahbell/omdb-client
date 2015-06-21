aws s3 sync . s3://micah-bell-omdb-client --acl public-read --exclude ".git/*"
open http://micah-bell-omdb-client.s3-website-us-west-2.amazonaws.com/
