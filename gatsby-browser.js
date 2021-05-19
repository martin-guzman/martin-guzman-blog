/* 	Import ThemeProvider, GlobalStyles logic from root-wrapper.js.
		Export to wrap all pages */

import 'prismjs/plugins/command-line/prism-command-line.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'


import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/themes/prism.css'
import { wrapRootElement as wrap } from "./root-wrapper"

require("prismjs/themes/prism.css");



export const wrapRootElement = wrap




