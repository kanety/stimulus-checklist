describe('filter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul data-controller="checklist"
          data-checklist-filter-value="input.first">
        <li>
          <input type="checkbox" class="first">
          <span>text 1</span>
          <input type="checkbox" class="last">
        </li>
      </ul>
    `;
  });

  it('filters checkboxes', () => {
    $('span').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('input.first').checked).toEqual(true);
    expect($('input.last').checked).toEqual(false);
  });
});
