# React Clock Component 🕙📅


[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Description 📄
Accessible, reusable, and highly performant date and time components for React applications. Uses TypeScript for strong type safety and custom hooks for efficient state management.

## Features 🌟

- Customizable date and time formats
- Efficient state management using React Hooks
- Strong type safety with TypeScript
- Highly reusable and separated date and time components for flexible layout
- Accessibility considerations for broad user inclusivity

## Installation 📥

To use these components in your project, clone this repository:

```bash
git clone https://github.com/username/react-clock-component.git
```

Then install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Usage 🚀

Import the components into your file:

```jsx
import DateComponent from './components/DateComponent';
import TimeComponent from './components/TimeComponent';
```

Then use them in your JSX:

```tsx
<DateComponent format={{ year: 'numeric', month: 'long', day: 'numeric' }} />
<TimeComponent format={{ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }} />
```

## License 📑

This project is licensed under the terms of the MIT license.

Feel free to use, modify, and distribute as you see fit, but please provide attribution to the original author.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

---

Crafted with ❤️ by [Mark Kimitch](https://github.com/mkimitch)
