describe('basic', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul data-controller="checklist">
        <li>
          <input type="checkbox">
          <span>text 1</span>
        </li>
        <li>
          <input type="checkbox">
          <span>text 2</span>
        </li>
        <li>
          <input type="checkbox">
          <span>text 3</span>
        </li>
      </ul>
    `;
  });

  it('handles ctrl + click', () => {
    $$('span')[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    $$('span')[2].dispatchEvent(new MouseEvent('click', { bubbles: true, ctrlKey: true }));
    expect($$('input')[0].checked).toEqual(true);
    expect($$('input')[1].checked).toEqual(false);
    expect($$('input')[2].checked).toEqual(true);
  });

  it('handles shift + click', () => {
    $$('span')[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    $$('span')[2].dispatchEvent(new MouseEvent('click', { bubbles: true, shiftKey: true }));
    expect($$('input')[0].checked).toEqual(true);
    expect($$('input')[1].checked).toEqual(true);
    expect($$('input')[2].checked).toEqual(true);
  });

  it('handles shift + click with reverse order', () => {
    $$('span')[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    $$('span')[0].dispatchEvent(new MouseEvent('click', { bubbles: true, shiftKey: true }));
    expect($$('input')[0].checked).toEqual(true);
    expect($$('input')[1].checked).toEqual(true);
    expect($$('input')[2].checked).toEqual(true);
  });

  it('disables userselect', () => {
    $$('span')[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, ctrlKey: true }));
    expect($('ul').classList.contains('st-checklist--disable-us')).toEqual(true);
    $$('span')[0].dispatchEvent(new MouseEvent('userselect', { bubbles: true }));
    $$('span')[0].dispatchEvent(new MouseEvent('mouseup', { bubbles: true, ctrlKey: true }));
    $$('span')[0].dispatchEvent(new MouseEvent('userselect', { bubbles: true }));
    expect($('ul').classList.contains('st-checklist--disable-us')).toEqual(false);
  });
});
