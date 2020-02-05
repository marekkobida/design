import CSS from '../CSS';

class Tabs extends CSS {
  css () {
    return `.tab {
  border-bottom: 0.0625rem solid rgb(var(--border--border-color));
}
.tab_active {
  border-bottom-color: rgb(var(--border--border-color));
  border-bottom-width: 0.1875rem;
}
.tab_active,
.tab:hover {
  font-weight: var(--heading--font-weight);
}`;
  }
}

export default Tabs;
