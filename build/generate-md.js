const fs = require("fs");
const path = require("path");

function traverseDirectorySync(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            traverseDirectorySync(filePath);
        } else if (path.extname(filePath) === ".js") {
            jsFilePaths.push(filePath);
        }
    });
}

function createMarkdownFile(jsFilePaths, outputFilePath) {
    let mdContent = `## 30 天 JavaScript 挑战

专为 JavaScript 初学者设计

掌握必备 JavaScript 技能

前端人，前端魂，刷完 JS 即入门!
    
题目地址：[https://leetcode.cn/studyplan/30-days-of-javascript/](https://leetcode.cn/studyplan/30-days-of-javascript/)

个人学习笔记：[https://github.com/kaimo313/30-days-of-javascript](https://github.com/kaimo313/30-days-of-javascript)\n\n`;

    jsFilePaths.forEach((filePath) => {
        const content = fs.readFileSync(filePath, "utf8");
        mdContent += "### " + filePath.substring(filePath.indexOf("doc\\") + 4, filePath.lastIndexOf(".")) + "\n\n";
        mdContent += "```javascript\n" + content + "\n```\n\n";
    });

    fs.writeFileSync(outputFilePath, mdContent);
}

// 调用遍历函数和生成 Markdown 函数
const folderPath = "./doc"; // 文件夹路径
const outputFilePath = "./README.md"; // 生成的 Markdown 文件路径

const jsFilePaths = [];
traverseDirectorySync(folderPath);

createMarkdownFile(jsFilePaths, outputFilePath);
