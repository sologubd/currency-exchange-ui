import m from "mithril";

export function MainView({ attrs }) {
  let color = "red";

  function colorChanged(ev) {
    color = ev.target.value;
  }

  function view({ attrs }) {
    return <h3>Currency exchange rate</h3>;
  }

  return { view };
}
