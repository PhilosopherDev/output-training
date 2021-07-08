const messageModule = require("./messages");
// console.log(messageModule);
// messageModule.messages.forEach(m => console.log(m));

/** 위 아래는 같은 코드, 꺼내는 방법의 차이일 뿐 */

// const {messages} = require("./messages");
// messages.forEach(m => console.log(m));

/***/

const messageModule2 = require("./messages2");
console.log(module, module.children[0].exports, module.children[1].exports);
/**
// from messages
{
  messages: [
    'A change of environment can be a good thing!',
    'You will make it!',
    'Just run with the code!'
  ]
} 

// from messages2
{ messages2: [ 'hello', 'world' ] }

 */

exports.test = "hi";
console.log(module);
/**

결국 mudule 안에 들어있다. 

<ref *1> Module {
  id: '.',
  path: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation',
  exports: { test: 'hi' }, // => 현재 파일의 exports
  parent: null,
  filename: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/printMessages.js',
  loaded: false,
  children: [
    Module {
      id: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/messages.js',
      path: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation',
      exports: [Object], // => messages
      parent: [Circular *1],
      filename: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/messages.js',
      loaded: true,
      children: [],
      paths: [Array]
    },
    Module {
      id: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/messages2.js',
      path: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation',
      exports: [Object], // => messages2
      parent: [Circular *1],
      filename: '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/messages2.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  ],
  paths: [
    '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/03_NodeJSModuleCreation/node_modules',
    '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/GetProgrammingWithNodeJS/node_modules',
    '/Users/choibyungmin01045842518/Documents/OutputTraining/book/NodeJS/node_modules',
    '/Users/choibyungmin01045842518/Documents/OutputTraining/book/node_modules',
    '/Users/choibyungmin01045842518/Documents/OutputTraining/node_modules',
    '/Users/choibyungmin01045842518/Documents/node_modules',
    '/Users/choibyungmin01045842518/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

 */