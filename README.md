# debug模块

我总结的编程境界有3

- 打日志，console.log
- 断点，debug
- 测试驱动

对打日志来说，虽然看起来不太雅观，但确实最实际的解决方式，某知名Java架构师不了解Node，竟然拿console.log鼓捣了一上午，修复了一个bug。说来也是有意识的很。

打日志真的很low吗？不一定，本文将展示更好的做法：npm上的debug模块。

要点

- Node.js源码里如何打日志？
- debug简介
- debug实例
- 业务场景高级玩法
- debug转日志
- 八卦：express和debug的关系么

