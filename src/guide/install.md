# Nilotica

## 初略安装流程
1. 进入[Releases](https://github.com/Lumosylva/Nilotica/releases)界面下载**对应版本**的 .whl 或 .tar.gz文件，.whl 是 Python 支持的安装文件，可以用 pip + whl 文件完整路径安装，或解压缩 .tar.gz 文件，.tar.gz 是源代码文件，可以通过解压得到所有项目源代码。

2. 安装 uv，uv 是本项目使用的 Python 虚拟环境及软件包管理工具，可以代替 conda，并且下载软件包速度是其它工具的几倍甚至十几倍。

   如果你是 Windows 系统，推荐在 powershell 中执行下述命令安装 uv：

   ```powershell
   powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
   ```

   如果是 Linux 系统，在终端中使用下述命令安装 uv：

   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

3. 安装 Python，建议安装本项目用的版本 **3.12.9**。

   ```powershell
   uv python install 3.12.9
   ```

4. 安装 whl 文件

   ```bash
   uv pip install nilotica-0.1.2-cp312-cp312-win_amd64.whl
   ```

   或解压缩 nilotica-0.1.0.tar.gz

5. Python虚拟环境的创建和依赖包的下载。

   进入到 Nilotica 项目根目录，执行下述命令让 uv 根据 pyproject.toml 中的配置，自动在项目根目录创建 Python 虚拟环境和依赖包下载：

   ```powershell
   uv sync
   ```

6. 安装 ta-lib 库。

   首先激活安装的 Python 虚拟环境

   ```powershell
   .venv\Scripts\activate
   ```

   如果是 Windows 系统，执行下述命令安装 ta-lib：

   ```powershell
   install_ta_lib.bat
   ```

   如果是 Linux 系统，执行下述命令安装 ta-lib：

   ```bash
   install_ta_lib.sh
   ```

7. 编译 VNPY_CTP（可选）

   编译 vnpy_ctp 不是必要执行的操作，本项目中自带 `CTP API 6.7.7` 接口文件和**穿透式实盘环境**的dll文件。

   ::: details CTP 介绍

   CTP 全称为综合交易平台（Comprehensive Transaction Platform），是上海期货交易所全资子公司上期技术公司推出的一套用于期货交易的系统。CTP API 则是这套系统提供给开发者的一组接口，方便开发者通过编程的方式接入 CTP 系统，进行期货交易的相关操作，以下是其具体介绍：

   - **系统架构** ：CTP 系统的架构分为前置层、核心层和应用层三个层次。前置层负责与交易所的通信，核心层处理交易逻辑，应用层则是开发者通过 API 接入的部分，这种分层设计既保证了高效的交易处理，又提供了灵活的扩展性。
   - **功能作用** ：通过 CTP API，开发者可以实现行情订阅、订单提交、成交回报、账户查询、历史数据回溯等功能，能够满足程序化交易的需求，如进行量化策略的开发和测试等，是程序化交易的核心基础设施。
   - **优势特点** ：具有高性能、低延迟，适合高频交易；经过多年市场验证，稳定性高；各大期货公司均提供 CTP 接口支持，具有广泛的应用和良好的兼容性。
   - **开发使用** ：开发者可以使用 C++、Python、Java、Rust 等编程语言来实现 CTP API 接口的开发，通过调用相关函数来完成与期货交易相关的操作，如在 Python 中可以使用 pybind11 或 swig 为官方 C++ 版 CTP 接口提供 Python 版 API，从而进行期货交易自动化开发。

   上期技术（上海期货信息技术有限公司）官网：https://www.shfe.com.cn/sfit/

   CTP API 下载地址：https://www.simnow.com.cn/static/apiDownload.action

   Tips：SimNow 是上期技术公司专为投资者打造的期货模拟仿真交易平台，也是上海期货交易所投资者教育网认证的期货模拟仿真系统。

   :::

   在编译之前请确保已经安装了Visual Studio（Windows）、GCC（Linux），这因为原始CTP API 是 C++ 开发的，需要编译为 Python 接口则需要 C++ 编译器。若需要编译其他版本 CTP API 则需要下载原始相应版本 CTP API 文件对项目中相关的文件进行替换再执行编译。

   - **清理旧的构建**

     如果是 Windows，打开 powershell 终端进入项目根目录，删除`dist`、`build`目录

     ```powershell
     Remove-Item -Recurse -Force dist, build -ErrorAction SilentlyContinue
     ```

     或 CMD 终端：

     ```bash
     rmdir /s /q dist
     rmdir /s /q build
     ```

     如果是 Linux 终端执行：

     ```bash
     rm -rf dist build
     ```

   - **执行构建**

     如果是 Windows 执行：

     ```powershell
     build.bat
     ```

     如果是 Linux 执行：

     ```bash
     build.sh
     ```

## 启动方式

Nilotica 有着众多启动方式，每种方式各有优点：

- **一键启动版本**：直接运行 run.bat，暂未提供 Linux 一键启动脚本。
- **各服务独立启动版本**：方便调试、启动灵活的特点。

> 悄悄话: 我还是推荐你用Shell的 毕竟~~~
### 一键启动方式
```powershell
build.bat
```

### 各服务独立启动方式

执行启动命令之前请确保激活当前 Python 虚拟环境：

```powershell
.venv\Scripts\activate
```

按下面的顺序启动这些服务

- 启动行情网关：python -m zmq_services.run_market_gateway
- 启动订单执行网关：python -m zmq_services.run_order_gateway
- 启动风险管理器：python -m zmq_services.run_risk_manager
- 启动数据记录器：python -m zmq_services.run_data_recorder
- 启动策略引擎：python -m zmq_services.run_strategy_engine

成功启动这几个核心服务后代表整个量化系统就已经跑起来了，行情网关和订单执行网关是其它服务的基础依赖服务所以要优先启动。

启动行情网关后，行情网关就会读取配置信息去调用底层 CTP API 连接交易所的行情服务器，然后订阅配置中指定的合约行情数据并且通过指定地址把行情发布出去，供其他服务使用。

启动订单执行网关后，订单执行网关也会读取配置信息去调用底层 CTP API 连接交易所的交易服务器，同时随时准备接受订单引擎发过来的订单请求（比如开仓、平仓）。

启动风险管理器后，风险管理器会通过订阅订单执行网关的发布地址，维护持仓信息，并根据配置信息对持仓的限制发出警告。

启动数据记录器后，数据记录器会通过订阅行情网关和订单执行网关的发布地址，实时记录tick、交易、账户等数据。

启动策略引擎后，策略引擎会自动加载配置的策略信息，执行策略脚本，向订单执行网关发出开仓、平仓等请求。