# WinMan - Window Manager for React

![WinMan](./WinMan.jpg)

## Introduction

`DialogManager` and `Dialog` are components designed to manage and display dialogs in a React application. These components provide a flexible and customizable way to handle dialog windows, making it easy to create, move, and resize dialogs within your application.

## Features

- **DialogManager**: Manages multiple dialogs, ensuring they are displayed correctly and can be interacted with independently.
- **Dialog**: A customizable dialog component that can be moved and resized.
- **Draggable and Resizable**: Utilizes `react-draggable` and `react-resizable` to provide drag-and-drop and resize functionality.

## External Libraries

### react-draggable

`react-draggable` is used to make the dialogs draggable. This allows users to click and drag the dialogs to reposition them within the application window.

### react-resizable

`react-resizable` is used to make the dialogs resizable. This allows users to click and drag the edges or corners of the dialogs to resize them as needed.

## Installation

To install the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/dialog-manager.git
    cd dialog-manager
    ```

2. Install the dependencies:
    ```sh
    yarn install
    ```

## Usage

Here's an example of how to use `DialogManager` and `Dialog` in your React application:

```jsx
import React from 'react';
import DialogManager from './components/DialogManager';
import Dialog from './components/Dialog';

function App() {
  return (
    <div className="App">
      <DialogManager>
        <Dialog title="Sample Dialog" initialPosition={{ x: 100, y: 100 }} initialSize={{ width: 300, height: 200 }}>
          <p>This is a sample dialog content.</p>
        </Dialog>
      </DialogManager>
    </div>
  );
}

export default App;
```
