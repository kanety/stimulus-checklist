describe('skip-tags', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul data-controller="checklist"
          data-checklist-skip-tags-value="span:last-child">
        <li>
          <input type="checkbox">
          <span>text 1</span>
          <input type="textarea">
          <span>text 1</span>
        </li>
      </ul>
    `;
  });

  it('does not check checkbox', () => {
    $('input[type=textarea]').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('input[type=checkbox]').checked).toEqual(false);

    $('span:last-child').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect($('input[type=checkbox]').checked).toEqual(false);
  });
});
