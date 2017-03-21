# p2p-client [![Dependency Status][david-badge]][david-badge-url] [![devDependency Status][david-dev-badge]][david-dev-badge-url]

P2P cross platform mobile app created in colaboration between Just Arrived and Chalmers as a Bachelor thesis project.

* [Built with](#built-with)
* [Getting started](#getting-started)
* [Contributors](#contributors)
* [Contributing](#contributing)
* [License](#license)

## Built with
* **[React Native](https://facebook.github.io/react-native/)**

    > Open source project that lets developers build native Android and iOS apps using JavaScript and React.

* **[Native Base](http://nativebase.io/)**

    > Cross-platform UI components for React Native.

* **[Redux](http://redux.js.org/)**

    > A predictable state container for JavaScript apps.

* **[Atom](https://atom.io/)**

    > A hackable text editor for the 21st Century.

### Suggested Atom packages
* **[react](https://atom.io/packages/react)** (by [orktes](https://atom.io/users/orktes))

    > React.js (JSX) language support, indentation, snippets, auto completion, reformatting.

* **[nuclide](https://atom.io/packages/nuclide)** (by [facebook](https://atom.io/users/facebook))

    > A unified developer experience for web and mobile development, built as a suite of features on top of Atom to provide hackability and the support of an active community.

* **[linter](https://atom.io/packages/linter)** (by [steelbrain](https://atom.io/users/steelbrain))

    > A Base Linter with Cow Powers.

* **[linter-eslint](https://atom.io/packages/linter-eslint)** (by [AtomLinter](https://atom.io/users/AtomLinter))

    > Lint JavaScript on the fly, using ESLint.

##### **Settings**
```json
"linter-eslint":
  fixOnSave: true
```
* **[atom-beautify](https://atom.io/packages/atom-beautify)** (by [Glavin001](https://atom.io/users/Glavin001))

    > Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Atom.

##### **Settings**
```json
"atom-beautify":
  js:
    beautify_on_save: true
    default_beautifier: "Pretty Diff"
    indent_size: 2
    max_preserve_newlines: 2
  jsx:
    beautify_on_save: true
    default_beautifier: "Pretty Diff"
    indent_size: 2
    max_preserve_newlines: 2
```

## Getting started
_Prerequisites_: nodejs, npm and the react native CLI.<br/>

To setup your development environment run the following commands in the terminal or command prompt
```
$ git clone https://github.com/justarrived/p2p-client.git

$ cd p2p-client/

$ npm install

$ react-native link
```
Simulate the app with your prefered method for your platform and React Native.

## Contributors

[Our awesome contributors](https://github.com/justarrived/p2p-client/graphs/contributors).

## Contributing

This is an open source project and contributions will be very welcome in the future. However while the project is still part of the Bsc our ability to accept those contributions will be limited.

## License

This project is open source and licensed under [MIT](LICENSE).


[david-badge]: https://david-dm.org/justarrived/p2p-client.svg
[david-badge-url]: https://david-dm.org/justarrived/p2p-client
[david-dev-badge]: https://david-dm.org/justarrived/p2p-client/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/justarrived/p2p-client?type=dev
