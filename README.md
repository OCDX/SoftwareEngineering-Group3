# SoftwareEngineering-Group3
Software engineering semester project.

# ![Metadrop](http://ec2-35-160-238-84.us-west-2.compute.amazonaws.com/final_project/images/logo2.png)
> As a team we are going to build an online infrastructure for computational social scientists, social scientist, and citizens that will facilitate and centralize our understanding of online human interaction. We will create a database that will allow metadata specification to store, share, describe, and analyze data sets. This will help solve the problem of not being able to easily access the metadata, and now scientist and citizens can easily access it via the internet.  
  
### Group 3:
Andrea McGovern  
Teddy Ivanov  
Olivia Apperson  
Soya Ouk  
Xinyi Li  
## Requirement Analysis
* [Google Drive] (https://docs.google.com/document/d/1MV1TERh4RiKYwcPS5TSN___B5Fp_3C-kzdJ5ykBqi1I/edit#) 

* [Version 1](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_1/RequirementsAnalysisV1.docx.pdf)  

* [Version 2] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_1/RequirementsAnalysisV2.docx.pdf)

* [Sprint 1 Version 3] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_1/RequirementsAnalysisV3.docx.pdf)

* [Sprint 2] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_2/Sprint_2_FinalProject_MetaDrop.pdf)

* [Sprint 3] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/MetaDrop%20Sprint%203.docx)
  
Develop a full requirements analysis (“REQS”) for the semester.  
1. Table of Contents  
2. Project Overview  
3. The requirments analysis divided different units.   
- Actors  
- Activities   
- Use Cases  
- Functional  
- Non-Functional  
- User Requirement  
- system Requirements  
4. Class List  
5. Table List  
6. Screen Design  
7. Glossary  
8. Change Log
 
 
  
## Sprint 1

Note: Due to the fact that no code was needed for this sprint, branches were not taken and merged to master

Kickoff Meeting
Date: 10/25/16 --In class meeting (2:00pm- 3:15pm) to discuss next steps of Sprint One. All members attended. Team members reviewed Sprint milestone targets and developed drill down tasks. These tasks were distributed amongsth team members and will explained below.

Tag-Up Meeting
Date 10/30/16 --Met in Lafferre (6:00pm-11:30pm) to continue working on completing all tasks needed.

General

* Sprint Documentation (Lead:Xinyi Li, Co: Olivia Apperson)
Team members developed Sprint documentation in Markdown on GitHub. They outlined the tasks, milestones, and other relevant data needed as well as linked updated documents. 

* Complete setup of Deployment Environment (MangoDB: Teddy Ivanov, AWS: Andrea McGovern)
Team members worked together to create a database on MangoDB and utilized AWS to host the website, which is now accessible [here](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/).


* Organize GitHub Repo (Lead: Teddy Ivanov, Co: Soya Ouk)
Team members worked together to create GitHub repo and supply any necessary documentation and code here.


Database  

* Finalize ERD (Lead: Andrea McGovern, Co:Teddy Ivanov)
Team member put final touches on detailed ERD. Added Manifest table and corresponding attributes.

* Database Creation (Lead: Teddy Ivanov, Co: Andrea McGovern)
Team members setup an account on MLab and hosted our database on Amazon Web Services. Team members created a MongoDB account and installed MongoDB on their computers. Created a database in MLab named it "swfg3" and created an admin user. Then, they connected our MLab and MongoDB using via Mongo shell.

* Implement DB, seed data for development (Teddy Ivanov)
Team member logged into the Mongo Database and started to insert dummy JSON data. Utilized Elastic File Share system.
[Mlab && MongoDB](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/MLab.png)
and
[Dummy data](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/MLabData.png)

[User Interface](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com)  

* Complete design of the user interface (Olivia Apperson)
  Task 1: Reviewed past screen designs and look for improvements

  Task 2: Created home page, upload file page, search for json files, account information page, modify document page, login page, register page, and logout page using Themefisher Bootstrap templates. Screen designs are included in modified user requirements document or can be found live [here](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/).

* Complete design of the information architecture (Olivia Apperson)
  Task 1: Developed flow of information to implement on webpages (which clicks led to where)

  Task 2: Connected webpages to flow as designed. Information architecture can be found by navigating through the pages 
  [here](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/). 

Testing and Documentation

[Test Case Version 1](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_1/TestingVersion1.pdf) 

* User Acceptance Test (Soya Ouk)  
  Task 1: Created google documents for user acceptance cases
  Task 2: Created google documents to test to insert files
  Task 3: Created google documents to update files and delete files.  
  
* Build Unit Test Scenarios (Soya Ouk)
  Individual tasks are each unit test scenario
  
* Describe regression testing and your regression testing plan (Soya Ouk)
  Task 1: Described regression testing
  Task 2: Created Regression testing plan

* Describe how your team will perform integration testing (Olivia Apperson)
  Task 1: MangoDB, UI, and AWS need to communicate at all times
  Task 2: When this needs to be integrated? All at once.

* Test Types (Olivia Apperson)
  Task 1: Described Tests for Verification (Login, Data Upload, Data Edits)
  Task 2: Described Tests for Validation (Login)
  
Backlog: Entering of dummy data. MangoDB is difficult to implement with File storage and requires more work (Andrea McGovern, worked several hours to accomplish this).


## Sprint 2
####Branches-Students created their own branches for this Sprint. Branches are denoted as pawprint_Sprint2.

####Meeting-November 7th, 2016
All members attended meeting starting at 4pm and ending 10pm. Met to discuss individual progress and work together to complete other tasks. Discussed Sprint goals to ensure all parts were covered. Also worked on revising Sprint 1 for redo. These tasks determined to complete in Sprint 2 were divided amongst team members and will be explained below. 

