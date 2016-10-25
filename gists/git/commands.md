## Useful commands for GIT

* Delete branch on remote

```git push origin --delete <branchName>```

* When you've changed .gitignore after adding/committing files

```git ls-files --ignored --exclude-standard | xargs git rm```
