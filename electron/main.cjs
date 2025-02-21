const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

const dbFolder = path.join(__dirname, "..", "src", "db");
const quotesData = path.join(dbFolder, "quotes.json");

if (!fs.existsSync(dbFolder)) {
  fs.mkdirSync(dbFolder, { recursive: true });
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 12, y: 12 },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Save data in JSON
// -- Quotes --
ipcMain.handle("save-quote", async (_, data) => {
  let exitingData = [];

  try {
    if (fs.existsSync(quotesData)) {
      const jsonData = fs.readFileSync(quotesData, "utf-8");

      if (jsonData.trim()) {
        try {
          exitingData = JSON.parse(jsonData);
          if (!Array.isArray(exitingData)) {
            console.warn(
              "El archivo no contiene un array válido. Se usará un array vacío."
            );
            exitingData = [];
          }
        } catch (error) {
          console.error("Error al parsear el archivo JSON:", error);
          exitingData = [];
        }
      }
    }

    exitingData.push(data);
    fs.writeFileSync(quotesData, JSON.stringify(exitingData, null, 2));

    return { success: true };
  } catch (error) {
    console.error("Error al guardar la cotización:", error);
    return { success: false, message: error.message };
  }
});

ipcMain.handle("get-quotes", async () => {
  if (!fs.existsSync(quotesData)) return [];

  try {
    const jsonData = fs.readFileSync(quotesData, "utf-8");
    if (!jsonData.trim()) {
      return [];
    }
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return [];
  }
});

ipcMain.handle("remove-quote", async (_, id) => {
  if (!fs.existsSync(quotesData)) return null;
  try {
    const jsonData = fs.readFileSync(quotesData, "utf-8");
    const quotes = JSON.parse(jsonData);

    const filteredQuotes = quotes.filter((item) => item.no !== id);

    fs.writeFileSync(
      quotesData,
      JSON.stringify(filteredQuotes, null, 2),
      "utf-8"
    );
    return { success: true };
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
// -- End Quotes --
