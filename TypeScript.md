


### 状态码类别


|       | 类别          | 原因短语        |
|----   |:--------------:|:-------------:|
|1xx    | Informational | 接受的请求正在处理       |
|2xx    | Success       | 请求正常处理完毕         |
|3xx    | Redirection   | 需要进行附加操作以完成请求|
|4xx    | Client Error  | 服务器无法处理请求       |
|5xx    | Server Error  | 服务器请求处理出错       |

```
    REST是“呈现状态转移（REpresentational State Transfer）”的缩写，一种API的架构风格，在客户端和服务端之间通过呈现状态的转移来驱动应用状态的演进。

    在 REST 样式的 Web 服务中，每个资源都有一个地址。资源本身都是方法调用的目标，方法列表对所有资源都是一样的。这些方法都是标准方法，包括 HTTP GET、POST、PUT、DELETE，还可能包括 HEADER 和 OPTIONS。
    RESTful的API设计，使得后端通过接口向前端传递数据，数据的格式通常是JSON这种通用的格式。对前端来说，只要后端返回过来的是RESTful的数据就行，不管后端是用Java写，还是用python或PHP，拜托对后端的依赖，做到前端系统的独立。
```

