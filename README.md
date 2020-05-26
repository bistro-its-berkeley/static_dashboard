# static_dashboard

----
###Open `dashboard.html` directly to view the dashboard.

### FAQ:
Q: How to import new simulation result to this static_dashboard?

- First, follow the instruction in BistroDashboard repo to parse and store the data and make sure you can see them using the actual BistroDashboard. 
- Second, you should check main.py inside BistroDashboard repo, there will be a comment inside main.py that says "UNCOMMENT THE ABOVOE LINE IF YOU WANT TO SAVE PLOTS TO DISK." 
- Now restart BistroDashboard and select the new submission that has been processed in the first step from dropdown to visualize. This time, the dashboard should have saved all the plots in `BISTRO_Dashboard/figures/<name_of_the_new_submission>` directory.
- Last step, copy `<name_of_the_new_submission>` directory, then paste it into `static_dashboard/figures`. And append `name_of_the_new_submission` to the list in `static_dashboard/dashboard.js`

Q: How to add or remove one specific plot from the static dashboard?

- The static dashboard has been built to resemble the front end behavior of BistroDashboard. We manually construct the static dashboard HTML DOM with Javascript (`dashboard.js`). Before changing the code in `dashboard.js`, please inspect the HTML of BistroDashboard first and understand its structure. 
