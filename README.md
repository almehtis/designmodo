# The test task for Designmodo

[Task description](https://docs.google.com/document/d/1xGqHqxOnAAgSp58Ky6NDbsXMRmBmxgB1BwETXwuUyjc/edit), [Figma layout](https://www.figma.com/file/ZvBLBPt8WJ2MGIjFRmi8EI/Designmodo-Test-Task?node-id=0%3A1&t=2jvT7SMmXOEY4Jtc-0)

## To run this app locally:
1. Clone this repository;
2. Open it via your text editor or IDE;
3. Run `npm i`, `yan` or `pnpm i`

### Used stack:
- Vite;
- React;
- TypeScript;
- CSS;
- BEM (didn't use `id` or tags selectors, only `ClassName`);
- Class components because of the task conditions (OOP).

### Final app brief description:
Big part of decisions was made because of the task description. I didn't use any state manager, database or websockets, but I made this app scallable in some ways. If you want
to add more fonts, you just need to edit arguments for some helper functions. I used `LocalStorage` for saving information about current app's state. After the page's reload
you'll see previous app state, or the default state, if it was the initial page loading. If you want to reset `LocalStorage` and see the default app's page just go to your 
browser's `Local Storage` settings and delete all storaged information. You can find how to do this by search for questions like "Clear browser Local Storage" or something like this.
