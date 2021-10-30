import { Controller } from '@hotwired/stimulus';
import '@kanety/stimulus-static-actions';
import './index.scss';

export default class extends Controller {
  static values = {
    filter: { type: String, default: 'input[type=checkbox]' }
  };
  static actions = [
    ['element', 'click->check'],
    ['element', 'mousedown->disableUS'],
    ['element', 'mouseup->enableUS'],
    ['element', 'userselect->preventUS']
  ];

  get items() {
    return Array.from(this.element.children);
  }

  get checkboxes() {
    return this.scope.findAllElements(this.filterValue).filter(cb => !cb.disabled);
  }

  check(e) {
    if (e.target.matches('input, select, textarea')) return;

    let item = e.target;
    while (item && item.parentNode != this.element) item = item.parentNode;

    if (item) {
      this.update(item, e.shiftKey, e.ctrlKey);
    }
  }

  update(item, shift = false, ctrl = false) {
    let curr = this.current;

    if (shift && curr) {
      this.uncheckAll();
      this.checkBetween(curr, item);
    } else if (ctrl) {
      this.checkToggle(item);
    } else {
      this.uncheckAll();
      this.checkItem(item);
      this.current = item;
    }
  }

  uncheckAll() {
    this.checkboxes.forEach(cb => cb.checked = false);
  }

  checkItem(item) {
    let cb = this.checkboxAt(item);
    if (cb) cb.checked = true;
  }

  checkToggle(item) {
    let cb = this.checkboxAt(item);
    if (cb) cb.checked = !cb.checked;
  }

  checkBetween(item1, item2) {
    let items = this.items;
    let n1 = items.indexOf(item1);
    let n2 = items.indexOf(item2);

    if (n1 > n2) {
      [n1, n2] = [n2, n1];
    }

    items.slice(n1, n2 + 1).forEach(item => {
      let cb = this.checkboxAt(item);
      if (cb) cb.checked = true;
    });
  }

  checkboxAt(item) {
    let cb = item.querySelector(this.filterValue);
    return !cb.disabled ? cb : null;
  }

  disableUS(e) {
    if (e.ctrlKey || e.shiftKey) {
      this.toggleUS(false);
    }
  }

  enableUS(e) {
    if (e.ctrlKey || e.shiftKey) {
      this.toggleUS(true);
    }
  }

  toggleUS(enable) {
    this.disableUserSelect = !enable;
    if (enable) {
      this.element.classList.remove('st-checklist--disable-us');
    } else {
      this.element.classList.add('st-checklist--disable-us');
    }
  }

  preventUS(e) {
    if (this.disableUserSelect) {
      return false;
    } else {
      return true;
    }
  }
}
