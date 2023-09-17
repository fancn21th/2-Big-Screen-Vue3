import fuzzyPath from "inquirer-fuzzy-path";

export default function (plop) {
  // register more advanced prompt
  // refer to https://github.com/adelsz/inquirer-fuzzy-path
  plop.setPrompt("fuzzypath", fuzzyPath);

  // controller generator
  plop.setGenerator("component", {
    description: "create a component with your choices",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "组件类型",
        choices: ["page", "echart", "vue"],
      },
      {
        type: "input",
        name: "name",
        message: "组件名称",
      },
      {
        type: "fuzzypath",
        name: "path",
        message: "指定创建组件的文件夹目录",
        excludePath: (nodePath) => nodePath.startsWith("node_modules"),
        excludeFilter: (nodePath) => nodePath == ".",
        itemType: "directory",
        rootPath: "src/pages/",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{path}}/{{name}}.vue",
        templateFile: "src/examples/{{type}}/{{type}}.vue.hbs",
      },
    ],
  });
}
