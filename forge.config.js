module.exports = {  
  packagerConfig: {
    // 基础配置（一般这些就够用了）
    name: "MyElectronApp", // 应用程序的名称
    productName: "My Electron App", // 产品名称（用于生成安装包的名称）
    icon: "path/to/icon.png", // 应用程序的图标路径
    out: "build/", // 输出目录的路径
    overwrite: true, // 是否覆盖已存在的打包文件
    asar: true, // 是否使用asar打包格式
    version: "1.0.0", // 应用程序版本号
    copyright: "Copyright © 2023", // 版权信息
    ignore: [ // 不需要打包的文件和文件夹的路径列表
      ".git",
      ".vscode",
      "node_modules/.cache",
      "src"
    ],
    osxSign: true,
    // osxSign: {},
    // osxNotarize: {
    //   tool: 'notarytool',
    //   appleId: process.env.APPLE_ID,
    //   appleIdPassword: process.env.APPLE_PASSWORD,
    //   teamId: process.env.APPLE_TEAM_ID
    // },
    // 配置其他构建器（特殊情况下使用）
    win: {
      // Windows平台的配置
      target: "nsis", // 打包的目标格式为NSIS安装程序
      icon: "path/to/windows/icon.ico", // Windows平台的图标路径
      publisherName: "My Company", // 发布者名称
      fileAssociations: [ // 关联文件类型的配置
        {
          ext: "myext", // 文件扩展名
          name: "My Extension", // 文件类型名称
          description: "Open My Extension files", // 文件类型描述
          role: "Editor" // 文件类型的角色
        }
      ],
      certificateFile: "path/to/certificate.pfx", // 数字证书文件的路径
      certificatePassword: "password123" // 数字证书的密码
    },
    mac: {
      // macOS平台的配置
      target: "dmg", // 打包的目标格式为DMG镜像
      icon: "path/to/mac/icon.icns", // macOS平台的图标路径
      category: "public.app-category.utilities", // 应用程序的分类
      extendInfo: {
        // 扩展应用程序包的配置
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true // 允许应用程序加载任意的网络资源
        }
      }
    },
    linux: {
      // Linux平台的配置
      target: "deb", // 打包的目标格式为DEB包
      icon: "path/to/linux/icon.png", // Linux平台的图标路径
      category: "Utility", // 应用程序的分类
      description: "My Electron App", // 应用程序的描述
      desktop: {
        // 创建桌面快捷方式的配置
        Name: "My Electron App", // 快捷方式的名称
        Comment: "My Electron App", // 快捷方式的注释
        Exec: "./MyElectronApp", // 快捷方式的执行命令
        Terminal: false // 是否在终端中打开应用程序
      }
    }
  }, 
  rebuildConfig: {},  
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "electron_quick_start"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin", "linux"
      ]
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // background: './assets/dmg-background.png',
        format: 'ULFO'
      }
      // config: {
      //   name: 'YourAppName'
      // }
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
   }
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
   }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'your-username',
          name: 'your-project'
        },
        draft: true, // optional, default is false
        prerelease: true // optional, default is false
      }
    }
  ]
};