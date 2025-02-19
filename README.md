# Cota - Quotation System

🚀 **Project Overview**  
Cota is a desktop application built with **Electron** and **React**. It allows to generate quotes for customers facilitating the management of budgets in an efficient way.

## 🌟 **Features**

- 🚀 Fast and efficient quotation generation
- 💰 Automatic tax calculation (IVA)
- 📑 Export quotations as PDFs
- 🔢 Automatic sequential quotation numbering
- 🖥️ Cross-platform compatibility (Windows, macOS, Linux)
- 🎨 Clean and user-friendly interface
- 🚧 Available for MacOS only (Windows and Linux coming soon).

## 🛠️ **Tech Stack**

- **Electron** - Framework for building cross-platform desktop apps
- **React** - Library for building user interfaces
- **TailwindCSS** - Utility-first CSS framework for responsive design
- **PDF-lib** - For generating PDFs of quotations
- **TypeScript** - Programming language for type safety

📚 **Documentation**

### Prerequisites

- **Node.js** - JavaScript runtime
- **Git** - Version Control System

### **Setup**

1. **Clone the repository**

```bash
git clone https://github.com/davic64/cota.git
cd cota
```

2. Install dependencies

```bash
yarn install
```

3. Run the development enviroment

```bash
yarn electron:dev
```

## Usage

1. When you open the application, you can enter the details of the quote.
2. The system will automatically calculate the total and apply the IVA tax.
3. You can export the quote in PDF format from the interface.
4. The quotation number will be generated automatically in sequence.

### Build for production

```bash
yarn electron:build
```

## 🤝 Contribute

Contributions are welcome! If you'd like to improve the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -am 'Added new feature'`
4. Push your changes to your forked repository: `git push origin feature/new-feature`
5. Create a Pull Request explaining the changes you made.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

🌟 Show your support
Give a ⭐️ if you like this project!

🙏🏼 Acknowledgments

[Electron](https://www.electronjs.org/)
[React](https://react.dev/)
[TailwindCSS](https://tailwindcss.com/)
[PDF-lib](https://pdf-lib.js.org/)
[TypeScript](https://www.typescriptlang.org/)
