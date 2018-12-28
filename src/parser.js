createArgsObject = function (options, files) {
  return { "options": options, "files": files };
}

const filesStartFrom = function (args) {
  for (let counter = 0; counter < args.length; counter++) {
    if (args[counter][0] !== "-") {
      return counter;
    }
  }
  return args.length;
}

const separateOptions = function (options) {
  let optionsWithoutDash = options.map((option) => option.slice(1));
  let separatedOptions = optionsWithoutDash.join("").split("");

  return separatedOptions;
}

const parseInputs = function (args) {
  const filesStartFromIndex = filesStartFrom(args);

  const options = args.slice(0, filesStartFromIndex);
  const files = args.slice(filesStartFromIndex);

  if (options.length != 0) {
    return createArgsObject(separateOptions(options), files);
  }

  return { options: ['l', 'w', 'c'], files: files };
}

module.exports = {
  parseInputs
}