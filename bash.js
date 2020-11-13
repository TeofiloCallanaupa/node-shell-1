process.stdout.write("prompt > ");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

const fs = require("fs");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
    done();
  }
  if (cmd === "ls") {
    ls();
    done();
  }
  if (cmd.split(" ")[0] === "cat") {
    cat(cmd.split(" ")[1]);
    done();
  }
  if (cmd.split(" ")[0] === "curl") {
    curl(cmd.split(" ")[1]);
    done();
  }
});

const done = () => {
  // process.stdout.write("\n");
  process.stdout.write("\nprompt > ");
};
