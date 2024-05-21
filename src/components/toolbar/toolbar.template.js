function toButton(button) {
  const meta = `data-type="button"
    data-value='${JSON.stringify(button.value)}'`;
  return `
    <div
      class="button ${button.active ? 'active' : ''}"
        ${meta}
    >
      <span class="material-icons"
        ${meta}
      >
        ${button.incon}
      </span>
    </div>
  `;
}

export function createToolbar(state) {
  const buttons = [
    {
      incon: 'format_align_left',
      active: state['textAlign'] === 'left',
      value: {textAlign: 'left'}
    },
    {
      incon: 'format_align_center',
      active: state['textAlign'] === 'center',
      value: {textAlign: 'center'}
    },
    {
      incon: 'format_align_right',
      active: state['textAlign'] === 'right',
      value: {textAlign: 'right'}
    },
    {
      incon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      incon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      incon: 'format_underlined',
      active: state['textDecoration'] === 'underline',
      value: {textDecoration: state['textDecoration'] === 'underline'
        ? 'none'
        : 'underline'}
    },
  ];

  return buttons.map(toButton).join('');
}