####Tag-Up Meeting-November 10th 2016
All members attended meeting starting at 6pm and ending at 9pm. Finalized changes and updates for Sprint 2. Continued working to improve Sprint 1 content.

####General

* [Sprint Documentation] () 
Lead: Olivia Apperson Co: Xinyi Li
* Students worked to provide accurate and thorough documentation for Sprint 2. 

####Database
Leads: Teddy Ivanov and Andrea McGovern
* We worked together to create insert, delete, and update commands into the database and use in php scripts. These can be found in the DML folder above. 
* We met on Monday from 4-6, Wednesday from 4-6:30, and Thursday from 4-8. 
* We had to start over from scratch, and create a new ubuntu instance on AWS becasue php 7 wasnt compatible with Mongodb. It is also easier to debug on a linux server rather than a Mocrosoft one.
* We met with Jeremy during his office hours to set up the new service. He helped us download php 5, mongodb driver, and filezilla.
* We then continued working on our own to download Apache and figured out how to access the root folder with the correct permissions to host all of our files on the instance. Firebase allows you to store JSON files as well, but instead of using php we chose JavaScript. It allows to easily be able to ensure that a user is logged in cross site.  
* We met again on Friday from 2 - 8, and decided to change from a MongoDB to a Firebase database, becasuse we thought it would be easier to handle the login. Firebase is a NoSQL Json database that allows us to host our web app and helps maintain state across the domain. 
* Separate Directory found [here] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/tree/master/DML)
* Website can be found here with UI: [website](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/)


####User Interface
  
  Stub-calls for all interactive elements on UI can be found here:[Stub Calls](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_2/subcalls.js)
  
  Lead: Soya Ouk Co: Olivia Apperson
  These include:
  * Registration
  * Files
    
   Begin UI Elements; Website can be found here with UI: [website](http://ec2-35-163-197-29.us-west-2.compute.amazonaws.com/)
   
   Lead: Olivia Apperson Co: Soya Ouk
   Pages Include:
   * Login
   * Register
   * Edit File
   * Search File
   * Upload File
   * Landing Page

####Other

Management of users/roles (User Accounts)
* Lead: Xinyi Li Co: Teddy Ivanov
* Researcher/User:
    * Logging in and out of the system 
    * Uploading metadata files to be stored in the database 
    * Search metadata files through key words
    * Download own files for use
    * Edit own metadata files
    * Delete own metadata files
* Administrators:
    * Logging in and out of the system
    * Edit metadata files by all users
    * Delete metadata files by all users
    * Search files through key words
    * Add/delete users to the system

  
####Testing and Documenation

  Link to Sprint 1 and 2 is at the top of this page

####Unfinished Tasks

* Further additions to the database will be needed but current status is on par with Sprint 2
* Further modifications and additions to the UI will be needed but current status is on par with Sprint 2
* Integration tests may need improvements 

####Log

* Updated Webpages
* Switched to Ubuntu server
* Updated Test Cases 
* Updated Documentation
* Added user/admin roles
* Added stub-calls



## REVISIONS FROM SPRINT 1

General 
* Link to Github root included in submission
* Test cases now included in Sprint 2 document

Database/UI
* ERD revised and included in Sprint 2 document
* Information architecture (flow) is included in Sprint 2 document and [here](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Sprint_2/Sprint_2_FinalProject_MetaDrop.pdf)

Testing 
* Revised Test cases included in Sprint 2 document

* Github links with pawprints now available
## Sprint 3

####Branches
Students created new branches (pawprint_Sprint3) to commit and merge with master for this sprint 

####Meetings
* Met November 14 at 4pm to 8pm to work decide responsibilities and start on tasks.

####General
* Sprint documentation can be found [here](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/RequirementsDocumentationsSprint3.docx) and within this Sprint 3 Markdown

Deploy to Group Account???

####User Interface
* Pages were updated to correctly connect to database and to check if links were still in working condition
* The following pages were added/edited for additional features:
  * Account.html --Changed fields of user information and correctly linked Edit button
  * EditAccount.html --Added this page to allow user to edit personal information
  * Modify.html --Added a comments section for more user input
  
####Other
* [Temporal Logic](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Temporal%20Logic%20of%20UI.docx)

* Data Visualizations
[Files Uploaded Into Firebase](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/FilesUploadedIntoDatabase.png)
[Inserted Info to Firebase](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/InsertedInfoToDatabase.png)
[Overall User Usage of Firebase](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/UsageOfDatabase.png)
[Users Authenication](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/images/UsersAuthenication.png)


####Testing and Documentation

[Test Case Version 4](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Testing_sprint3.pdf) 

* Description of user tests
* Edge cases

####User Documentation

User Documentation was structured and started. The following sections were added:
* Introduction (Olivia Apperson)
* Software and Applications needed (Andrea McGovern)
* Deployment (Andrea McGovern and Teddy Ivanov)
* End User Manual (Olivia Apperson)

####Database Update

* Met on November 14 from 7 to 9 to work on finishing the insert, update, delete, and search quieries.
* Also worked on file uploads using a Google Cloud Storage Bucket to hold the JSON files in the database.

###Improvements to Sprint 2

8 points were lost in Sprint Documentation
* Sprint 2 added to Requirements and Design Documentation
* Broken links, including Stub Calls and DML, fixed
* Link to Commits added

2 points lost for Testing
* User Acceptance testing not included in Regression testing
* Verification/Validation revised

## Sprint 4
