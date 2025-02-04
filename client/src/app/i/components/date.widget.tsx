export function DateWidget() {
  return (
    <div className="p-layout aspect-square bg-gradient-to-br from-accent from-50% to-enhancer to-50% rounded-3xl flex justify-center flex-col gap-2 items-center text-center">
      <h2>
        {new Date().toLocaleString('en-En', {
          day: 'numeric',
          month: 'long',
        })}
      </h2>
      <span>Time to work</span>
    </div>
  );
}
