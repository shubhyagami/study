# Git Cheatsheet

## Basic Commands
- `git init` - Initialize a new repository
- `git clone <url>` - Clone an existing repository
- `git add <file>` - Stage changes
- `git commit -m "message"` - Commit staged changes
- `git status` - Show working tree status
- `git log` - View commit history

## Branching & Merging
- `git branch` - List branches
- `git branch <name>` - Create a new branch
- `git checkout <branch>` - Switch to branch
- `git merge <branch>` - Merge branch into current
- `git branch -d <branch>` - Delete branch

## Remote Repositories
- `git remote add origin <url>` - Add remote
- `git push -u origin main` - Push and set upstream
- `git pull` - Fetch and merge
- `git fetch` - Fetch without merge

## Undoing Changes
- `git reset HEAD <file>` - Unstage file
- `git checkout -- <file>` - Discard changes in working directory
- `git revert <commit>` - Create new commit that undoes changes

## Stashing
- `git stash` - Save uncommitted changes
- `git stash pop` - Restore and remove stash
- `git stash list` - List stashes

## Tips
- Use descriptive commit messages
- Commit often, push when ready
- Keep branches focused