```bash
$ git clone https://github.com/tonyganch/gpe-test.git
$ cd gpe-test
$ node
> var test = require('./')
undefined
> test('a{color:tomato}', 'css')
Check GPE is ok.
{ cssToAST: [Function],
  astToCSS: [Function: astToCSS],
  astToTree: [Function] }
function (options) {
        var css, rule, syntax;
        if (!options) throw new Error('Please, pass a string to parse');
        css = typeof options === 'string'? options : options.css;
        if (!css) throw new Error('String can not be empty');
        rule = options.rule || 'stylesheet';
        needInfo = options.needInfo || false;
        syntax = options.syntax || 'css';
        if (!syntaxes[syntax]) throw new Error('Syntax "' + _syntax +
                                              '" is not currently supported, sorry');
        s = syntaxes[syntax];
        getTokens(css, syntax);
        tokensLength = tokens.length;
        pos = 0;
        s.markBrackets();
        s.markSC();
        s.markBlocks && s.markBlocks();
        return rules[rule]();
    }
[ 'stylesheet',
  [ 'ruleset', [ 'selector', [Object] ], [ 'block', [Object] ] ] ]
> test('@import "panda"', 'sass')
Check GPE is ok.
{ cssToAST: [Function],
  astToCSS: [Function: astToCSS],
  astToTree: [Function] }
function (options) {
        var css, rule, syntax;
        if (!options) throw new Error('Please, pass a string to parse');
        css = typeof options === 'string'? options : options.css;
        if (!css) throw new Error('String can not be empty');
        rule = options.rule || 'stylesheet';
        needInfo = options.needInfo || false;
        syntax = options.syntax || 'css';
        if (!syntaxes[syntax]) throw new Error('Syntax "' + _syntax +
                                              '" is not currently supported, sorry');
        s = syntaxes[syntax];
        getTokens(css, syntax);
        tokensLength = tokens.length;
        pos = 0;
        s.markBrackets();
        s.markSC();
        s.markBlocks && s.markBlocks();
        return rules[rule]();
    }
[ 'stylesheet',
  [ 'atrules',
    [ 'atkeyword', [Object] ],
    [ 's', ' ' ],
    [ 'string', '"panda"' ] ] ]
```

