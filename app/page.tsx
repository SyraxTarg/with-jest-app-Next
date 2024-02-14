import Counter from './counter';
/*j'importe mon composant*/
export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
  <>
      <h1>App Router</h1>
      <Counter />
      /*j'ajoute mon composant*/
      /*si j'ajoute deux fois le même composant, chaque composant est indépendant*/
  </>
  );
}
