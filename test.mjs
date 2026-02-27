import { parse } from './index.js';
import { inspect } from 'node:util';

function log(obj) {
    console.log(inspect(obj, { showHidden: true, depth: null }));
}

log(parse(`== This is Header ==

This is some [[Source Code]], which demostrates parwik library<ref>[https://github.com/jcubic/parwik parwik on GitHub]</ref>
`));
