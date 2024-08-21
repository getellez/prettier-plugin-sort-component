import { parse as _parse } from '@babel/parser';
/* 
  languages Notes:
  - name: The name of the language. It should be unique.
  - parsers: The parsers that will be used to parse the code. This should match the key of the parsers object.
  - extensions: The file extensions that will be used to identify the language.
 */
const languages = [
  {
    name: 'TypeScriptReact',
    parsers: ['babel'],
    extensions: ['.jsx']
  }
];

/* 
  babelParser Notes:
  - parse: this method should return the AST. That's why I rturned the .program property, if you use another parser it could be different.
  - astFormat: estree is a standard format to represent the Javascript AST for the Babel parser, other parser could have a different astFormat like typescript parser.
  - locStart: This method takes the AST node and returns the start position of the node in the original text. It's a position number.
  - locEnd: This method takes the AST node and returns the end position of the node in the original text. It's a position number.
  TIP: You can use web tools like https://astexplorer.net/ to see the AST of your ReactJS code with different parsers.
*/
const babelParser = {
  parse: (text) => _parse(text, { plugins: ['jsx'], sourceType: 'module' }).program,
  astFormat: 'estree',
  locStart: (node) => node.start,
  locEnd: (node) => node.end
};

/* 
  parsers Notes:
  - babel: The key of the parser object should match the name of the parser in the languages object.
*/
const parsers = {
  'babel': babelParser
};


/* 
  printers Notes:
  - estree: The key of the printer object should match the astFormat of the parser object.
  - print: Here you manipulate the AST and return the code as a string to put it into the output file.
*/
const printers = {
  estree: {
    print: (path, options, _print) => {
      const node = path.getValue();
      const text = options.originalText;

      // Return the exact same code from the .jsx file, and add a new line.
      return text.slice(node.start, node.end) + "\n'This is a new line'";
    }
  }
};

export default {
  languages,
  parsers,
  printers
};
