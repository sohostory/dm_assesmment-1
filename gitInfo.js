/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition =
  "Git is used for source code management. It is used to track changes in the source code and a version control system. Also, it allows for people to mwork on same project.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition =
  "Github is the website. It is the web-based Git repository. It is like the cloud storage for git. It makes it easier to collaborate using Git.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition =
  "git init command creates a new Git repository. Or it can reinitialize an existing repository. It transform the current directory into a git repository.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition =
  "git clone command is used to target an existing repository and creates a copy (clone) of the target repository in to the local machine.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition =
  "git status command shows the current state of the Git repository in the working directory and staging area. It shows the current branch, commits, untracked, and tracked files.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition =
  "git add command adds the file to the staging area. You can add all the files or individual files. It tells Git what files to include on the next commit.";
const gitAddCode = "git add .";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition =
  "git command saves all of the staged file to the respository. It will create a version of the current save.";
const gitCommitCode = 'git commit -m "initial commit"';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition =
  "git push command uploaded the local repository to the remote repository, like Github. It transfers commits from local repository to a remote repo.";
