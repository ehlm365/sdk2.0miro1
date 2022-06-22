async function init() {
  miro.board.ui.on("icon:click", async () => {

    // Get selected items
    let selectedItems = await miro.board.getSelection()

    // Filter sticky notes from selected items
    let stickyNotes = selectedItems.filter((item) => item.type === 'sticky_note')

    // Delete selected stickers
    for (const stickyNote of stickyNotes) {
      await miro.board.remove(stickyNote) 
    }

    // Create shapes from selected sticky notes
    for (const stickyNote of stickyNotes) {
      await miro.board.createShape({
        content: stickyNote.content,
        x: stickyNote.x,
        y: stickyNote.y,
        width: stickyNote.width,
        height: stickyNote.height
      }) 
    }

  });
}

init();
