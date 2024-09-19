# WinMan - Window Manager for React

![WinMan](./WinMan.jpg)

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Dialog](#dialog)
   - [DialogManager](#dialogmanager)
   - [DialogContext](#dialogcontext)
4. [Customization](#customization)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This project provides a flexible and customizable dialog system for React applications.
It includes components for creating, managing, and displaying dialogs.

**Screenshot**

![WinMan-Example Dialogs](./WinMan-Demo.png)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Digitanalogik/react-window-manager
   cd react-window-manager
   ```

2. Install the dependencies:
   ```sh
   yarn install
   ```

## Usage

### Dialog

The `Dialog` component is used to create individual dialog windows.
It supports dragging and resizing.

**Example**

```typescript
import React from "react";
import { Dialog } from "./components/Dialog";

const MyComponent = () => (
  <Dialog
    id={1}
    title="My Dialog"
    position={{ x: 100, y: 100 }}
    visible={true}
    onClose={() => console.log("Dialog closed")}
    onResize={(id, size) => console.log("Dialog resized", id, size)}
  >
    <p>Dialog content goes here.</p>
  </Dialog>
);

export default MyComponent;
```

### DialogManager

The `DialogManager` component is responsible for managing multiple dialogs.
It uses the `DialogContext` to keep track of the dialogs' state.

**Example**

```typescript
import React from "react";
import { DialogManager } from "./components/DialogManager";

const App = () => (
  <DialogManager>{/* Your application components */}</DialogManager>
);

export default App;
```

### DialogContext

The `DialogContext` provides a context for managing dialogs.
It includes methods for adding, removing, and updating dialogs.

**Example**

```typescript
import React, { useContext } from "react";
import { DialogContext } from "./context/DialogContext";

const MyComponent = () => {
  const { addDialog, closeDialog } = useContext(DialogContext);

  const openDialog = () => {
    addDialog("New Dialog", <p>New dialog content</p>);
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
    </div>
  );
};

export default MyComponent;
```

## Customization

You can customize the dialogs by passing different props to the `Dialog` component.
Here are the customizable props:

- `title`: The title of the dialog.
- `position`: The initial position of the dialog.
- `visible`: Whether the dialog is visible.
- `component`: React component shown inside the dialog.
- `onClose`: A callback function that is called when the dialog is closed.
- `onResize`: A callback function that is called when the dialog is resized.

**Example**

```typescript
<Dialog
  id={2}
  title="Custom Dialog"
  position={{ x: 200, y: 200 }}
  visible={true}
  onClose={() => console.log("Custom dialog closed")}
  onResize={(id, size) => console.log("Custom dialog resized", id, size)}
>
  <p>Custom dialog content goes here.</p>
</Dialog>
```

## External Libraries

### react-draggable

[react-draggable](https://github.com/react-grid-layout/react-draggable) is used to make the dialogs draggable. This allows users to click and drag the dialogs to reposition them within the application window.

### react-resizable

[react-resizable](https://github.com/react-grid-layout/react-resizable) is used to make the dialogs resizable. This allows users to click and drag the edges or corners of the dialogs to resize them as needed.

```
~Tatu Soininen~
  -=[ 2024 ]=-
```
