import { app, BrowserWindow } from 'electron'
import { join } from 'pathe'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2]
    win.loadURL(`http://localhost:${rendererPort}`)
  } else {
    win.loadFile(join(app.getAppPath(), 'dist', 'renderer', 'index.html'))
  }
}

app.whenReady().then(() => {
  // windows, linux
  createWindow()
  // macos
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
