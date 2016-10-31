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

* [Version 1](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/RequirementsAnalysis.docx.pdf)  

* [Version 2] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/RequirementsAnalysis.docx%20(1).pdf)

* [Sprint 1 Version 3] (https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/RequirementsAnalysis.docx%20(2).pdf)
  
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
Team members worked together to create a database on MangoDB and utilized AWS to host the website, which is now accessible [here](http://ec2-35-160-238-84.us-west-2.compute.amazonaws.com/final_project/index.html).  

* Organize GitHub Repo (Lead: Teddy Ivanov, Co: Soya Ouk)
Team members worked together to create GitHub repo and supply any necessary documentation and code here.


Database  

* Finalize ERD (Lead: Andrea McGovern, Co:Teddy Ivanov)
Team member put final touches on detailed ERD. Added Manifest table and corresponding attributes.

* Database Creation (Lead: Teddy Ivanov, Co: Andrea McGovern)
Team members setup an account on MLab and hosted our database on Amazon Web Services. Team members created a MongoDB account and installed MongoDB on their computers. Created a database in MLab named it "swfg3" and created an admin user. Then, they connected our MLab and MongoDB using via Mongo shell.

* Implement DB, seed data for development (Teddy Ivanov)
Team member logged into the Mongo Database and started to insert dummy JSON data. Utilized Elastic File Share system.
[Mlab && MongoDB](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Screen%20Shot%202016-10-30%20at%2010.45.31%20PM.png)
and
[Dummy data](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Screen%20Shot%202016-10-30%20at%2010.45.07%20PM.png)

[User Interface](http://ec2-35-160-238-84.us-west-2.compute.amazonaws.com/final_project/index.html)  

* Complete design of the user interface (Olivia Apperson)
  Task 1: Reviewed past screen designs and look for improvements

  Task 2: Created home page, upload file page, search for json files, account information page, modify document page, login page, register page, and logout page using Themefisher Bootstrap templates. Screen designs are included in modified user requirements document or can be found live [here](http://ec2-35-160-238-84.us-west-2.compute.amazonaws.com/final_project/index.html).

* Complete design of the information architecture (Olivia Apperson)
  Task 1: Developed flow of information to implement on webpages (which clicks led to where)

  Task 2: Connected webpages to flow as designed. Information architecture can be found by navigating through the pages [here](http://ec2-35-160-238-84.us-west-2.compute.amazonaws.com/final_project/index.html). 

Testing and Documentation

[All Test Cases](https://github.com/TeddyIvanov/SoftwareEngineering-Group3/blob/master/Testing--Documentation.pdf) 

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
## Sprint 3
## Sprint 4
