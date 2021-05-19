---
type: post
draft: false
published: true
title: Bash and ZSH History Tricks
moduleTitle: Command Line Fun
moduleSection: 3
moduleSubsection: 1
slug: bash-zsh-history-tricks
author: Martin Guzman
date: 2021-05-07
readTime: 7
tags:
- Bash and Zsh History
- Module 3
- OSCP
excerpt: Suspendisse potenti. Aliquam et urna bibendum, ornare lacus in, viverra lorem. Morbi consequat aliquet sapien in placerat. Nunc dolor dui, facilisis elementum blandit sit amet, ultrices eu enim.
image: "../../images/default.png"
imageAlt: alt text here
---

In this post I will cover Bash and ZSH History Tricks from the OSCP Syllabus plus the use of piping. These simple commands can be strung together to create an advanced search of the bash and ZSH history.

Linux displays what was previously typed in bash and zsh history if the Bash or ZSH history have not been erased. Pentesters or Hackers can take advantage of this to leverage the information and commands previously issued on the machine. Time to get started and make use of these simple yet handy commands for Pentesting, OSCP, CTF’s, and Reverse Engineering.

## Case Scenario Example

If an admin was logged into the machine and did not clear the history, we can use that to our advantage to see what was changed, what commands have been used, and what was previously done on the machine. This is important for reverse engineering changes done, to gain insight on directory or file locations, and attempting privilege escalation. I will get into privilege escalation in a future post.

To view the location of .bash_history or .zsh_history, show hidden directories and files, and read/write access, navigate to the root directory and type `ls -la`.

Below shows the hidden directories, files and read/write access.

```shell
┌──(kali㉿kali)-[~]
└─$ ls -la
total 340
drwxr-xr-x 32 kali kali  4096 May  7 20:48 .
drwxr-xr-x  3 root root  4096 Nov 17 07:31 ..
-rwxrwxrwx  1 kali kali     1 Nov 17 09:49 .bash_history
-rw-r--r--  1 kali kali   220 Nov 17 07:31 .bash_logout
-rw-r--r--  1 kali kali  4503 Nov 17 07:31 .bashrc
-rw-r--r--  1 kali kali  3526 Nov 17 07:31 .bashrc.original
drwx------  4 kali kali  4096 Mar 28 16:57 .BurpSuite
drwxr-xr-x 16 kali kali  4096 May  7 20:48 .cache
drwx------ 20 kali kali  4096 Apr 21 16:00 .config
drwxr-xr-x  4 kali kali  4096 Mar 10 19:06 .gem
drwx------  4 kali kali  4096 Mar 12 18:48 .hashcat
drwxr-xr-x 11 kali kali  4096 Mar 16 20:38 idafree-7.0
drwxr-xr-x  2 kali kali  4096 Mar 16 21:25 .idapro
drwxr-xr-x  4 kali kali  4096 Mar 28 16:53 .java
drwx------  2 kali kali  4096 Mar 15 19:41 .john
drwxr-xr-x  3 kali kali  4096 Jan  4 20:57 .maltego
-rw-r--r--  1 kali kali   125 Mar 26 19:38 .ophcrackrc
drwxr-xr-x  3 kali kali  4096 Mar 28 16:50 .recon-ng
-rw-------  1 kali kali  4453 May  7 20:48 .xsession-errors
-rw-------  1 kali kali  4787 May  5 19:31 .xsession-errors.old
drwxr-xr-x 16 kali kali  4096 Mar 28 18:10 .ZAP
drwxr-xr-x  2 kali kali  4096 Apr 19 15:52 .zenmap
-rw-r--r--  1 kali kali 76831 May  5 19:31 .zsh_history
```

To search the bash history (depending on linux distro) type `history` or `~/.bash_history`.

NEED CODE

The above example shows previous commands recorded in the bash_history.

To search zsh[autocomplete] history type `cat ~/.zsh_history`.

NEED CODE


Above show previous comands recoded in the zsh history.

## Piping Examples

These commands can be used to quickly leverage the information by piping (stringing) them into other command-line utilities. This can make searching through very long histories with thousands of entries quicker and more convenient. The following are a few useful commands to use on the history in combination with piping.

##### Search a specific word and display the last 30 results

Bash: `history | grep "Insert_Word_Here" | tail -n 30`

ZSH: `cat  ~/.zsh_history | grep "Insert_Word_Here" | tail -n 30`

Example of Use: Search for `apt-get` will search for any software installation and removal that was issued with `apt-get`.


##### Display only the last 30 lines of the history

Bash: `history | tail -n 30`

ZSH: `cat  ~/.zsh_history | tail -n 30`

##### Search the entire history with the most recent at the top
Bash: `history | tac | less`

ZSH: `cat  ~/.zsh_history | tac | less`

##### Rerun a command that was already issued
`!NUMBER_HERE`

Example of Use: If you want to run Command #1763 from the history, type `!1763` and it will autofill that command for you.


## Why this is Useful
These basic commands are a fast and simple method to leverage valuable information on a host machine. As admins and from a security standpoint this show the importance of clearing the history and not becoming complacent about these tasks! 


## TLDR 
#### Bash and ZSH History Tricks

##### View Hidden directories
Bash and ZSH: `ls -la`

##### View bash and ZSH history
Bash: `History` or `cat ~/.bash_history`

ZSH: `cat ~/.zsh_history`

##### Search a specific word and display the last 30 results
Bash: `history | grep "Insert_Word_Here" | tail -n 30`

ZSH: `cat  ~/.zsh_history | grep "Insert_Word_Here" | tail -n 30`

##### Display only the last 30 lines of the history
Bash: `history | tail -n 30`

ZSH: `cat  ~/.zsh_history | tail -n 30`

##### Search the entire history with the most recent at the top
Bash: `history | tac | less`

ZSH: `cat  ~/.zsh_history | tac | less`

##### Rerun a command that was already issued
`!NUMBER_HERE`