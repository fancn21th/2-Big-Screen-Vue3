import fuzzyPath from "inquirer-fuzzy-path";

export default function (plop) {
  // fuzzypath refer to https://github.com/adelsz/inquirer-fuzzy-path
  plop.setPrompt("fuzzypath", fuzzyPath);

  // controller generator
  plop.setGenerator("component", {
    description: "create a component with your choices",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "组件类型",
        choices: ["page", "chart"],
      },
      {
        type: "input",
        name: "name",
        message: "组件名称",
      },
      {
        type: "input",
        name: "name2",
        message: "子组件名称(三级路由存在时)",
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
    // actions refer to  https://plopjs.com/documentation/#taking-it-further
    actions: function (data) {
      var actions = [];

      // file name case refer to https://plopjs.com/documentation/#case-modifiers
      if (data.type === "page") {
        actions.push({
          type: "addMany",
          destination: "{{path}}/{{lowerCase name}}",
          base: "src/examples/{{type}}",
          templateFiles: "src/examples/{{type}}/**",
          stripExtensions: ["hbs"],
        });
      } else if (data.type === "chart") {
        actions.push({
          type: "addMany",
          destination: "{{path}}/{{lowerCase name}}",
          base: "src/examples/{{type}}",
          templateFiles: "src/examples/{{type}}/**",
          stripExtensions: ["hbs"],
        });
      }

      return actions;
    },
  });
}
