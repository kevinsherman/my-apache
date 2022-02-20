### Instructions:

#### Preconditions:

1. Clone this repository to a directory on your machine
2. Open the cloned repository in VS Code, by cd-ing in to the directory about and typing `code .` (the period is important)
3. Ensure Docker and Docker-compose are installed (https://docs.docker.com/compose/gettingstarted/)
4. Modify your local hosts file to use the local IP of the apache server running in docker to point to:
   172.18.0.2 www.wtu.local
   172.18.0.2 www3.wtu.local
   172.18.0.2 wtu.local
5. Open 2 terminals. In the first terminal, navigate to the directory you cloned in step 1, and run `docker-compose up`. This terminal will stay as-is, and will be tailing output from apache.
6. In the second terminal, run `docker exec -it my-apache_apache_1 bash`. This will get you a command line where you can validate configurations and restart apache.
7. With apache running, navigate to http://www.wtu.local. Observe that the background colors change from green to red to blue when you navigate across the three menu items.
8. In VS Code, navigate to the conf directory and remove the comment at the beginning of line 7:
   `# RewriteRule ^(.*)$ http://${PUBLISH_HOSTNAME_WTU}$1 [R=301,QSA,L]`
   Save the file and then, in terminal two, type: `apachectl -t` to validate the configurations. Then type `apachectl -k graceful` to restart the apache server.
9. If you now refresh your browser you will see that clicking across the three menu items keeps the body background green. If you right-click and select 'inspect' you can monitor the network traffic and see that requests to http://wtu.local/foo will HTTP 301 redirect to http://www.wtu.local/foo
