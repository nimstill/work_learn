
假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：
git fetch origin
git reset --hard origin/master


git push origin --delete serverfix



git push命令用于将本地分支的更新，推送到远程主机。它的格式与git pull命令相仿。

$ git push <远程主机名> <本地分支名>:<远程git 分支名>

注意，分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。
如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。

$ git push origin master



Another git process seems to be running in this repository, e.g.

an editor opened by 'git commit'. Please make sure all processes 
are terminated then try again. If it still fails, a git process 
may have crashed in this repository earlier: 
remove the file manually to continue.

你已经提交一了一个commit，该进程卡在这里了，所以无法继续提交。


使用$ rm -f ./.git/index.lock 命令，结束该进程。


git stash
git pull
git stash pop
接下来diff一下此文件看看自动合并的情况，并作出相应修改。
git stash: 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中。
git stash pop: 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个Stash的内容，所以用栈来管理，pop会从最近的一个stash中读取内容并恢复。
git stash list: 显示Git栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
git stash clear: 清空Git栈。此时使用gitg等图形化工具会发现，原来stash的哪些节点都消失了。

2.放弃本地修改，直接覆盖之
git reset --hard
git pull


 git reflog  它会记录所有HEAD的历史


/*/*

 比如你从 develop -> CM1 -> CM2 这样使得 CM2 的状态错误
可以很简单的恢复，记录 CM2 的真正有意义的提交比如是 x
git reset --hard develop
git cherry-pick x
git commit
CM2 的状态就正常了

另一个找回Commit的操作git cherry-pick 98abc5a,这个操作与上面的reset操作区别在于后者只是单纯的提取98abc5a这个Commit进行回滚，如果在b7057a9和98abc5a之间还有其他的Commit操作，则会忽略中间的这些Commit做的修改，所以应用这个命令有可能会文件的冲突

另一个找回Commit的操作git cherry-pick 98abc5a,这个操作与上面的reset操作区别在于后者只是单纯的提取98abc5a这个Commit进行回滚，如果在b7057a9和98abc5a之间还有其他的Commit操作，则会忽略中间的这些Commit做的修改，所以应用这个命令有可能会文件的冲突



#####Git如何删除版本库中的一个提交?
git reset --hard HEAD~1
git push --force
可以这样直接取消上一次 commit git reset HEAD~1; 如果加上参数 --hard 则不保留当前更改


麻烦先整理一下几个提交
参考命令
git checkout personal/shong
git reset afd2d8ab3e16111a475c8a216b90ff571df9c9c3 --hard
git rebase 57ced5d43f704a8c386c02fb2947deb57994a580
git rebase origin/develop
git push --force
避免产生不必要的 merge 操作
最后，这三个提交都是同一个作者，可以直接合并
git rebase -i HEAD~3
# 将列出三个对应  CM-26060 的提交
# 第一个选 reword (编辑 commit 日志), 后面两个选择 fixup (保留 commit 但删除日志)
# 在第一次提示的时候，把 commit 日志编辑为最终信息

# 完成 rebase 之后再 force push 一次
git push --force


If you want to rename a branch while pointed to any branch, do :

git branch -m <oldname> <newname>
If you want to rename the current branch, you can do:

git branch -m <newname>



分支的开发过程中，要经常与主干保持同步。

$ git fetch origin
$ git rebase origin/master




###取消 Git for Windows “换行符自动转换”功能
####git config --global core.autocrlf false


先 git clone 整个仓库，然后 git checkout tag_name 就可以取得 tag 对应的代码了。
但是这时候 git 可能会提示你当前处于一个“detached HEAD" 状态，因为 tag 相当于是一个快照，是不能更改它的代码的，如果要在 tag 代码的基础上做修改，你需要一个分支：
git checkout -b branch_name tag_name


clone 远程某一分支
git clone -b <branch> <remote_repo>


git ls-remote