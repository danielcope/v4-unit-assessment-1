/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a program for tracking changes to a file.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'Git HUB is a repository where someone can upload any change that they made to a file. They can share those changes with their development.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: 'Git init will start the process of watch any git commands in the current repository',
    code: 'git init',
}

//////////////////PROBLEM 4////////////////////
/*
Create an object called 'clone' with 'description' and 'code' properties 
following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'Git clone will make a copy of code from a Git HUB repository onto your computer',
    code: 'git clone "(url from git HUB repository)"',
}

//////////////////PROBLEM 5////////////////////
/*
Create an object called 'status' with 'description' and 'code' properties 
following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'Git status will show you if there have been any changes made to your code.',
    code: 'git status',
}

//////////////////PROBLEM 6////////////////////
/*
Create an object called 'add' with 'description' and 'code' properties 
following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'Git add still start the process of adding code to git HUB.',
    code: 'git add .',
}

//////////////////PROBLEM 7////////////////////
/*
Create an object called 'commit' with 'description' and 'code' properties
following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'Git commit will commit of changes to git HUB',
    code: 'git commit -m"(Description of changes made.)"',
}

//////////////////PROBLEM 8////////////////////
/*
Create an object called 'addRemote' with 'description' and 'code' properties
following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description: 'Git remote creates a new connection to a remote repository. I am not sure how it works. I have never used it.',
    code: 'git remote add origin',
}

//////////////////PROBLEM 9////////////////////
/*
Create an object called 'push' with 'description' and 'code' properties 
following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'Git push is the final step in add your code changes to Git HUB. It essentially pushes you changes to your git HUB repository',
    code: 'git push',
}
