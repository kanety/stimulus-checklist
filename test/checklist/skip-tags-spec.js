describe('skip-tags', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul data-controller="checklist"
          data-checklist-filter-value="input.first">
        <li>
          <input type="checkbox" class="first">
          <span>text 1</span>
          <input type="textarea">
        </li>
      </ul>
    `;
  });

  it('does not check checkbox', () => {
    $('input[type=textarea]').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('input[type=checkbox]').checked).toEqual(false);
  });
});
