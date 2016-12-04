export default {
  date: '2016-11-06',
  theme: 'OOP, react',
  agenda: `
- talk about oop [see this stackoverflow](http://stackoverflow.com/questions/9582341/adding-new-properties-to-constructor-function-without-prototype#9582407)
  - you can add functions to all strings by setting them on String.prototype
  - arrays too, same way
  - you can make your own cool types (CoolArray) kinda like this:

\`\`\`javascript
function CoolArray () {}
CoolArray.prototype = Array
CoolArray.addAnAlp = function () { this.push('alp') }
\`\`\`

- talk about libraries [see this codepen](http://codepen.io/amonks/pen/VmYQNV?editors=0010)

- talk about functions vs methods [see this codepen](http://codepen.io/amonks/pen/eBmMdy?editors=0010)

- talk about react
  - http://codepen.io/amonks/professor/JboLLz/
  - https://github.com/sunday-school/react/
`
}

