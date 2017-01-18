## Useful commands for GIT

* Delete branch on remote

```git push origin --delete <branchName>```

* When you've changed .gitignore after adding/committing files

```git ls-files --ignored --exclude-standard | xargs git rm```

* List of contributors and how many commits

```git shortlog -sn```

* Magic

```git reflog```

* Add chunk-by-chunk

```git add -p```
