(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{310:function(s,a,t){"use strict";t.r(a);var e=t(11),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-用户管理"}},[s._v("#")]),s._v(" Linux 用户管理")]),s._v(" "),t("blockquote",[t("p",[s._v("关键词："),t("code",[s._v("groupadd")]),s._v(", "),t("code",[s._v("groupdel")]),s._v(", "),t("code",[s._v("groupmod")]),s._v(", "),t("code",[s._v("useradd")]),s._v(", "),t("code",[s._v("userdel")]),s._v(", "),t("code",[s._v("usermod")]),s._v(", "),t("code",[s._v("passwd")]),s._v(", "),t("code",[s._v("su")]),s._v(", "),t("code",[s._v("sudo")])])]),s._v(" "),t("h2",{attrs:{id:"_1-linux-用户管理要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-用户管理要点"}},[s._v("#")]),s._v(" 1. Linux 用户管理要点")]),s._v(" "),t("ul",[t("li",[s._v("创建用户组 - 使用 "),t("a",{attrs:{href:"#groupadd"}},[s._v("groupadd")])]),s._v(" "),t("li",[s._v("删除用户组 - 使用 "),t("a",{attrs:{href:"#groupdel"}},[s._v("groupdel")])]),s._v(" "),t("li",[s._v("修改用户组信息 - 使用 "),t("a",{attrs:{href:"#groupmod"}},[s._v("groupmod")])]),s._v(" "),t("li",[s._v("创建用户 - 使用 "),t("a",{attrs:{href:"#useradd"}},[s._v("useradd")])]),s._v(" "),t("li",[s._v("删除用户 - 使用 "),t("a",{attrs:{href:"#userdel"}},[s._v("userdel")])]),s._v(" "),t("li",[s._v("修改用户信息 - 使用 "),t("a",{attrs:{href:"#usermod"}},[s._v("usermod")])]),s._v(" "),t("li",[s._v("设置用户认证信息 - 使用 "),t("a",{attrs:{href:"#passwd"}},[s._v("passwd")])]),s._v(" "),t("li",[s._v("切换用户 - 使用 "),t("a",{attrs:{href:"#su"}},[s._v("su")])]),s._v(" "),t("li",[s._v("当前用户想执行没有权限执行的命令时，使用其他用户身份去执行 - 使用 "),t("a",{attrs:{href:"#sudo"}},[s._v("sudo")])])]),s._v(" "),t("h2",{attrs:{id:"_2-命令常见用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令常见用法"}},[s._v("#")]),s._v(" 2. 命令常见用法")]),s._v(" "),t("h3",{attrs:{id:"_2-1-groupadd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-groupadd"}},[s._v("#")]),s._v(" 2.1. groupadd")]),s._v(" "),t("blockquote",[t("p",[s._v("groupadd 命令用于创建一个新的用户组，新用户组的信息将被添加到系统文件中。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/groupadd")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立一个新组，并设置组 ID 加入系统")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" -g "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("344")]),s._v(" jsdigname\n")])])]),t("h3",{attrs:{id:"_2-2-groupdel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-groupdel"}},[s._v("#")]),s._v(" 2.2. groupdel")]),s._v(" "),t("blockquote",[t("p",[s._v("groupdel 命令用于删除指定的用户组，本命令要修改的系统文件包括 "),t("code",[s._v("/ect/group")]),s._v(" 和 "),t("code",[s._v("/ect/gshadow")]),s._v("。若该群组中仍包括某些用户，则必须先删除这些用户后，方能删除群组。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/groupdel")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" damon  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建damon用户组")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v(" damon  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除这个用户组")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-3-groupmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-groupmod"}},[s._v("#")]),s._v(" 2.3. groupmod")]),s._v(" "),t("blockquote",[t("p",[s._v("groupmod 命令更改群组识别码或名称。需要更改群组的识别码或名称时，可用 groupmod 指令来完成这项工作。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/groupmod")])]),s._v(" "),t("h3",{attrs:{id:"_2-4-useradd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-useradd"}},[s._v("#")]),s._v(" 2.4. useradd")]),s._v(" "),t("blockquote",[t("p",[s._v("useradd 命令用于 Linux 中创建的新的系统用户。useradd 可用来建立用户帐号。帐号建好之后，再用 passwd 设定帐号的密码．而可用 userdel 删除帐号。使用 useradd 指令所建立的帐号，实际上是保存在 "),t("code",[s._v("/etc/passwd")]),s._v(" 文本文件中。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/useradd")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建用户加入组")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" –g sales jack –G company,employees    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g：加入主要组、-G：加入次要组")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立一个新用户账户，并设置 ID")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" caojh -u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("544")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-5-userdel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-userdel"}},[s._v("#")]),s._v(" 2.5. userdel")]),s._v(" "),t("blockquote",[t("p",[s._v("userdel 命令用于删除给定的用户，以及与用户相关的文件。若不加选项，则仅删除用户帐号，而不删除相关文件。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/userdel")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("p",[s._v("userdel 命令很简单，比如我们现在有个用户 linuxde，其 home 目录位于"),t("code",[s._v("/var")]),s._v("目录中，现在我们来删除这个用户：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" linuxde       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户linuxde，但不删除其家目录及文件；")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" -r linuxde    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户linuxde，其 home 目录及文件一并删除；")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-6-usermod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-usermod"}},[s._v("#")]),s._v(" 2.6. usermod")]),s._v(" "),t("blockquote",[t("p",[s._v("usermod 命令用于修改用户的基本信息。usermod 命令不允许你改变正在线上的使用者帐号名称。当 usermod 命令用来改变 user id，必须确认这名 user 没在电脑上执行任何程序。你需手动更改使用者的 crontab 档。也需手动更改使用者的 at 工作档。采用 NIS server 须在 server 上更动相关的 NIS 设定。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/usermod")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 newuser2 添加到组 staff 中")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G staff newuser2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 newuser 的用户名为 newuser1")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -l newuser1 newuser\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定账号 newuser1")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -L newuser1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解除对 newuser1 的锁定")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -U newuser1\n")])])]),t("h3",{attrs:{id:"_2-7-passwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-passwd"}},[s._v("#")]),s._v(" 2.7. passwd")]),s._v(" "),t("blockquote",[t("p",[s._v("passwd 命令用于设置用户的认证信息，包括用户密码、密码过期时间等。系统管理者则能用它管理系统用户的密码。只有管理者可以指定用户名称，一般用户只能变更自己的密码。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/passwd")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是普通用户执行 passwd 只能修改自己的密码。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果新建用户后，要为新用户创建密码，则用 passwd 用户名，注意要以 root 用户的权限来创建。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" linuxde    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改或创建linuxde用户的密码；")]),s._v("\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user linuxde.\nNew UNIX password:          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请输入新密码；")]),s._v("\nRetype new UNIX password:   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再输入一次；")]),s._v("\npasswd: all authentication tokens updated successfully. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 成功；")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通用户如果想更改自己的密码，直接运行 passwd 即可，比如当前操作的用户是 linuxde。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user linuxde. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改linuxde用户的密码；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" UNIX password:   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请输入当前密码；")]),s._v("\nNew UNIX password:         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请输入新密码；")]),s._v("\nRetype new UNIX password:  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认新密码；")]),s._v("\npasswd: all authentication tokens updated successfully. "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改成功；")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如我们让某个用户不能修改密码，可以用`-l`选项来锁定：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -l linuxde    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定用户linuxde不能更改密码；")]),s._v("\nLocking password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user linuxde.\npasswd: Success           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 锁定成功；")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" linuxde   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过su切换到linuxde用户；")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linuxde来更改密码；")]),s._v("\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user linuxde.\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" linuxde\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" UNIX password:          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入linuxde的当前密码；")]),s._v("\npasswd: Authentication token manipulation error     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 失败，不能更改密码；")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -d linuxde  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除linuxde用户密码；")]),s._v("\nRemoving password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user linuxde.\npasswd: Success                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除成功；")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -S linuxde    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询linuxde用户密码状态；")]),s._v("\nEmpty password.                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 空密码，也就是没有密码；")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-8-su"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-su"}},[s._v("#")]),s._v(" 2.8. su")]),s._v(" "),t("blockquote",[t("p",[s._v("su 命令用于切换当前用户身份到其他用户身份，变更时须输入所要变更的用户帐号与密码。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/su")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变更帐号为 root 并在执行 ls 指令后退出变回原使用者：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" root\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变更帐号为 root 并传入`-f`选项给新执行的 shell：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root -f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变更帐号为 test 并改变工作目录至 test 的家目录：")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -test\n")])])]),t("h3",{attrs:{id:"_2-9-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-sudo"}},[s._v("#")]),s._v(" 2.9. sudo")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo 命令用来以其他身份来执行命令，预设的身份为 root。在 "),t("code",[s._v("/etc/sudoers")]),s._v(" 中设置了可执行 sudo 指令的用户。若其未经授权的用户企图使用 sudo，则会发出警告的邮件给管理员。用户使用 sudo 时，必须先输入密码，之后有 5 分钟的有效期限，超过期限则必须重新输入密码。")]),s._v(" "),t("p",[s._v("参考：http://man.linuxde.net/sudo")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定用户执行命令")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -u userb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出目前的权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示sudo设置")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -L\n")])])]),t("h4",{attrs:{id:"_2-9-1-给普通用户授权-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-1-给普通用户授权-sudo"}},[s._v("#")]),s._v(" 2.9.1. 给普通用户授权 sudo")]),s._v(" "),t("p",[s._v("假设要给普通用户 mary 配置 sudo 权限：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("/etc/sudoers")]),s._v(" 文件存放了 sudo 的相关用户，但是默认是没有写权限的，所以需要设为可写："),t("code",[s._v("chmod u+w /etc/sudoers")])]),s._v(" "),t("li",[s._v("在该文件中添加 "),t("code",[s._v("mary ALL=(ALL) ALL")]),s._v(" ，保存并退出，让 mary 具有 sudo 的所有权限")]),s._v(" "),t("li",[s._v("再将 "),t("code",[s._v("/etc/sudoers")]),s._v(" 的权限恢复到默认状态："),t("code",[s._v("chmod u-w /etc/sudoers")])])]),s._v(" "),t("h4",{attrs:{id:"_2-9-2-免密码授权-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-2-免密码授权-sudo"}},[s._v("#")]),s._v(" 2.9.2. 免密码授权 sudo")]),s._v(" "),t("p",[s._v("与给普通用户授权 sudo 类似，区别仅在于第 2 步："),t("code",[s._v("mary ALL=(ALL) NOPASSWD: ALL")]),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);