/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactDOM;
let ReactDOMServer;

describe('ReactSmoosh', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
    ReactDOMServer = require('react-dom/server');
  });

  it('works', () => {
    function Dialog({children}) {
      return (
        <div>
          <div>
            <div>
              <p>Hello</p>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      )
    }

    function Button({children}) {
      return (
        <button>{children}</button>
      )
    }

    function App() {
      return (
        <div>
          <div>
            <Dialog>
              <Button>
                Click me
              </Button>
            </Dialog>
          </div>
        </div>
      )
    }

    const container = document.createElement('div')
    ReactDOM.render(<App />, container)

    expect(container.innerHTML).toBe('<p>Hello</p><button>Click me</button>')
  })

})
