import { getRandomElement } from '../utils/get.random.element';

const exampleNotes = [
  'ideas for a new project',
  'shopping list',
  'important dates',
  'personal reflections or thoughts',
];

export function NotesWidget() {
  // fix: добавить новую сущность в базу данных + прописать логику
  return (
    <div className="bg-gradient-to-b from-cyan-900 to-cyan-700 rounded-3xl p-layout col-span-2 flex flex-col gap-2">
      <h3>Notes</h3>
      <textarea
        className="h-full bg-white/10 p-2 rounded-lg outline-none resize-none"
        placeholder={`...${getRandomElement(exampleNotes)}`}
      />
    </div>
  );
}
